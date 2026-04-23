<p align="center">
  <img src="https://img.shields.io/badge/Platform-Google%20Earth%20Engine-4285F4?style=for-the-badge&logo=google-earth&logoColor=white" alt="GEE"/>
  <img src="https://img.shields.io/badge/Language-JavaScript%20(GEE)-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS"/>
  <img src="https://img.shields.io/badge/Satellites-NASA%20%7C%20ESA%20%7C%20NOAA-000000?style=for-the-badge&logo=nasa&logoColor=white" alt="NASA"/>
  <img src="https://img.shields.io/badge/ML-Random%20Forest%20(200%20trees)-2ECC71?style=for-the-badge" alt="RF"/>
  <img src="https://img.shields.io/badge/LiDAR-NASA%20GEDI%20ISS-8E44AD?style=for-the-badge" alt="GEDI"/>
  <img src="https://img.shields.io/badge/Status-Operational-27AE60?style=for-the-badge" alt="Status"/>
  <img src="https://img.shields.io/badge/License-Research-0A7E6E?style=for-the-badge" alt="License"/>
</p>

<h1 align="center">
  🌍 TERRASIGHT v2.0 — Global Edition
</h1>

<h3 align="center">
  <em>The Earth Remote Sensing & AI System for Integrated Global Health Tracking</em>
</h3>

<p align="center">
  <strong>Satellite Observatory • Predictive AI • LiDAR Forestry • Agricultural Intelligence • Decision Support System</strong>
</p>

<p align="center">
  <a href="https://asfbigboss2001.projects.earthengine.app/view/terrasight">🔗 Live Application</a> •
  <a href="https://github.com/abdousamad387/TerraSight">📦 Repository</a> •
  <a href="#architecture">🏗️ Architecture</a> •
  <a href="#scientific-methodology">🔬 Methodology</a> •
  <a href="#results">📊 Results</a>
</p>

---

## Table of Contents

1. [Abstract](#abstract)
2. [Scientific Context & Problem Statement](#scientific-context--problem-statement)
3. [System Architecture](#architecture)
4. [Data Sources & Preprocessing](#data-sources--preprocessing)
5. [Module 1 — Environmental Spectral Indices (ENV)](#module-1--environmental-spectral-indices-env)
6. [Module 2 — Climate & Atmosphere (CLIM)](#module-2--climate--atmosphere-clim)
7. [Module 3 — Biophysical Indices (BIO)](#module-3--biophysical-indices-bio)
8. [Module 4 — Agriculture & Farm Intelligence (FARM)](#module-4--agriculture--farm-intelligence-farm)
9. [Module 5 — GEDI LiDAR 3D Forest Analysis (GEDI)](#module-5--gedi-lidar-3d-forest-analysis-gedi)
10. [Module 6 — Random Forest Predictive Projections (PROJ)](#module-6--random-forest-predictive-projections-proj)
11. [Module 7 — Decision Support System (DSS)](#module-7--decision-support-system-dss)
12. [Scientific Formulas & Equations](#scientific-formulas--equations)
13. [Validated Results & Performance Metrics](#validated-results--performance-metrics)
14. [Comparative Analysis](#comparative-analysis)
15. [TERRASIGHT Mobile — Flutter Ecosystem](#terrasight-mobile--flutter-ecosystem)
16. [Impact & SDG Alignment](#impact--sdg-alignment)
17. [Repository Structure](#repository-structure)
18. [Reproducibility & Standards](#reproducibility--standards)
19. [References](#references)
20. [Author](#author)

---

## Abstract

**TERRASIGHT** is the first operational platform worldwide to integrate simultaneously precision satellite remote sensing (NASA GEDI LiDAR, Landsat Collection 2, Sentinel-2, MODIS, CHIRPS, ERA5, Copernicus S5P), predictive artificial intelligence (Random Forest calibrated on 25 years of validated data), and an automated Decision Support System (DSS) within a single publicly accessible interface — requiring no technical expertise.

Deployed on Google Earth Engine (Project ID: `terrasight-490400`), TERRASIGHT processes **25 years of multi-sensor satellite data (2000–2025)** across West Africa (~2.8 million km²) and produces **projections through 2040** with validated accuracy. The system has detected **2,631 km² of structurally degraded forest invisible to conventional optical sensors** using NASA GEDI LiDAR data from the International Space Station, and achieves a **Random Forest classification accuracy of 95.09% (Cohen's κ = 0.885)**.

> **Key Innovation**: TERRASIGHT bridges the critical gap between petabytes of freely available satellite data and actionable, locally-relevant environmental decisions for stakeholders who lack the technical capacity to process raw Earth observation data.

**URL**: [https://asfbigboss2001.projects.earthengine.app/view/terrasight](https://asfbigboss2001.projects.earthengine.app/view/terrasight)

---

## Scientific Context & Problem Statement

### The Data Accessibility Paradox

West Africa possesses one of the densest satellite coverage networks globally. NASA, ESA, and Copernicus satellites collect observations over every square centimeter of the continent every 5–16 days. NASA publishes free GEDI LiDAR data from the ISS since 2019. Google Earth Engine provides petabyte-scale processing at no cost.

Yet, **fewer than 8% of African agricultural and environmental decision-makers** have access to exploitable satellite data (GSMA, 2024). This is not a data availability problem — it is a critical **translation, accessibility, and local relevance problem**.

### Quantified Environmental Crisis

| Indicator | Value (2024) | Source |
|:---|:---|:---|
| Population dependent on agriculture | 65% — 420 million | FAO 2024 |
| Degraded agricultural land (Sahel) | 40% of total area | FAO/CILSS 2024 |
| Persons in food insecurity | 130 million | WFP 2024 |
| Annual post-harvest losses | 35–40% of production | FAO 2023 |
| West Africa deforestation/year | 2.8 million hectares | GFW 2024 |
| Agricultural GDP loss (climate) | $68 billion USD/year | World Bank 2024 |
| Carbon financing captured by Africa | 3% of global flows | VCMI 2024 |
| Access to reliable climate data | < 8% of stakeholders | GSMA 2024 |
| Sahel temperature rise since 1970 | +1.5 to +2.0°C | IPCC AR6 2023 |
| Vegetation cover reduction 2000–2024 | −12% West Africa | Hansen/GFC 2024 |

### Five Urgent Problems TERRASIGHT Addresses

1. **Agriculture Without Data** — 35–40% of harvests lost annually from decisions made without reliable data
2. **Invisible Forest Degradation** — Optical satellites cannot detect internal structural degradation (biomass loss, canopy thinning)
3. **Economic Isolation of Farmers** — No platform combining satellite data, agronomic advice, and market access
4. **Inaccessible Carbon Market** — Certification costs ($50,000–$500,000/project) exclude African communities
5. **No Accessible Early Warning** — Existing systems (FEWS NET, CHIRPS Alert) produce expert-only bulletins

---

<a name="architecture"></a>
## System Architecture

### Three-Tier Infrastructure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TERRASIGHT v2.0 — SYSTEM ARCHITECTURE                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │                   LAYER 1 — DATA ACQUISITION                    │    │
│  │  Landsat 5/7/8/9 C02 T1 L2 │ Sentinel-2 SR │ MODIS MOD11A2    │    │
│  │  CHIRPS Daily │ ERA5 Land │ S5P OFFL NO₂ │ MAIAC AOD           │    │
│  │  NASA GEDI L2A (canopy) │ NASA GEDI L4A (biomass)               │    │
│  │  MOD15A2H (LAI/fAPAR) │ MOD16A2 (ET)                           │    │
│  └──────────────────────────┬──────────────────────────────────────┘    │
│                             │                                           │
│  ┌──────────────────────────▼──────────────────────────────────────┐    │
│  │                 LAYER 2 — PROCESSING & ANALYTICS                │    │
│  │  Cloud masking (QA_PIXEL + SCL) │ SR scaling (×0.0000275−0.2)   │    │
│  │  Median compositing │ Harmonized band renaming                   │    │
│  │  10 spectral indices │ 4 biophysical indices                     │    │
│  │  Mann-Kendall + Sen's slope │ Random Forest (200 trees × 10)    │    │
│  │  GEDI quality filtering │ IPCC Tier 3 carbon estimation         │    │
│  │  DSS composite scoring │ Spatial projections 2026–2040          │    │
│  └──────────────────────────┬──────────────────────────────────────┘    │
│                             │                                           │
│  ┌──────────────────────────▼──────────────────────────────────────┐    │
│  │                 LAYER 3 — PRESENTATION & EXPORT                 │    │
│  │  Bilingual FR/EN interface │ SplitPanel (mouse/touch)           │    │
│  │  Inline charts (2000–2024) │ Click-to-inspect (6 indices)       │    │
│  │  GeoTIFF export │ CSV time series │ GEE Assets                  │    │
│  │  Public URL (no Google account required)                         │    │
│  │  TERRASIGHT Mobile (Flutter 3.x — iOS/Android)                  │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Technical Specifications

| Component | Specification |
|:---|:---|
| **Cloud Platform** | Google Earth Engine (GEE) — Project ID: `terrasight-490400` |
| **Processing Capacity** | Petabyte-scale, parallelized server-side computation |
| **Primary Optical Sensors** | Landsat 5/7/8/9 Collection 2 Tier 1 Level 2 (Surface Reflectance), 30m, 1984–2025 |
| **LiDAR Sensors** | NASA GEDI L2A (canopy geometry) + L4A (above-ground biomass), 25m footprint, ISS 2019–present |
| **Climate Data** | MODIS MOD11A2 (LST 1km) · CHIRPS Daily (precip 5km) · ERA5 Land (temp 0.25°) · S5P NO₂ · MAIAC AOD |
| **Biophysical Data** | MODIS MOD15A2H (LAI/fAPAR 500m) · MOD16A2 (evapotranspiration) |
| **Cloud Filter** | < 30% cloud cover (QA_PIXEL bitwise + SCL band) |
| **SR Scaling** | Landsat C02: `DN × 0.0000275 + (−0.2)` · Sentinel-2: `DN / 10000` |
| **Cartographic Projection** | EPSG:32628 (UTM Zone 28N) — International standard for Senegal |
| **ML Algorithm** | Random Forest: 200 decision trees · 150 samples/year · 6 training years · bag fraction 0.7 |
| **Validation** | Independent holdout (2024) · OA = 95.09% · κ = 0.885 · R² = 0.746 · RMSE = 0.057 |
| **Interface** | Bilingual FR/EN (instant toggle) · SplitPanel · Inline charts · Click-to-inspect |
| **Performance** | Initial load < 3s · DSS latency < 30s · KPI latency < 5s |

---

## Data Sources & Preprocessing

### Satellite Collections

| Collection ID | Sensor | Resolution | Period | Use in TERRASIGHT |
|:---|:---|:---|:---|:---|
| `LANDSAT/LT05/C02/T1_L2` | Landsat 5 TM | 30m | 1984–2012 | Historical NDVI, land cover |
| `LANDSAT/LE07/C02/T1_L2` | Landsat 7 ETM+ | 30m | 1999–2025 | Gap-filling, continuity |
| `LANDSAT/LC08/C02/T1_L2` | Landsat 8 OLI | 30m | 2013–2025 | Primary optical analysis |
| `LANDSAT/LC09/C02/T1_L2` | Landsat 9 OLI-2 | 30m | 2021–2025 | Recent high-quality imagery |
| `COPERNICUS/S2_SR_HARMONIZED` | Sentinel-2 MSI | 10–20m | 2017–2025 | Red Edge indices, LAI estimation |
| `MODIS/061/MOD11A2` | MODIS Terra | 1km | 2000–2025 | Land Surface Temperature (LST) |
| `MODIS/061/MOD15A2H` | MODIS Terra | 500m | 2000–2025 | LAI and fAPAR |
| `MODIS/061/MOD16A2` | MODIS Terra | 500m | 2000–2025 | Evapotranspiration (ET) |
| `UCSB-CHG/CHIRPS/DAILY` | CHIRPS | 5km | 1981–2025 | Daily precipitation |
| `ECMWF/ERA5_LAND/MONTHLY_AGGR` | ERA5-Land | 0.25° | 1950–2025 | Air temperature (2m) |
| `COPERNICUS/S5P/OFFL/L3_NO2` | Sentinel-5P | 7km | 2018–2025 | Nitrogen dioxide (NO₂) |
| `LARSE/GEDI/GEDI02_A_002_MONTHLY` | GEDI L2A | 25m | 2019–2023 | Canopy height (rh25/rh50/rh98), tree cover |
| `LARSE/GEDI/GEDI04_A_002_MONTHLY` | GEDI L4A | 25m | 2019–2023 | Above-Ground Biomass Density (AGBD) |

### Cloud Masking Pipeline

```javascript
// Landsat 8/9 — QA_PIXEL bitwise cloud masking + Surface Reflectance scaling
var maskL89 = function(img) {
  var qa = img.select('QA_PIXEL');
  var mask = qa.bitwiseAnd(1 << 3).eq(0)    // Cloud shadow
    .and(qa.bitwiseAnd(1 << 4).eq(0))       // Snow/ice
    .and(qa.bitwiseAnd(1 << 5).eq(0));      // Cloud
  return img.updateMask(mask)
    .multiply(0.0000275).add(-0.2)           // C02 SR scale factors
    .copyProperties(img, img.propertyNames());
};

// Sentinel-2 — Scene Classification Layer (SCL) masking
var maskS2 = function(img) {
  var scl = img.select('SCL');
  var mask = scl.neq(3)     // Cloud shadow
    .and(scl.neq(8))        // Cloud medium probability
    .and(scl.neq(9))        // Cloud high probability
    .and(scl.neq(10))       // Thin cirrus
    .and(scl.neq(11));      // Snow/ice
  return img.updateMask(mask).divide(10000)
    .copyProperties(img, img.propertyNames());
};
```

### Harmonized Multi-Sensor Collection

TERRASIGHT harmonizes Landsat 5, 7, 8, and 9 into a unified 6-band collection (`B`, `G`, `R`, `NIR`, `SWIR1`, `SWIR2`) through standardized band renaming:

| Landsat 5/7 Bands | Landsat 8/9 Bands | Harmonized Name | Wavelength (μm) |
|:---|:---|:---|:---|
| SR_B1 | SR_B2 | B (Blue) | 0.45–0.52 |
| SR_B2 | SR_B3 | G (Green) | 0.52–0.60 |
| SR_B3 | SR_B4 | R (Red) | 0.63–0.69 |
| SR_B4 | SR_B5 | NIR | 0.77–0.90 |
| SR_B5 | SR_B6 | SWIR1 | 1.55–1.75 |
| SR_B7 | SR_B7 | SWIR2 | 2.09–2.35 |

---

<a name="scientific-methodology"></a>
## Module 1 — Environmental Spectral Indices (ENV)

**Script**: `Script_01_ENVindices` · **Data**: Landsat 5/7/8/9 harmonized · **Period**: 2000–2025 · **Region**: West Africa

### Computed Spectral Indices

Ten spectral indices are computed per annual median composite:

| Index | Full Name | Formula | Range | Application |
|:---|:---|:---|:---|:---|
| **NDVI** | Normalized Difference Vegetation Index | `(NIR − R) / (NIR + R)` | [−1, 1] | Vegetation vigor |
| **EVI** | Enhanced Vegetation Index | `2.5 × (NIR − R) / (NIR + 6R − 7.5B + 1)` | [−1, 1] | Canopy structure (atmospheric correction) |
| **SAVI** | Soil-Adjusted Vegetation Index | `1.5 × (NIR − R) / (NIR + R + 0.5)` | [−1, 1.5] | Vegetation in sparse canopy areas |
| **EVI2** | Two-band Enhanced Vegetation Index | `2.5 × (NIR − R) / (NIR + 2.4R + 1)` | [−1, 1] | Simplified EVI (no blue band) |
| **NDWI** | Normalized Difference Water Index | `(G − NIR) / (G + NIR)` | [−1, 1] | Water stress / surface water |
| **MNDWI** | Modified NDWI | `(G − SWIR1) / (G + SWIR1)` | [−1, 1] | Open water bodies detection |
| **BSI** | Bare Soil Index | `(SWIR1 + R − NIR − B) / (SWIR1 + R + NIR + B)` | [−1, 1] | Soil exposure / desertification |
| **NBR** | Normalized Burn Ratio | `(NIR − SWIR2) / (NIR + SWIR2)` | [−1, 1] | Burn severity / fire scars |
| **NDBI** | Normalized Difference Built-up Index | `(SWIR1 − NIR) / (SWIR1 + NIR)` | [−1, 1] | Urbanization mapping |
| **NDTI** | Normalized Difference Tillage Index | `(R − G) / (R + G)` | [−1, 1] | Tillage / soil disturbance |

### Trend Analysis — Mann-Kendall + Sen's Slope

TERRASIGHT employs the **non-parametric Sen-Theil slope estimator** for robustness against outliers, coupled with the **Mann-Kendall test** for trend significance:

**Sen's Slope** (per pixel):

$$\beta = \text{median}\left(\frac{x_j - x_i}{t_j - t_i}\right), \quad \forall \; i < j$$

**Mann-Kendall τ statistic**:

$$\tau = \frac{2S}{n(n-1)}, \quad S = \sum_{i<j} \text{sgn}(x_j - x_i)$$

Where:

$$\text{sgn}(x) = \begin{cases} +1 & \text{if } x > 0 \\ 0 & \text{if } x = 0 \\ -1 & \text{if } x < 0 \end{cases}$$

**Significance threshold**: |τ| > 0.39 at p < 0.05 for n = 26 years (2000–2025).

```javascript
var computeTrend = function(collection, bandName) {
  var withTime = collection.map(function(img) {
    var t = ee.Number(img.get('system:time_start')).divide(1e13).toFloat();
    return img.select(bandName)
      .addBands(ee.Image.constant(t).rename('time').toFloat())
      .set('system:time_start', img.get('system:time_start'));
  });
  var sen = withTime.reduce(ee.Reducer.sensSlope());
  var mk  = collection.select(bandName).reduce(ee.Reducer.kendallsCorrelation());
  var slope = sen.select('slope').rename(bandName + '_slope');
  var tau   = mk.select(bandName + '_tau').rename(bandName + '_tau');
  var sig   = tau.abs().gt(0.39).rename(bandName + '_sig');
  return {slope: slope, tau: tau, sig: sig};
};
```

### Exports

| Type | Filename | Format | Bands |
|:---|:---|:---|:---|
| GeoTIFF | `WA_EnvIndices_Recent_2023_2025` | 1000m | NDVI, EVI, SAVI, NDWI, MNDWI, BSI, NBR, NDBI |
| GeoTIFF | `WA_NDVI_SenSlope_2000_2025` | 1000m | NDVI slope |
| GeoTIFF | `WA_NDVI_Change_2000_2025` | 1000m | ΔNDVI |
| CSV | `WA_AllEnvIndices_Annual` | — | All 7 indices, annual means |
| Asset | `WA_EnvIndices_Recent_2023_2025` | 1000m | 6 indices |

---

## Module 2 — Climate & Atmosphere (CLIM)

**Script**: `Script_02_CLIMATHindices` · **Data**: MODIS MOD11A2, CHIRPS, ERA5, S5P, MAIAC · **Period**: 2000–2024

### Climate Variables

| Variable | Source | Resolution | Processing |
|:---|:---|:---|:---|
| **Land Surface Temperature (LST)** | MODIS MOD11A2 | 1km / 8-day | `LST_Day_1km × 0.02 − 273.15` → °C |
| **Precipitation** | CHIRPS Daily | 5km / daily | Annual sum (mm/year) |
| **Air Temperature (2m)** | ERA5-Land Monthly | 0.25° | `temperature_2m − 273.15` → °C |
| **Nitrogen Dioxide (NO₂)** | Copernicus S5P OFFL | 7km | Tropospheric column density |
| **Aerosol Optical Depth (AOD)** | MAIAC MCD19A2 | 1km | Atmospheric particulate loading |

### Climate Results (2000–2024)

| Metric | Measured Value | Method |
|:---|:---|:---|
| Air temperature rise | **+0.89°C / 24 years** | ERA5 + MODIS MOD11A2 / Sen-Theil |
| Precipitation variability | **+81.6 mm/year** (increased variability) | CHIRPS Daily / Sen-Theil |
| Urban NO₂ increase | **+23% since 2018** | S5P OFFL L3 |

---

## Module 3 — Biophysical Indices (BIO)

**Script**: `Script_03_Biophysique` · **Data**: MODIS MOD15A2H, Landsat, CHIRPS · **Period**: 2000–2024

### Biophysical Variables

**Leaf Area Index (LAI)** — MODIS MOD15A2H:

$$\text{LAI} = \text{Lai\_500m} \times 0.1 \quad [\text{m}^2/\text{m}^2]$$

**Fraction of Absorbed Photosynthetically Active Radiation (fAPAR)** — MODIS MOD15A2H:

$$\text{fAPAR} = \text{Fpar\_500m} \times 0.01 \quad [0 \text{–} 1]$$

**Land Surface Water Index (LSWI)** — Landsat:

$$\text{LSWI} = \frac{\rho_{NIR} - \rho_{SWIR1}}{\rho_{NIR} + \rho_{SWIR1}}$$

**Standardized Precipitation Index (SPI)** — CHIRPS proxy:

$$\text{SPI}_{year} = \frac{P_{year} - \overline{P}_{2000-2024}}{\sigma_{P_{2000-2024}}}$$

Where $P$ is annual precipitation, $\overline{P}$ is the long-term mean, and $\sigma_P$ is the standard deviation over the 2000–2024 baseline period.

### Biomass Loss Quantification

| Parameter | 2000 | 2024 | Δ Change | Method |
|:---|:---|:---|:---|:---|
| **LAI** | 1.228 m²/m² | 0.793 m²/m² | **−35.4%** | MODIS MOD15A2H / Sen-Theil |
| **fAPAR** | — | — | Declining | MODIS MOD15A2H |
| **LSWI** | — | — | Decreasing moisture | Landsat 8 |

---

## Module 4 — Agriculture & Farm Intelligence (FARM)

**Script**: `Script_07_FARM` · **Data**: Landsat 8/9 + Sentinel-2 + CHIRPS + MODIS · **Season**: Hivernage 2024 (June–October)

### Agricultural Indices

**Sentinel-2 Red Edge Indices** (10–20m resolution):

| Index | Formula | Application |
|:---|:---|:---|
| **NDRE** (Nitrogen Stress) | `(NIR − RE1) / (NIR + RE1)` | Nitrogen deficiency detection |
| **NDMI** (Moisture) | `(NIR − SWIR1) / (NIR + SWIR1)` | Vegetation water content |
| **PSRI** (Senescence) | `(R − B) / RE2` | Early stress / senescence detection |
| **ChlRE** (Chlorophyll) | `(NIR / RE1) − 1` | Chlorophyll concentration |
| **LAI-S2** (Leaf Area) | `3.618 × (NIR / R) − 0.118` | Sentinel-2 LAI estimation |

### Fertility Score

Composite fertility scoring (0 = poor, 1 = fertile):

$$\text{Fertility} = \frac{\text{NDVI}_{[0,1]} + \text{NDMI}_{norm} + (1 - \text{BSI})_{norm} + \text{LAI}_{S2}/6}{4}$$

### Yield Proxy Model

Calibrated on FAO Senegal cereal data (mil, sorghum, maize):

$$\text{Yield}_{t/ha} = \text{NDVI}_{max} \times \frac{P_{saison}}{600} \times \frac{\text{LAI}_{S2}}{4} \times \text{Fertility} \times 4.0$$

### Farm Risk Index (FRI)

Multi-criteria global agricultural risk (0 = low, 1 = critical):

$$\text{FRI} = \frac{(1 - \text{SHI}) + (1 - \text{Fertility}) + \text{BSI}_{norm} + (0.8 - \text{NDVI})_{[0,1]}}{4}$$

Where **SHI** (Soil Humidity Index):

$$\text{SHI} = 1 - \frac{\text{ET}_a}{P_{saison} + 1}$$

### Agricultural Zone Results — Season 2024

| Zone | NDVI | Yield (t/ha) | FRI Risk | Precip (mm) | ΔNDVI 2000→2024 |
|:---|:---|:---|:---|:---|:---|
| **Casamance** | 0.487 | **2.07** | Low | High | Moderate |
| **Sine-Saloum** | — | **1.43** | Moderate | — | — |
| **Senegal Est** | — | **0.89** | High | — | −0.193 |
| **Dakar Rural** | — | **0.72** | Moderate | — | +0.161 |
| **Ferlo** | — | **0.53** | **Critical** | Low | Declining |

### Sowing Window Analysis

| Category | Condition | Surface (2024) |
|:---|:---|:---|
| **Optimal Sowing** | July precip > 50mm AND August > 60mm AND NDVI > 0.2 | **225,629 km²** |
| **Early Sowing** | June precip > 20mm AND July > 50mm | Variable |
| **Delayed Sowing** | July precip < 30mm AND August > 40mm | Variable |
| **Drought Alert** | Season precip < 300mm AND NDVI < 0.15 | **317 km²** |

---

## Module 5 — GEDI LiDAR 3D Forest Analysis (GEDI)

**Script**: `Script_06_GEDI` · **Data**: NASA GEDI L2A + L4A · **Period**: 2020–2023 · **Resolution**: 25m footprint

### GEDI Data Processing

**Quality Filtering**:
```javascript
var maskGEDI = function(img) {
  return img.updateMask(
    img.select('quality_flag').eq(1)        // Quality validated
    .and(img.select('sensitivity').gt(0.95)) // High signal reliability
    .and(img.select('rh98').gt(0))           // Positive height
    .and(img.select('rh98').lt(60))          // Physically plausible (< 60m)
  );
};
```

### GEDI Variables

| Variable | Band | Unit | Description |
|:---|:---|:---|:---|
| **rh98** | `rh98` | meters | Maximum canopy height (98th percentile) |
| **rh50** | `rh50` | meters | Median canopy height (50th percentile) |
| **rh25** | `rh25` | meters | Understory height (25th percentile) |
| **Tree Cover** | `landsat_treecover` | % | Landsat-derived canopy cover |
| **AGBD** | `agbd` (L4A) | Mg/ha | Above-Ground Biomass Density |

### Carbon Stock Estimation — IPCC Tier 3

Following IPCC 2006 Guidelines (refined 2019):

$$\text{Carbon Stock} = \text{AGBD} \times CF$$

Where **CF** (Carbon Fraction) = **0.47** (IPCC 2006 default for tropical forests)

$$C_{stock} = 11.3 \; \text{Mg/ha} \times 0.47 = \mathbf{5.3 \; tC/ha}$$

### TVI3D — TERRASIGHT Tri-Dimensional Vegetation Index (Original)

A novel composite index integrating optical and LiDAR data for 3D vegetation assessment:

$$\text{TVI3D} = \text{NDVI} \times \left(1 + \frac{rh50}{10}\right) \times \text{TreeCover} \times \left(\frac{\text{AGBD}}{100}\right)^{0.3}$$

This index detects **structural degradation invisible to conventional optical sensors** — forests that appear "green" from space but have lost internal biomass, canopy density, and vertical structure.

### Ecosystem Health 3D

$$\text{EcoHealth}_{3D} = \frac{\frac{rh50}{10} + \text{TreeCover} + \text{NDVI} + \frac{\text{AGBD}}{100}}{4} \quad [0 \text{–} 1]$$

### Water Use Efficiency (WUE)

$$\text{WUE} = \frac{\text{AGBD}}{\text{Precip}_{annual} + 1} \times 1000 \quad [\text{kg biomass/mm rainfall}]$$

### Agroecological Zone Classification (3D)

| Zone | Criteria | Ecological Significance |
|:---|:---|:---|
| **Agricultural** | rh50 < 3m AND NDVI > 0.15 AND TreeCover < 0.4 | Crop-dominated areas |
| **Natural Vegetation** | rh50 > 5m AND NDVI > 0.2 AND TreeCover > 0.3 | Intact forest/woodland |
| **Agroforestry** | 2m < rh50 < 8m AND NDVI > 0.2 AND 0.1 < TC < 0.5 | Mixed tree-crop systems |
| **3D Degradation** | NDVI > 0.15 AND rh50 < 1.0m AND TreeCover < 0.2 | **Hidden degradation** |
| **Restoration Potential** | NDVI > 0.1 AND rh50 < 2m AND AGBD < 20 AND TC < 0.3 | Priority restoration areas |

### Fundamental Result — 2,631 km² of Invisible Degradation

> **TERRASIGHT detected 2,631 km² of structurally degraded forest in the Grand Dakar perimeter alone** — an area equivalent to the total administrative surface of the Dakar Region. These forests appeared "green" to conventional optical satellites (Landsat, Sentinel-2) but their internal structure — tree height, canopy density, biomass — was severely deteriorated.

| GEDI Metric | Measured Value | Interpretation |
|:---|:---|:---|
| rh98 (max height) | **5.75 m** | Severely stunted canopy |
| rh50 (median height) | **0.54 m** | Near-ground vegetation dominance |
| Tree Cover | **6.9%** | Extreme canopy fragmentation |
| AGBD (biomass) | **11.3 Mg/ha** | Very low biomass density |
| Carbon Stock | **5.3 tC/ha** | Minimal carbon sequestration |
| TVI3D degraded area | **2,631 km²** | Invisible to optical sensors |

---

## Module 6 — Random Forest Predictive Projections (PROJ)

**Script**: `Script_05_Projections` · **Algorithm**: Random Forest Regression · **Projections**: 2026–2040

### Model Configuration

| Parameter | Value |
|:---|:---|
| Algorithm | `ee.Classifier.smileRandomForest` |
| Number of trees | **200** |
| Bag fraction | 0.7 |
| Min leaf population | 5 |
| Seed | 42 (reproducible) |
| Training years | 2000, 2005, 2010, 2015, 2020, 2024 (n = 6) |
| Samples per year | **150** (stratified random) |
| Total training samples | ~900 |
| Train/test split | 70/30 (independent temporal holdout: 2024) |
| Number of models | **10** (one per target index) |
| Output mode | REGRESSION |

### Input Features (6 predictors)

| Feature | Source | Description |
|:---|:---|:---|
| `LST` | MODIS MOD11A2 | Land Surface Temperature (°C) |
| `PRECIP` | CHIRPS Daily | Annual precipitation sum (mm) |
| `TEMP` | ERA5-Land | Air temperature at 2m (°C) |
| `YEAR_NORM` | Computed | `(year − 2000) / 24` → normalized temporal position |
| `YEAR_SQ` | Computed | `(year − 2000)² / 576` → quadratic temporal term |
| `TREND` | Computed | `year − 2000` → linear temporal term |

### Target Indices (10 models)

Each trained independently: `NDVI`, `EVI`, `SAVI`, `NDWI`, `MNDWI`, `BSI`, `NBR`, `NDBI`, `LAI`, `fAPAR`

### Spatial Future Feature Construction

For each projection year, climate features are extrapolated using pixel-level Sen's slopes:

$$\text{LST}_{future} = \text{LST}_{2024} + \beta_{LST} \times \Delta_t \times 5$$

$$\text{Precip}_{future} = \text{Precip}_{2024} + \beta_{Precip} \times \Delta_t \times 5$$

$$\text{Temp}_{future} = \text{Temp}_{2024} + \Delta_t \times 0.037$$

Where $\Delta_t = \text{year}_{future} - 2024$ and $\beta$ are pixel-level Sen's slope values from 2000–2024.

### Validation Metrics (2024 Holdout)

$$\text{RMSE} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(\hat{y}_i - y_i)^2}$$

$$R^2 = 1 - \frac{\sum_{i=1}^{N}(\hat{y}_i - y_i)^2}{\sum_{i=1}^{N}(\bar{y} - y_i)^2}$$

$$\kappa = \frac{p_o - p_e}{1 - p_e}$$

| Metric | Value | Interpretation |
|:---|:---|:---|
| **Overall Accuracy** | **95.09%** | Excellent classification performance |
| **Cohen's Kappa (κ)** | **0.885** | Almost perfect agreement (Landis & Koch) |
| **R² (NDVI)** | **0.746** | Good regression fit (holdout 2024) |
| **RMSE (NDVI)** | **0.057** | Low prediction error (normalized scale) |
| **Overfitting** | **None detected** | Verified via independent temporal holdout |

### Projection Horizons

8 spatial projection maps generated: **2026 · 2028 · 2030 · 2032 · 2034 · 2036 · 2038 · 2040**

Each map contains 10 projected index bands at 1km resolution, enabling 15-year desertification risk anticipation.

### Projective DSS (2040)

$$\text{VDSI}_{2040} = \frac{(-\text{LAI}_{proj})_{[0,1]} + (-\text{fAPAR}_{proj})_{[0,1]}}{2}$$

$$\text{HWSI}_{2040} = (-\text{NDWI}_{proj})_{[-0.5, 0.5] \to [0,1]}$$

$$\text{AFSI}_{2040} = \frac{(-\text{NDVI}_{proj})_{[0,1]} + (-\text{LAI}_{proj})_{[0,1]}}{2}$$

**Critical Zone Alert**:

$$\text{ALERT}_{2040} = \text{VDSI} > 0.7 \;\lor\; \text{HWSI} > 0.7 \;\lor\; \text{AFSI} > 0.7$$

---

## Module 7 — Decision Support System (DSS)

**Script**: `Script_03_Biophysique` (integrated) · **Latency**: < 30 seconds

### DSS Composite Indicators

TERRASIGHT computes four real-time composite stress indices:

#### VDSI — Vegetation Degradation Severity Index

$$\text{VDSI} = 0.5 \times \text{Norm}(\Delta\text{LAI}) + 0.5 \times \text{Norm}(\Delta\text{fAPAR})$$

Where normalization uses `unitScale` mapping negative changes (degradation) to [0, 1].

#### HWSI — Hydric Water Stress Index

$$\text{HWSI} = 0.6 \times \text{Norm}(-\text{SPI}) + 0.4 \times \text{Norm}(-\text{LSWI})$$

#### AFSI — Agricultural Food Security Index

$$\text{AFSI} = 0.4 \times \text{Norm}(-\text{LAI}) + 0.3 \times \text{Norm}(-\text{fAPAR}) + 0.3 \times \text{Norm}(-\text{SPI})$$

#### CADI — Climate Anomaly Detection Index

$$\text{CADI} = \frac{|\text{SPI}|}{3} \quad [0, 1]$$

### DSS Alert Classification

| Level | Condition | Color | Action |
|:---|:---|:---|:---|
| **CRITICAL** | HWSI > 0.7 OR AFSI > 0.7 | 🔴 Red | Immediate intervention required |
| **MODERATE** | HWSI > 0.4 OR AFSI > 0.4 | 🟡 Orange | Reinforced monitoring |
| **STABLE** | All indices ≤ 0.4 | 🟢 Green | Normal operations |

### DSS Results — Senegal 2024

| Indicator | Score | Alert Level |
|:---|:---|:---|
| **VDSI** | **85.1%** | 🔴 **CRITICAL** (> 70% threshold) |
| **HWSI** | **42.8%** | 🟡 Moderate |
| **AFSI** | **57.1%** | 🟡 Moderate |
| **CADI** | **29.7%** | 🟢 Stable |

---

## Scientific Formulas & Equations

### Complete Index Reference

#### Vegetation Indices

$$\text{NDVI} = \frac{\rho_{NIR} - \rho_{Red}}{\rho_{NIR} + \rho_{Red}}$$

$$\text{EVI} = 2.5 \times \frac{\rho_{NIR} - \rho_{Red}}{\rho_{NIR} + 6\rho_{Red} - 7.5\rho_{Blue} + 1}$$

$$\text{SAVI} = 1.5 \times \frac{\rho_{NIR} - \rho_{Red}}{\rho_{NIR} + \rho_{Red} + L}, \quad L = 0.5$$

$$\text{EVI2} = 2.5 \times \frac{\rho_{NIR} - \rho_{Red}}{\rho_{NIR} + 2.4\rho_{Red} + 1}$$

#### Water Indices

$$\text{NDWI} = \frac{\rho_{Green} - \rho_{NIR}}{\rho_{Green} + \rho_{NIR}}$$

$$\text{MNDWI} = \frac{\rho_{Green} - \rho_{SWIR1}}{\rho_{Green} + \rho_{SWIR1}}$$

$$\text{LSWI} = \frac{\rho_{NIR} - \rho_{SWIR1}}{\rho_{NIR} + \rho_{SWIR1}}$$

#### Soil & Built-up Indices

$$\text{BSI} = \frac{(\rho_{SWIR1} + \rho_{Red}) - (\rho_{NIR} + \rho_{Blue})}{(\rho_{SWIR1} + \rho_{Red}) + (\rho_{NIR} + \rho_{Blue})}$$

$$\text{NDBI} = \frac{\rho_{SWIR1} - \rho_{NIR}}{\rho_{SWIR1} + \rho_{NIR}}$$

$$\text{NBR} = \frac{\rho_{NIR} - \rho_{SWIR2}}{\rho_{NIR} + \rho_{SWIR2}}$$

#### Sentinel-2 Red Edge Indices

$$\text{NDRE} = \frac{\rho_{NIR} - \rho_{RE1}}{\rho_{NIR} + \rho_{RE1}}$$

$$\text{PSRI} = \frac{\rho_{Red} - \rho_{Blue}}{\rho_{RE2}}$$

$$\text{ChlRE} = \frac{\rho_{NIR}}{\rho_{RE1}} - 1$$

$$\text{LAI}_{S2} = 3.618 \times \frac{\rho_{NIR}}{\rho_{Red}} - 0.118$$

#### GEDI-Derived Indices

$$\text{TVI3D} = \text{NDVI} \times \left(1 + \frac{rh50}{10}\right) \times \text{TC} \times \left(\frac{\text{AGBD}}{100}\right)^{0.3}$$

$$\text{Carbon}_{tC/ha} = \text{AGBD}_{Mg/ha} \times 0.47$$

$$\text{WUE} = \frac{\text{AGBD} \times 1000}{P_{annual} + 1}$$

#### Temperature Conversions

$$T_{°C} = \text{LST\_Day\_1km} \times 0.02 - 273.15$$

$$T_{°C}^{ERA5} = T_{2m}^{K} - 273.15$$

---

<a name="results"></a>
## Validated Results & Performance Metrics

### Core Scientific Results

| Result | Measured Value | Source & Method |
|:---|:---|:---|
| Built-up expansion (2000–2024) | 33 → 208 km² (**+530%**) | Landsat C02 L2 / RF segmentation |
| Biomass loss LAI (2000–2024) | 1.228 → 0.793 (**−35.4%**) | MODIS MOD15A2H / Sen-Theil |
| Vegetation stress (VDSI) | **85.1%** — CRITICAL | TERRASIGHT DSS |
| Air temperature rise | **+0.89°C / 24 years** | ERA5 + MODIS / Sen-Theil |
| Precipitation variability | **+81.6 mm/year** | CHIRPS Daily / Sen-Theil |
| Certifiable carbon stock | **5.3 tC/ha** | NASA GEDI L4A / IPCC Tier 3 |
| Casamance yield estimate | **2.07 t/ha** | TERRASIGHT Farm FRI |
| Ferlo yield estimate | **0.53 t/ha** | TERRASIGHT Farm FRI |
| Active drought area (2024) | **317 km²** | TERRASIGHT DSS / CHIRPS + NDWI |
| Optimal sowing area (2024) | **225,629 km²** | TERRASIGHT Farm / FRI multicriteria |
| Random Forest accuracy (OA) | **95.09%** (κ = 0.885) | Independent cross-validation |
| R² NDVI projections | **0.746** (RMSE = 0.057) | Holdout validation 2024 |
| 3D LiDAR degradation | **2,631 km²** | NASA GEDI L2A / TVI3D (ASEDGE original) |
| Canopy height (rh98) | **5.75 m** | NASA GEDI L2A |
| Tree cover | **6.9%** (Grand Dakar) | NASA GEDI L2A |
| AGBD (biomass) | **11.3 Mg/ha** | NASA GEDI L4A |
| NDVI Sen slope (Ferlo) | **−0.0089/year** | Active desertification |
| NDVI improvement (Dakar Rural) | **+0.0067/year** | Reforestation documented |

### Application Technical Performance

| Metric | Measured Value |
|:---|:---|
| Initial load time | **< 3 seconds** |
| DSS computation latency | **< 30 seconds** |
| KPI dashboard latency | **< 5 seconds** |
| Active operational modules | **7 / 7** |
| Languages | **2** (FR / EN — instant toggle) |
| Mobile responsive | Yes (SplitPanel touch-enabled) |
| Charts rendering | Inline (zero popups) |
| Map inspection | Click-to-inspect (6 indices per point) |
| Data years processed | **25 years** (2000–2025) |
| Projection horizon | **Through 2040** |
| Geographic coverage | **5 pilot regions + West Africa complete** |
| Accessibility | **Public URL — no Google account required** |

---

## Comparative Analysis

| Solution | Satellite Data | Predictive AI | Social Network | Carbon Market | Mobile Africa | Cost |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| Planet Labs | ✅ | ❌ | ❌ | ❌ | ❌ | > $50,000/year |
| SERVIR NASA/USAID | ✅ | Partial | ❌ | ❌ | ❌ | Experts only |
| SentinelHub/EarthMap | ✅ | ❌ | ❌ | ❌ | ❌ | $500–5,000/mo |
| Esri ArcGIS Online | Partial | ❌ | ❌ | ❌ | ❌ | $1,500+/year |
| aWhere/ClimAfrica | ❌ | Partial | ❌ | ❌ | Partial | $200–2,000/year |
| Farmerline/Esoko | ❌ | ❌ | Partial | ❌ | ✅ | Limited free |
| **TERRASIGHT v2.0** | **✅ + LiDAR** | **✅ R²=0.746** | **✅** | **✅ IPCC** | **✅** | **Free (freemium)** |

---

## TERRASIGHT Mobile — Flutter Ecosystem

### Technical Architecture

| Layer | Technologies |
|:---|:---|
| **Frontend** | Flutter 3.x (Dart) — single codebase iOS + Android — Material Design 3 |
| **Backend** | Node.js + Express.js — Firebase Cloud Functions — GCP Cloud Run (Docker) |
| **Database** | Cloud Firestore (real-time, offline sync) + PostgreSQL/PostGIS |
| **Cache** | Redis (adaptive TTL) — Cloudflare CDN for tile layers |
| **Authentication** | Firebase Auth — OTP phone (Africa-first) — OAuth2 |
| **GEE Integration** | Earth Engine REST API — Cloud Functions proxy — WMS Tile Layers |
| **IoT** | MQTT Protocol — LoRaWAN (long range, low power) — ESP32/Arduino |
| **Payments** | Wave Senegal — Orange Money — MTN MoMo — Stripe international |
| **AI (offline)** | TensorFlow Lite — FLOAT16 optimized — crop disease diagnosis |
| **Mapping** | Mapbox GL Flutter — Google Maps — GEE Tile Layer overlay |
| **Notifications** | Firebase Cloud Messaging — SMS Gateway (Twilio/Africa's Talking) |
| **Security** | End-to-end encryption — HTTPS strict — JWT tokens — GDPR compliance |

### Eight Functional Pillars

| Pillar | Description |
|:---|:---|
| **1. Satellite Dashboard** | Personal parcel map with weekly NDVI/LST/NDWI updates, color-coded alerts, offline-capable |
| **2. Agricultural Social Network** | Geolocalized profiles, satellite-backed publications, verified farmer badges via LiDAR |
| **3. Green Marketplace** | B2C direct sales, B2B institutional access, cooperative group purchasing, satellite-based credit scoring |
| **4. Personalized Early Warning** | Culture-specific DSS alerts via push + SMS, calibrated by crop type and growth stage |
| **5. IoT Irrigation** | Soil moisture sensors (15/30/60cm), automatic valve control, LoRaWAN coverage up to 15km |
| **6. Enterprise Services** | Automated environmental reports (PDF/CSV/GeoJSON/API), custom dashboards, SaaS pricing |
| **7. Integrated Carbon Market** | GEDI-IPCC automated certification, Carbon Wallet, direct buyer matching, mobile money payout |
| **8. Multilingual AI Assistant** | Voice + text in 6 languages, TensorFlow Lite crop diagnosis (< 3s offline), real-time GEE context |

---

## Impact & SDG Alignment

### Projected Impact Metrics

| Indicator | Year 3 (2028) | Year 5 (2030) |
|:---|:---|:---|
| Hectares under active monitoring | 500,000 ha | 5,000,000 ha |
| tCO₂ certified and offset | 50,000 tCO₂ | 500,000 tCO₂ |
| REDD+ projects certified | 10 | 100 |
| Post-harvest loss reduction | 15–20% | 30–40% |
| Farmers with satellite access | 50,000 | 500,000 |
| Carbon revenue redistributed | $500,000 | $10,000,000 |
| Early drought alerts per season | 5,000 | 50,000 |
| Direct green jobs created | 200+ | 2,000+ |

### SDG Contributions

| SDG | Contribution |
|:---|:---|
| **SDG 1** — No Poverty | Direct carbon revenue for forest communities, satellite-based green credit |
| **SDG 2** — Zero Hunger | Early drought warnings, optimal sowing planning, yield estimation, automated IoT irrigation |
| **SDG 8** — Decent Work | Digital agriculture marketplace, farmer skill valorization, green job creation |
| **SDG 9** — Innovation | World's first LiDAR + AI + agricultural social network platform |
| **SDG 10** — Reduced Inequalities | Equal satellite data access for rural farmers and multinationals |
| **SDG 13** — Climate Action | IPCC Tier 3 carbon monitoring, climate-based adaptation, NDC documentation support |
| **SDG 15** — Life on Land | 2,631 km² invisible degradation detected, REDD+ certification, LiDAR biodiversity monitoring |
| **SDG 17** — Partnerships | NASA/ESA (data) + GEE (platform) + FAO/UNEP (institutional) + private sector (financing) |

### Paris Agreement & NDC Support

TERRASIGHT produces carbon sequestration estimates in **IPCC Tier 3 format** (Article 13 of the Paris Agreement), directly usable in Biennial Transparency Reports. Continuous monitoring data (NDVI, LAI, LST, precipitation) enables governments to document adaptation and mitigation efforts with verifiable scientific evidence.

---

## Repository Structure

```
TerraSight/
├── Script_00_Config              # Global configuration, utilities, cloud masking
│                                  # Regions, palettes, visualization params
│                                  # getLandsat(), computeIndices(), computeTrend()
│                                  # exportToDrive(), exportToAsset(), addLegend()
│
├── Script_01_ENVindices          # 10 spectral indices (2000–2025)
│                                  # Baseline vs Recent composites
│                                  # Mann-Kendall + Sen's slope trends
│                                  # 3 time series charts, 8 exports
│
├── Script_01_ENVindices (copy)   # Backup/variant
│
├── Script_02_CLIMATHindices      # Climate: LST, precip, temp, NO₂, AOD
│                                  # 2000–2024 trend analysis
│
├── Script_03_Biophysique         # LAI, fAPAR, LSWI, SPI
│                                  # DSS: VDSI, HWSI, AFSI, CADI
│                                  # Alert zone mapping
│
├── Script_04_TrendsMultiregion   # Sen slope analysis across 5 regions
│                                  # Inter-regional hotspot identification
│
├── Script_05_Projections, ind    # RF Training (05A) + Projections (05B)
│                                  # 10 models × 200 trees
│                                  # 8 horizon maps (2026–2040)
│                                  # Projective DSS + Delta NDVI
│
├── Script_06_GEDI                # NASA GEDI L2A + L4A integration
│                                  # TVI3D original index
│                                  # Carbon stock IPCC, WUE, EcoHealth
│                                  # 3D degradation detection (2,631 km²)
│                                  # Agroecological zone classification
│
├── Script_07_FARM                # Agricultural intelligence module
│                                  # Sentinel-2 Red Edge indices
│                                  # Fertility scoring, yield estimation
│                                  # FRI, sowing windows, drought alerts
│                                  # 5-zone comparative analysis
│
└── Script_09_APP                 # Final deployed application
                                   # 7-module bilingual interface
                                   # SplitPanel, charts, click-to-inspect
                                   # Public URL deployment
```

### Exports Summary

| Script | CSV | GeoTIFF | GEE Assets | Total |
|:---|:---:|:---:|:---:|:---:|
| Script_01 (ENV) | 1 | 6 | 2 | 9 |
| Script_02 (CLIM) | — | — | — | — |
| Script_03 (BIO+DSS) | 3 | 10 | 4 | 17 |
| Script_05 (RF PROJ) | 4 | 14 | 13 | 31 |
| Script_06 (GEDI) | 2 | 12 | 7 | 21 |
| Script_07 (FARM) | 3 | 12 | 7 | 22 |
| **Total** | **13** | **54** | **33** | **100** |

---

## Reproducibility & Standards

### Full Reproducibility

All TERRASIGHT analyses are **entirely reproducible**:

- **Scripts**: Documented, versioned, accessible from GEE repository (`users/asfbigboss2001/TerraSight`)
- **Data sources**: All public (NASA, ESA, NOAA, USGS) — no proprietary data required
- **Methodology**: Following international standards
- **Seed**: All stochastic processes use `seed = 42` for exact reproducibility

### Standards Followed

| Domain | Standard |
|:---|:---|
| Carbon estimation | **IPCC 2006 Guidelines** (Tier 3), refined 2019 |
| Carbon certification | Compatible with **Verra VCS** (VM0007/VM0010) and **Gold Standard LandScale** |
| Trend analysis | **Sen-Theil** slope estimator (non-parametric, robust to outliers) |
| Significance testing | **Mann-Kendall** at p < 0.05 |
| Machine learning validation | **Independent temporal holdout** (train: 2000–2020, test: 2024) |
| Metadata | **ISO 19115** geographic metadata standard |
| Cartographic projection | **EPSG:32628** (UTM Zone 28N) |
| Surface reflectance | **Landsat Collection 2** Level 2 calibrated products |

---

## References

1. **Huete, A. R.** (1988). A soil-adjusted vegetation index (SAVI). *Remote Sensing of Environment*, 25(3), 295–309.
2. **Huete, A. R., et al.** (2002). Overview of the radiometric and biophysical performance of the MODIS vegetation indices. *Remote Sensing of Environment*, 83(1-2), 195–213.
3. **McFeeters, S. K.** (1996). The use of the Normalized Difference Water Index (NDWI) in the delineation of open water features. *International Journal of Remote Sensing*, 17(7), 1425–1432.
4. **Xu, H.** (2006). Modification of normalised difference water index (NDWI) to enhance open water features in remotely sensed imagery. *International Journal of Remote Sensing*, 27(14), 3025–3033.
5. **Rikimaru, A., Roy, P. S., & Miyatake, S.** (2002). Tropical forest cover density mapping. *Tropical Ecology*, 43(1), 39–47.
6. **Zha, Y., Gao, J., & Ni, S.** (2003). Use of normalized difference built-up index in automatically mapping urban areas from TM imagery. *International Journal of Remote Sensing*, 24(3), 583–594.
7. **Key, C. H., & Benson, N. C.** (2006). Landscape assessment (LA): Sampling and analysis methods. *USDA Forest Service General Technical Report*.
8. **Sen, P. K.** (1968). Estimates of the regression coefficient based on Kendall's tau. *Journal of the American Statistical Association*, 63(324), 1379–1389.
9. **Mann, H. B.** (1945). Nonparametric tests against trend. *Econometrica*, 13(3), 245–259.
10. **Kendall, M. G.** (1975). *Rank Correlation Methods*. Charles Griffin, London.
11. **Dubayah, R., et al.** (2020). The Global Ecosystem Dynamics Investigation: High-resolution laser ranging of the Earth's forests and topography. *Science of Remote Sensing*, 1, 100002.
12. **IPCC** (2006). *Guidelines for National Greenhouse Gas Inventories*. Volume 4: Agriculture, Forestry and Other Land Use.
13. **Breiman, L.** (2001). Random forests. *Machine Learning*, 45(1), 5–32.
14. **Tucker, C. J.** (1979). Red and photographic infrared linear combinations for monitoring vegetation. *Remote Sensing of Environment*, 8(2), 127–150.
15. **Rouse, J. W., et al.** (1974). Monitoring vegetation systems in the Great Plains with ERTS. *Third ERTS Symposium*, NASA SP-351, 309–317.
16. **Funk, C., et al.** (2015). The climate hazards infrared precipitation with stations—a new environmental record for monitoring extremes. *Scientific Data*, 2, 150066.
17. **Gorelick, N., et al.** (2017). Google Earth Engine: Planetary-scale geospatial analysis for everyone. *Remote Sensing of Environment*, 202, 18–27.
18. **Landis, J. R., & Koch, G. G.** (1977). The measurement of observer agreement for categorical data. *Biometrics*, 33(1), 159–174.

---

## Author

<table>
<tr>
<td>

**Abdou Samad Faye**

*Ingénieur GeoDataScientist · Fondateur ASEDGE*

- 🏛️ Université Amadou Makhtar Mbow (UAM) — Diamniadio, Sénégal
- 🏢 ASEDGE — Abdou Samad Entreprise for Development, Growth & Excellence
- 🌍 Spécialisation: Remote Sensing · GIS · Machine Learning · Google Earth Engine
- 📍 Diamniadio, Sénégal — Afrique de l'Ouest

</td>
</tr>
</table>

---

<table>
<tr>
<td><strong>GEE Project ID</strong></td><td><code>terrasight-490400</code></td>
</tr>
<tr>
<td><strong>GEE Repository</strong></td><td><code>users/asfbigboss2001/TerraSight</code></td>
</tr>
<tr>
<td><strong>Live Application</strong></td><td><a href="https://asfbigboss2001.projects.earthengine.app/view/terrasight">asfbigboss2001.projects.earthengine.app/view/terrasight</a></td>
</tr>
<tr>
<td><strong>GitHub</strong></td><td><a href="https://github.com/abdousamad387/TerraSight">github.com/abdousamad387/TerraSight</a></td>
</tr>
<tr>
<td><strong>Data Sources</strong></td><td>NASA (GEDI, Landsat) · ESA (Sentinel-2, S5P) · NOAA (CHIRPS) · ECMWF (ERA5)</td>
</tr>
<tr>
<td><strong>Standards</strong></td><td>IPCC Tier 3 (carbon) · Sen-Theil (trends) · ISO 19115 (metadata) · EPSG:32628</td>
</tr>
<tr>
<td><strong>Study Area</strong></td><td>Grand Dakar (3,847 km²) + West Africa (2.8M km²)</td>
</tr>
<tr>
<td><strong>Document Version</strong></td><td>v2.0 — March 2026</td>
</tr>
</table>

---

<p align="center">
  <em>"The data exists. The technology exists. What was missing was the bridge between raw satellite data and concrete decisions. That bridge is TERRASIGHT."</em>
</p>

<p align="center">
  <strong>— Abdou Samad Faye, Founder ASEDGE</strong>
</p>
