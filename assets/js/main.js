// Empêche Chrome de restaurer la position de scroll de la session précédente
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// ===== Navigation =====
document.addEventListener('DOMContentLoaded', () => {

    // Supprimer tout hash dans l'URL
    if (location.hash) { history.replaceState(null, '', location.pathname + location.search); }

    // ── Conteneur de scroll : .main-content, pas window ──
    // La fenêtre (window) reste toujours à scrollY=0.
    // Chrome ne peut donc jamais restaurer ou naviguer vers un ancre.
    const mainContent = document.querySelector('.main-content');
    const sections    = document.querySelectorAll('.section');
    const navLinks    = document.querySelectorAll('.nav-link');
    const navUl       = document.querySelector('.sidebar-nav');

    // Forcer le haut au démarrage
    mainContent.scrollTop = 0;

    // ── Barre de progression ──
    const progressWrap = document.createElement('div');
    progressWrap.className = 'scroll-progress';
    progressWrap.innerHTML = '<div class="scroll-progress__bar"></div>';
    document.body.appendChild(progressWrap);
    const progressBar = progressWrap.querySelector('.scroll-progress__bar');

    // ── Bouton retour en haut ──
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
    scrollTopBtn.innerHTML = '&#8593;';
    scrollTopBtn.addEventListener('click', () => {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(scrollTopBtn);

    // ── Indicateur glissant ──
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    navUl.prepend(indicator);

    function setActive(id) {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute('data-section') === id;
            link.classList.toggle('active', isActive);
            if (isActive) {
                const li = link.parentElement;
                indicator.style.top    = li.offsetTop + 'px';
                indicator.style.height = li.offsetHeight + 'px';
            }
        });
    }

    // ── Clic nav ──
    let isScrolling = false;
    let scrollEndTimer = null;

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id     = link.getAttribute('data-section');
            const target = document.getElementById(id);
            if (!target) return;

            isScrolling = true;
            clearTimeout(scrollEndTimer);
            setActive(id);

            // Position du target dans .main-content
            const top = target.getBoundingClientRect().top
                      - mainContent.getBoundingClientRect().top
                      + mainContent.scrollTop;
            mainContent.scrollTo({ top: Math.round(top), behavior: 'smooth' });

            scrollEndTimer = setTimeout(() => { isScrolling = false; }, 1000);
        });
    });

    // ── Détection section active au scroll ──
    function updateActive() {
        if (isScrolling) return;
        const containerTop = mainContent.getBoundingClientRect().top;
        let current = sections[0] ? sections[0].id : '';
        sections.forEach((sec) => {
            const secTop = sec.getBoundingClientRect().top - containerTop;
            if (secTop < mainContent.clientHeight * 0.35) {
                current = sec.id;
            }
        });
        setActive(current);
    }

    // ── Scroll handler sur mainContent ──
    let ticking = false;
    mainContent.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateActive();
            const scrollY = mainContent.scrollTop;
            const maxY    = mainContent.scrollHeight - mainContent.clientHeight;
            progressBar.style.width = maxY > 0 ? (scrollY / maxY * 100) + '%' : '0%';
            scrollTopBtn.classList.toggle('visible', scrollY > 400);
            ticking = false;
        });
    }, { passive: true });

    // ── Init ──
    setActive('home');
    createParticles();
    animateCounters('.stat-number[data-target]');
    animateCounters('.counter[data-target]');
    animateSkillBars();
    initProjectTabs();
    initBgCanvas();
});

// ===== CANVAS FOND ANIMÉ =====
function initBgCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // ── Étoiles statiques ──
    const STAR_COUNT = 120;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.004 + 0.002,
        phase: Math.random() * Math.PI * 2,
        color: ['#a78bfa','#6c63ff','#ffd700','#38bdf8','#f472b6','#22c55e'][Math.floor(Math.random()*6)]
    }));

    // ── Étoiles filantes ──
    const shootingStars = [];
    function spawnShooting() {
        shootingStars.push({
            x: Math.random() * canvas.width * 0.7,
            y: Math.random() * canvas.height * 0.4,
            len: 120 + Math.random() * 180,
            speed: 8 + Math.random() * 10,
            alpha: 1,
            angle: Math.PI / 5 + Math.random() * 0.3,
            color: ['#fff','#a78bfa','#ffd700','#38bdf8'][Math.floor(Math.random()*4)],
            life: 0,
            maxLife: 40 + Math.random() * 30
        });
    }
    let shootTimer = 0;

    // ── Orbes flottants ──
    const orbs = [
        { x: 0.2, y: 0.3, r: 200, color: 'rgba(108,99,255,0.07)', dx: 0.15, dy: 0.08 },
        { x: 0.75, y: 0.6, r: 160, color: 'rgba(167,139,250,0.06)', dx: -0.12, dy: 0.10 },
        { x: 0.5,  y: 0.8, r: 130, color: 'rgba(255,215,0,0.05)',   dx: 0.10, dy: -0.09 },
        { x: 0.85, y: 0.2, r: 110, color: 'rgba(34,197,94,0.04)',   dx: -0.08, dy: 0.12 },
    ].map(o => ({ ...o, ox: o.x, oy: o.y, t: Math.random() * 1000 }));

    function draw(ts) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const W = canvas.width, H = canvas.height;

        // Orbes
        orbs.forEach(o => {
            o.t += 0.005;
            const x = (o.ox + Math.sin(o.t * o.dx) * 0.12) * W;
            const y = (o.oy + Math.cos(o.t * o.dy) * 0.10) * H;
            const g = ctx.createRadialGradient(x, y, 0, x, y, o.r);
            g.addColorStop(0, o.color);
            g.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(x, y, o.r, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
        });

        // Étoiles scintillantes
        stars.forEach(s => {
            s.alpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(ts * s.speed + s.phase));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.globalAlpha = s.alpha;
            ctx.fill();
        });
        ctx.globalAlpha = 1;

        // Étoiles filantes
        shootTimer++;
        if (shootTimer > 90 + Math.random() * 120) {
            spawnShooting();
            shootTimer = 0;
        }
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const s = shootingStars[i];
            s.life++;
            const progress = s.life / s.maxLife;
            const alpha = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;
            const ex = s.x + Math.cos(s.angle) * s.len * progress;
            const ey = s.y + Math.sin(s.angle) * s.len * progress;
            const grad = ctx.createLinearGradient(s.x, s.y, ex, ey);
            grad.addColorStop(0, 'transparent');
            grad.addColorStop(0.6, s.color);
            grad.addColorStop(1, s.color);
            ctx.beginPath();
            ctx.moveTo(s.x + Math.cos(s.angle) * s.len * Math.max(0, progress - 0.3), s.y + Math.sin(s.angle) * s.len * Math.max(0, progress - 0.3));
            ctx.lineTo(ex, ey);
            ctx.strokeStyle = grad;
            ctx.globalAlpha = alpha * 0.9;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
            if (s.life >= s.maxLife) shootingStars.splice(i, 1);
        }

        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
}

// ===== PARTICULES =====
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = (80 + Math.random() * 20) + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';

        const colors = ['#6c63ff', '#a78bfa', '#ffd700', '#22c55e', '#818cf8'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;

        container.appendChild(particle);
    }
}

// ===== COMPTEURS ANIMÉS =====
function animateCounters(selector) {
    const statNumbers = document.querySelectorAll(selector);
    const root = document.querySelector('.main-content');

    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseFloat(el.getAttribute('data-target'));
                    const isDecimal = target % 1 !== 0;
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = eased * target;

                        if (isDecimal) {
                            el.textContent = current.toFixed(2);
                        } else {
                            el.textContent = Math.floor(current).toLocaleString('fr-FR');
                        }

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            el.textContent = isDecimal
                                ? target.toFixed(2)
                                : target.toLocaleString('fr-FR');
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(el);
                }
            });
        },
        { threshold: 0.5, root: root }
    );

    statNumbers.forEach((el) => counterObserver.observe(el));
}

// ===== BARRES DE COMPÉTENCES =====
function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar[data-level]');
    const root = document.querySelector('.main-content');

    const barObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = bar.getAttribute('data-level') + '%';
                    bar.classList.add('animated');
                    barObserver.unobserve(bar);
                }
            });
        },
        { threshold: 0.08, root: root }
    );

    bars.forEach((bar) => barObserver.observe(bar));
}

// ===== FILTRES PROJETS (TABS) =====
function initProjectTabs() {
    const tabs  = document.querySelectorAll('.proj-tab');
    const cards = document.querySelectorAll('.proj-card');

    if (!tabs.length || !cards.length) return;

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.classList.remove('proj-tab--active'));
            tab.classList.add('proj-tab--active');

            const category = tab.getAttribute('data-category');

            cards.forEach((card, i) => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.classList.remove('hidden');
                    card.style.animation = 'none';
                    card.offsetHeight;
                    card.style.animation = 'projFadeIn 0.4s ease forwards';
                    card.style.animationDelay = (i * 0.06) + 's';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}
