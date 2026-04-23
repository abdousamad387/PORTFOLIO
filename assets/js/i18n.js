/* =====================================================
   i18n, Bilingual EN / FR
   Default : English. Toggle stored in localStorage.
   ===================================================== */

const TRANSLATIONS = {
  en: {
    /* ── Page ── */
    'page.title': 'ASF – Portfolio',

    /* ── Sidebar nav groups ── */
    'navg.home':         'Home',
    'navg.expertise':    'Expertise',
    'navg.achievements': 'Achievements',
    'navg.more':         'More',

    /* ── Nav links ── */
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.experience': 'Experience',
    'nav.education':  'Education',
    'nav.projects':   'Projects',
    'nav.impact':     'Impact',
    'nav.blog':       'Blog',
    'nav.contact':    'Contact',

    /* ── Copyright ── */
    'cp.rights':  'All rights reserved',
    'cp.citizen': 'Citizen of the World',
    'cp.eco':     '🌍 Let\'s protect our planet',

    /* ── Hero ── */
    'hero.badge':    'World Bank Youth Summit 2025 Delegate',
    'hero.greeting': 'Hello, I am',
    'hero.tagline':  'I turn <strong>25 years of NASA/ESA satellite data</strong> into intelligence systems that protect territories, anticipate crises, and drive development, anywhere on Earth.<br><span class="tagline-secondary">From <em>TERRASIGHT</em> to <em>AquaMind</em>, I build geospatial solutions that shape the world of tomorrow.</span>',
    'hero.stat.ml':        'ML Accuracy',
    'hero.stat.zones':     'Areas analyzed',
    'hero.stat.deployed':  'Deployed',
    'hero.stat.satellite': 'Satellite data',
    'hero.signature': 'Turning planetary data into decisions that matter.',

    /* ── About ── */
    'about.tag':   'Who I am',
    'about.title': 'About <span class="title-accent">Me</span>',
    'about.quote': 'Every satellite pixel carries a piece of our planet\'s story. My mission: decode it, so every territory, on every continent, can act with intelligence.',
    'about.lead':  'Geospatial data speaks to those who know how to listen. I am <strong>Abdou Samad Faye</strong>, a Geo-Data Scientist bridging <em>25 years of planetary satellite archives</em> and the strategic decisions that reshape territories, across Africa, Europe, Asia, and beyond.',
    'about.p2':    'Where others see raw images, I decode land shifts, vegetation loss signals, climate-driven risks, and urban expansion patterns, converting them into <strong>alerts, decision maps, and WebGIS applications</strong> accessible to governments, researchers, and organizations worldwide. Africa was my proving ground. The planet is my canvas.',
    'about.p3':    'I master complex multi-sensor environments (Landsat, Sentinel, MODIS, GEDI LiDAR) and translate fragmented data into <strong>clear models, proven predictions, and measurable outcomes</strong>. <em>TERRASIGHT</em> achieved 95.09% ML accuracy. <em>AquaMind</em> forecasts floods with 92% reliability. These are not regional achievements, they are global-grade benchmarks.',
    'about.p4':    'My edge? Merging scientific rigor with the power of Machine Learning and the reach of WebGIS, so every analysis becomes a <strong>living, deployed tool</strong> that drives real decisions. Wherever data exists on this planet, I can turn it into value.',
    'about.h.vision':   'The vision',
    'about.h.passion':  'The passion',
    'about.h.ambition': 'The ambition',
    'about.h.method':   'The method',
    'about.d.vision':   'Build a new generation of planetary geospatial intelligence, making satellite data useful, actionable, and accessible to every decision-maker on Earth.',
    'about.d.passion':  'Every morning I wake up to decode the planet. Every pixel, every spectral band is a clue toward a better-informed world.',
    'about.d.ambition': 'From TERRASIGHT to AquaMind, each project sets a new global benchmark, and the next one reaches further, for more people, on more continents.',
    'about.d.method':   'Python, SQL, GEE, Random Forest, Deep Learning, WebGIS, a full-stack geospatial toolkit built to serve global impact.',

    /* ── Skills ── */
    'skills.tag':   'Technical Arsenal',
    'skills.title': 'Skills <span class="title-accent">&amp; Expertise</span>',
    'skills.desc':  'A full-stack geospatial ecosystem, from satellite acquisition to decision dashboard, deployable anywhere on Earth.',
    'skill.cat.remote': 'Remote Sensing &amp; GEE',
    'skill.cat.gis':    'GIS &amp; WebGIS',
    'skill.cat.prog':   'Programming &amp; Data',
    'skill.cat.ml':     'AI &amp; Machine Learning',
    'skill.cat.db':     'Databases &amp; Cloud',
    'skill.cat.viz':    'Visualization &amp; Reporting',
    'skill.cat.env':    'Environment &amp; Agriculture',
    'skill.cat.tools':  'Tools &amp; Soft Skills',
    'skills.lang.title': 'Languages',
    /* actual categories in HTML */
    'skill.cat.ds':   'Data Science &amp; AI',
    'skill.cat.web':  'Web Development',
    'skill.cat.db2':  'Databases',
    'skill.cat.iot':  'IoT &amp; Monitoring',
    'lang.fr.level': 'Native language',
    'lang.en.level': 'Advanced professional',
    'lang.wo.level': 'Native language',

    /* ── Experience ── */
    'exp.tag':   'Professional Path',
    'exp.title': 'Experience <span class="title-accent">&amp; Commitment</span>',
    'exp.desc':  'From crisis fieldwork to AI platforms, each mission sharpens a toolkit built for global-scale challenges.',
    'exp.1.date': 'Jan. - Dec. 2025',
    'exp.1.type': 'Full-time',
    'exp.1.t1': 'Production of operational WebGIS products for governments and development partners in West Africa',
    'exp.1.t2': 'Transformation of complex geospatial data into decision-making indicators: thematic maps, accessibility analyses, and dashboards',
    'exp.1.t3': 'Applied ML models: automated satellite feature extraction, spatial predictive analytics, real-time dashboards',
    'exp.1.t4': 'Coordination with field teams for validation and integration of collected data',
    'exp.2.date': '2024, Present',
    'exp.2.type': 'Founder',
    'exp.2.t1': 'Leading a geospatial and AI solutions structure for sustainable development in West Africa',
    'exp.2.t2': 'Delivery of <strong>8 public geospatial applications</strong> covering environment, agriculture, health, urban planning, and finance',
    'exp.2.t3': 'Multi-project management, institutional partnerships (CSE Senegal, OMVS), international applications (UNEP, World Bank, ADB)',
    'exp.2.t4': 'Capacity building and training on GIS tools and remote sensing',
    'exp.3.date': 'Aug. - Sep. 2025',
    'exp.3.type': 'Volunteer',
    'exp.3.role': 'Cartographer &amp; Field Coordinator',
    'exp.3.t1': '<strong>Coordination of a team of ~10 people</strong> in the field during a real crisis (floods)',
    'exp.3.t2': 'Participatory mapping of flood zones, field data collection with local communities',
    'exp.3.t3': 'Deployment of monitoring tools: <strong>KoBoToolbox + GPS + MerginMaps + ArcGIS Pro</strong>',
    'exp.3.t4': 'Concrete deliverables: vulnerability maps, field reports, georeferenced data',
    'exp.3.t5': 'Final WebGIS with <strong>vulnerability and flood exposure dashboards</strong>',
    'exp.3.impact': '⚡ High-impact humanitarian field mission',
    'exp.4.date': 'Aug. - Nov. 2024',
    'exp.4.type': 'Internship',
    'exp.4.role': 'Geomatics &amp; Environment Intern',
    'exp.4.t1': 'Geospatial analysis and digital mapping of study areas in West Africa',
    'exp.4.t2': 'Sensor data processing, geographic database management, local COD creation',
    'exp.4.t3': 'Production of operational maps and cartographic reports for institutional clients',
    'exp.4.t4': 'Training and technical support to teams on GIS software (QGIS, ArcGIS)',
    'exp.eng.title': 'Humanitarian &amp; Community Commitment',
    'exp.eng.1.role': 'External Affairs Officer',
    'exp.eng.1.org':  'Humanitarian Club, UCAD',
    'exp.eng.1.desc': 'Coordination with humanitarian organizations, external representation, dissemination of results',
    'exp.eng.2.role': 'Volunteer',
    'exp.eng.2.org':  'NGO Village Pilote, 2020–2022',
    'exp.eng.2.desc': 'Community field support, awareness of local populations',
    'exp.eng.3.role': 'Environment Manager',
    'exp.eng.3.org':  'Geosciences Club, UAM',
    'exp.eng.3.desc': 'Scientific outreach and GIS/remote sensing knowledge transfer to peers',

    /* ── Education ── */
    'edu.tag':   'Academic Path',
    'edu.title': 'Education <span class="title-accent">&amp; Training</span>',
    'edu.desc':  'A path forged between fundamental sciences, geomatics, and artificial intelligence.',
    'edu.status.current': 'In progress',
    'edu.status.done':    'Obtained',
    'edu.1.degree': 'Master in Artificial Intelligence &amp; Digital Solutions Management',
    'edu.2.degree': 'Master in Geomatics and Spatial Analysis',
    'edu.2.detail': 'Department of Applied Geosciences and Environment, Remote Sensing, Spatial Data Science, AI, Spatial Analysis',
    'edu.2.thesis': 'Thesis: <em>Urban expansion Greater Dakar 2000–2025</em>, invited co-publication in VertigO journal (Supervisor: Prof. Bocar SY)',
    'edu.3.degree': 'Professional Bachelor in Applied Geo-informatics',
    'edu.4.degree': 'Preparatory Classes, Math · Physics · Engineering Sciences',
    'edu.5.degree': 'Scientific Baccalaureate S2',

    /* ── Projects ── */
    'proj.tag':   'What I build',
    'proj.title': 'Projects <span class="title-accent">&amp; Work</span>',
    'proj.desc':  'From environmental intelligence to predictive systems, each project solves a real problem, at any scale, anywhere.',
    'proj.tab.all': 'All',
    'proj.featured': '⭐ Featured project',

    /* ── Impact ── */
    'impact.tag':   'Measurable Results',
    'impact.title': 'Impact &amp; <span class="title-accent">Key Results</span>',
    'impact.desc':  'Measurable results, scalable solutions, proven across territories, continents, and challenges.',
    'impact.l1': 'Random Forest Accuracy',
    'impact.l2': 'Mapped areas',
    'impact.d2': 'Land use change, Greater Dakar 2000–2025',
    'impact.l3': 'Degraded vegetation detected',
    'impact.d3': 'High-resolution LiDAR GEDI analysis',
    'impact.l4': 'WebGIS deployed',
    'impact.d4': 'Public applications in production',
    'impact.l5': 'Satellite data processed',
    'impact.l6': 'Residents protected',
    'impact.d6': 'AquaMind, Flood forecasting, 92% accuracy',
    'impact.m1': '<strong>+23%</strong> modeled agricultural yields',
    'impact.m2': '<strong>+17%</strong> modeled energy production',
    'impact.awards.title': 'Recognition',
    'impact.award.1.name': '1st Prize Hackathon KAIKAI\'DEV',
    'impact.award.1.desc': 'AIRSEN project, 45 teams competing',
    'impact.award.2.name': 'Finalist Grand Prize of the President',
    'impact.award.2.desc': 'Selected among 500+ national projects',
    'impact.award.3.name': 'World Bank Group Youth Summit 2025 Delegate',
    'impact.award.3.desc': 'Washington D.C., Official representative',

    /* ── Blog ── */
    'blog.tag':   'Path &amp; References',
    'blog.title': 'Articles, <span class="title-accent">Awards</span> &amp; Certifications',

    /* ── Contact ── */
    'contact.tag':   'Let\'s work together',
    'contact.title': 'Ready to <span class="title-accent">Collaborate&nbsp;?</span>',
    'contact.desc':  'Geo-Data Scientist and geospatial engineer, I transform complex planetary data into clear, strategic decisions.<br>Open to missions, research collaborations, and partnerships worldwide, <strong style="color:var(--accent)">let\'s build something that matters, together.</strong>',
    'contact.email.cta':    'Send a message →',
    'contact.linkedin.cta': 'View profile →',
    'contact.github.cta':   'View projects →',
    'contact.banner1': '🚀&nbsp; From planetary data to informed decisions, wherever you are, whatever the challenge.',
    'contact.banner2': 'Interactive maps, ML models, geospatial dashboards or WebGIS , <br>I deliver solutions with <em style="color:var(--accent)">strong, measurable, global impact</em>, on time.',
  },

  fr: {
    /* ── Page ── */
    'page.title': 'ASF – Portfolio',

    /* ── Sidebar nav groups ── */
    'navg.home':         'Accueil',
    'navg.expertise':    'Expertise',
    'navg.achievements': 'Réalisations',
    'navg.more':         'Plus',

    /* ── Nav links ── */
    'nav.home':       'Accueil',
    'nav.about':      'À propos',
    'nav.skills':     'Compétences',
    'nav.experience': 'Expérience',
    'nav.education':  'Éducation',
    'nav.projects':   'Projets',
    'nav.impact':     'Impact',
    'nav.blog':       'Blog',
    'nav.contact':    'Contact',

    /* ── Copyright ── */
    'cp.rights':  'Tous droits réservés',
    'cp.citizen': 'Citoyen du Monde',
    'cp.eco':     '🌍 Protégeons notre planète',

    /* ── Hero ── */
    'hero.badge':    'Délégué World Bank Youth Summit 2025',
    'hero.greeting': 'Bonjour, je suis',
    'hero.tagline':  'Je transforme <strong>25 ans de données satellite NASA/ESA</strong> en systèmes d\'intelligence qui protègent les territoires, anticipent les crises et accélèrent le développement, partout sur Terre.<br><span class="tagline-secondary">De <em>TERRASIGHT</em> à <em>AquaMind</em>, je construis des solutions géospatiales qui façonnent le monde de demain.</span>',
    'hero.stat.ml':        'Précision ML',
    'hero.stat.zones':     'Zones analysées',
    'hero.stat.deployed':  'Déployées',
    'hero.stat.satellite': 'Données satellite',
    'hero.signature': 'Des données planétaires aux décisions qui comptent.',

    /* ── About ── */
    'about.tag':   'Qui suis-je',
    'about.title': 'À <span class="title-accent">Propos</span>',
    'about.quote': 'Chaque pixel satellite porte un fragment de l\'histoire de notre planète. Ma mission : le décoder, pour que chaque territoire, sur chaque continent, agisse avec intelligence.',
    'about.lead':  'Les données géospatiales parlent à ceux qui savent les écouter. Je suis <strong>Abdou Samad Faye</strong>, Geo-Data Scientist qui fait le pont entre <em>25 ans d\'archives satellite planétaires</em> et les décisions stratégiques qui reconfigurent des territoires, en Afrique, en Europe, en Asie et au-delà.',
    'about.p2':    'Là où d\'autres voient des images brutes, je décode les dynamiques d\'occupation des sols, les signaux de dégradation végétale, les risques climatiques et les expansions urbaines, pour les convertir en <strong>alertes, cartes décisionnelles et applications WebGIS</strong> accessibles aux gouvernements, chercheurs et organisations du monde entier. L\'Afrique a été mon terrain de démonstration. La planète est ma toile.',
    'about.p3':    'Je maîtrise les environnements multi-capteurs complexes (Landsat, Sentinel, MODIS, LiDAR GEDI) et traduis des données fragmentées en <strong>modèles clairs, prédictions éprouvées et résultats mesurables</strong>. <em>TERRASIGHT</em> atteint 95,09 % de précision ML. <em>AquaMind</em> prédit les crues avec 92 % de fiabilité. Ce ne sont pas des résultats régionaux, ce sont des standards de niveau mondial.',
    'about.p4':    'Mon avantage ? Fusionner la rigueur scientifique avec la puissance du Machine Learning et la portée du WebGIS, pour que chaque analyse devienne un <strong>outil vivant et déployé</strong> qui pilote de vraies décisions. Là où les données existent sur cette planète, j\'en extrais de la valeur.',
    'about.h.vision':   'La vision',
    'about.h.passion':  'La passion',
    'about.h.ambition': 'L\'ambition',
    'about.h.method':   'La méthode',
    'about.d.vision':   'Construire une nouvelle génération d\'intelligence géospatiale planétaire, rendre les données satellite utiles, actionnables et accessibles à chaque décideur sur Terre.',
    'about.d.passion':  'Chaque matin, je me lève pour décoder la planète. Chaque pixel, chaque bande spectrale est un indice vers un monde mieux informé.',
    'about.d.ambition': 'De TERRASIGHT à AquaMind, chaque projet établit un nouveau standard mondial, et le suivant va plus loin, pour plus de personnes, sur plus de continents.',
    'about.d.method':   'Python, SQL, GEE, Random Forest, Deep Learning, WebGIS, un arsenal géospatial complet au service d\'un impact mondial.',

    /* ── Skills ── */
    'skills.tag':   'Arsenal technique',
    'skills.title': 'Compétences <span class="title-accent">&amp; Skills</span>',
    'skills.desc':  'Un écosystème géospatial complet, de l\'acquisition satellite au tableau de bord décisionnel, déployable partout sur Terre.',
    'skill.cat.remote': 'Télédétection &amp; GEE',
    'skill.cat.gis':    'SIG &amp; WebGIS',
    'skill.cat.prog':   'Programmation &amp; Data',
    'skill.cat.ml':     'IA &amp; Machine Learning',
    'skill.cat.db':     'Bases de données &amp; Cloud',
    'skill.cat.viz':    'Visualisation &amp; Reporting',
    'skill.cat.env':    'Environnement &amp; Agriculture',
    'skill.cat.tools':  'Outils &amp; Soft Skills',
    'skills.lang.title': 'Langues',
    /* actual categories in HTML */
    'skill.cat.ds':   'Data Science &amp; IA',
    'skill.cat.web':  'Développement Web',
    'skill.cat.db2':  'Bases de Données',
    'skill.cat.iot':  'IoT &amp; Monitoring',
    'lang.fr.level': 'Langue maternelle',
    'lang.en.level': 'Professionnel avancé',
    'lang.wo.level': 'Langue maternelle',

    /* ── Experience ── */
    'exp.tag':   'Parcours professionnel',
    'exp.title': 'Expérience <span class="title-accent">&amp; Engagement</span>',
    'exp.desc':  'Du terrain en crise aux plateformes IA, chaque mission affine un arsenal construit pour relever des défis à l\'échelle mondiale.',
    'exp.1.date': 'Jan. - Déc. 2025',
    'exp.1.type': 'CDI',
    'exp.1.t1': 'Production de produits WebSIG opérationnels pour gouvernements et partenaires au développement en Afrique de l\'Ouest',
    'exp.1.t2': 'Transformation de données géospatiales complexes en indicateurs décisionnels : cartes thématiques, analyses d\'accessibilité et tableaux de bord',
    'exp.1.t3': 'Modèles ML appliqués : extraction automatisée de features satellite, analytics prédictifs spatiaux, dashboards temps réel',
    'exp.1.t4': 'Coordination avec équipes terrain pour validation et intégration des données collectées',
    'exp.2.date': '2024, Présent',
    'exp.2.type': 'Fondateur',
    'exp.2.t1': 'Direction d\'une structure de solutions géospatiales et IA pour le développement durable en Afrique de l\'Ouest',
    'exp.2.t2': 'Livraison de <strong>8 applications géospatiales publiques</strong> couvrant environnement, agriculture, santé, urbanisme et finance',
    'exp.2.t3': 'Gestion multi-projets, partenariats institutionnels (CSE Sénégal, OMVS), candidatures internationales (PNUE, World Bank, BAD)',
    'exp.2.t4': 'Renforcement de capacités et formation sur outils SIG et télédétection',
    'exp.3.date': 'Août, Sep. 2025',
    'exp.3.type': 'Volontariat',
    'exp.3.role': 'Cartographe &amp; Coordinateur Terrain',
    'exp.3.t1': '<strong>Coordination d\'une équipe de ~10 personnes</strong> sur le terrain en contexte de crise réelle (inondations)',
    'exp.3.t2': 'Cartographie participative des zones d\'inondation, collecte de données terrain avec populations locales',
    'exp.3.t3': 'Déploiement d\'outils de suivi et surveillance : <strong>KoBoToolbox + GPS + MerginMaps + ArcGIS Pro</strong>',
    'exp.3.t4': 'Livrables concrets : cartes de vulnérabilité, rapports de terrain, données géoréférencées',
    'exp.3.t5': 'WebGIS final avec <strong>dashboards de vulnérabilité et d\'exposition</strong> aux inondations',
    'exp.3.impact': '⚡ Mission terrain à fort impact humanitaire',
    'exp.4.date': 'Août, Nov. 2024',
    'exp.4.type': 'Stage',
    'exp.4.role': 'Stagiaire Géomatique &amp; Environnement',
    'exp.4.t1': 'Analyse géospatiale et cartographie numérique de zones d\'étude en Afrique de l\'Ouest',
    'exp.4.t2': 'Traitement de données capteurs, gestion de bases de données géographiques, création de CODs locaux',
    'exp.4.t3': 'Production de cartes opérationnelles et rapports cartographiques pour clients institutionnels',
    'exp.4.t4': 'Formation et support technique aux équipes sur logiciels SIG (QGIS, ArcGIS)',
    'exp.eng.title': 'Engagement Humanitaire &amp; Communautaire',
    'exp.eng.1.role': 'Chargé des Affaires Extérieures',
    'exp.eng.1.org':  'Club Humanitaire, UCAD',
    'exp.eng.1.desc': 'Coordination avec organisations humanitaires, représentation externe, diffusion de résultats',
    'exp.eng.2.role': 'Volontaire',
    'exp.eng.2.org':  'ONG Village Pilote, 2020–2022',
    'exp.eng.2.desc': 'Soutien communautaire terrain, sensibilisation des populations locales',
    'exp.eng.3.role': 'Responsable Environnement',
    'exp.eng.3.org':  'Geosciences Club, UAM',
    'exp.eng.3.desc': 'Animation scientifique et transfert de compétences SIG/télédétection aux pairs',

    /* ── Education ── */
    'edu.tag':   'Parcours académique',
    'edu.title': 'Formation <span class="title-accent">&amp; Éducation</span>',
    'edu.desc':  'Un parcours forgé entre sciences fondamentales, géomatique et intelligence artificielle.',
    'edu.status.current': 'En cours',
    'edu.status.done':    'Obtenu',
    'edu.1.degree': 'Master Intelligence Artificielle &amp; Management des Solutions Numériques',
    'edu.2.degree': 'Master Géomatique et Analyse Spatiale',
    'edu.2.detail': 'Département Géosciences Appliquées et Environnement, Télédétection, Data Science spatiale, IA, Analyse spatiale',
    'edu.2.thesis': 'Thèse : <em>Expansion urbaine Grand Dakar 2000–2025</em>, co-publication invitée revue VertigO (Dir. Prof. Bocar SY)',
    'edu.3.degree': 'Licence Professionnelle en Géo-informatiques Appliquée',
    'edu.4.degree': 'Classes Préparatoires, Math · Physique · Sciences Ingénieur',
    'edu.5.degree': 'Baccalauréat Sciences Expérimentales S2',

    /* ── Projects ── */
    'proj.tag':   'Ce que je construis',
    'proj.title': 'Projets <span class="title-accent">&amp; Réalisations</span>',
    'proj.desc':  'De l\'intelligence environnementale aux systèmes prédictifs, chaque projet résout un problème réel, à toute échelle, en tout lieu.',
    'proj.tab.all': 'Tous',
    'proj.featured': '⭐ Projet phare',

    /* ── Impact ── */
    'impact.tag':   'Résultats mesurables',
    'impact.title': 'Impact &amp; Résultats <span class="title-accent">Clés</span>',
    'impact.desc':  'Des résultats mesurables, des solutions scalables, éprouvés sur des territoires, des continents et des défis variés.',
    'impact.l1': 'Précision Random Forest',
    'impact.l2': 'Zones cartographiées',
    'impact.d2': 'Changement d\'usage des sols, Grand Dakar 2000–2025',
    'impact.l3': 'Végétation dégradée détectée',
    'impact.d3': 'Analyse LiDAR GEDI haute résolution',
    'impact.l4': 'WebGIS déployées',
    'impact.d4': 'Applications publiques en production',
    'impact.l5': 'Données satellite traitées',
    'impact.l6': 'Habitants protégés',
    'impact.d6': 'AquaMind, Prévision inondations, 92 % de précision',
    'impact.m1': '<strong>+23 %</strong> rendements agricoles modélisés',
    'impact.m2': '<strong>+17 %</strong> production énergétique modélisée',
    'impact.awards.title': 'Reconnaissances',
    'impact.award.1.name': '1er Prix Hackathon KAIKAI\'DEV',
    'impact.award.1.desc': 'Projet AIRSEN, 45 équipes en compétition',
    'impact.award.2.name': 'Finaliste Grand Prix du Chef de l\'État',
    'impact.award.2.desc': 'Sélectionné parmi 500+ projets nationaux',
    'impact.award.3.name': 'Délégué World Bank Group Youth Summit 2025',
    'impact.award.3.desc': 'Washington D.C., Représentant officiel',

    /* ── Blog ── */
    'blog.tag':   'Parcours &amp; Références',
    'blog.title': 'Articles, <span class="title-accent">Awards</span> &amp; Certifications',

    /* ── Contact ── */
    'contact.tag':   'Travaillons ensemble',
    'contact.title': 'Prêt à <span class="title-accent">Collaborer&nbsp;?</span>',
    'contact.desc':  'Geo-Data Scientist et ingénieur géospatial, je transforme des données planétaires complexes en décisions stratégiques claires.<br>Disponible pour des missions, collaborations de recherche et partenariats partout dans le monde, <strong style="color:var(--accent)">construisons ensemble quelque chose qui compte.</strong>',
    'contact.email.cta':    'Envoyer un message →',
    'contact.linkedin.cta': 'Voir le profil →',
    'contact.github.cta':   'Voir les projets →',
    'contact.banner1': '🚀&nbsp; Des données planétaires aux décisions éclairées, où que vous soyez, quel que soit le défi.',
    'contact.banner2': 'Cartes interactives, modèles ML, dashboards géospatiaux ou WebGIS , <br>je livre des solutions à <em style="color:var(--accent)">fort impact mesurable et mondial</em>, dans les délais.',
  }
};

/* ── Apply language ── */
function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  const t = TRANSLATIONS[lang];

  document.documentElement.lang = lang;
  document.title = t['page.title'];

  /* text nodes */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* html nodes */
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* update toggle button appearance */
  document.querySelectorAll('.lang-toggle').forEach(function(btn) {
    var enBtn = btn.querySelector('[data-lang="en"]');
    var frBtn = btn.querySelector('[data-lang="fr"]');
    if (enBtn) enBtn.classList.toggle('lang-toggle__btn--active', lang === 'en');
    if (frBtn) frBtn.classList.toggle('lang-toggle__btn--active', lang === 'fr');
  });

  localStorage.setItem('asf_lang', lang);
}

/* ── Init on DOM ready ── */
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('asf_lang') || 'en';
  applyLanguage(saved);

  /* Toggle button click */
  document.querySelectorAll('.lang-toggle__btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var lang = btn.getAttribute('data-lang');
      applyLanguage(lang);
    });
  });
});
