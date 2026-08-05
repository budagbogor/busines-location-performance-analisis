# Masterplan — Enterprise Business & Reputation Intelligence Platform

## 1. Executive Summary & Architecture Overview

The **Enterprise Business & Reputation Intelligence Platform** is a React + TypeScript application engineered for multi-location brand analytics, competitive intelligence, and reputation monitoring across physical store networks in Indonesia (e.g., Mobeng, Auto2000, Shop&Drive, Astra Otoservice).

The system maps all operational branches, extracts live Google Reviews sentiment and star ratings, categorizes customer complaints, tracks footfall traffic patterns, aggregates social media chatter, and generates actionable C-suite strategic recommendations.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       React + Vite + Tailwind Client                        │
├─────────────────┬───────────────────┬───────────────────┬───────────────────┤
│  Branch Mapping │ Sentiment Engine  │  Traffic Analytics│   AI Executive    │
│  & Top / Bottom │ & Complaint Tags  │   & Peak Footfall │   Recommendations │
└────────┬────────┴─────────┬─────────┴─────────┬─────────┴─────────┬─────────┘
         │                 │                   │                   │
         ▼                 ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Data Layer (`mockDatasets.ts`)                     │
│    - 24 Verified Official Mobeng Branches (Addresses & Coordinates)         │
│    - Sentiment Distributions, Review Tags, Footfall Metrics, & Roadmaps     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Tech Stack & Core Libraries

- **Framework**: React 18+ with TypeScript & Vite
- **Styling**: Tailwind CSS v4, Lucide React icons
- **State Management & UI Motion**: Framer Motion / Motion for smooth layout transitions
- **Visualization**: Recharts & D3 for interactive rating distributions, traffic hourly footfall curves, and sentiment pie charts
- **Data Layer**: Structured TypeScript interfaces (`FullIntelligenceReport`, `BranchIntelligence`, `ComplaintCategory`, `TrafficPattern`, `SocialSentiment`, `StrategicRecommendation`)

---

## 3. Directory Structure

```
├── masterplan.md               # Architecture, System Flow, and IDE Migration Guide
├── PRD.md                      # Product Requirements & Feature Specifications
├── package.json                # Dependencies & Node scripts
├── vite.config.ts              # Vite configuration
├── src/
│   ├── main.tsx                # React entrypoint
│   ├── App.tsx                 # Main Application Layout & Tab Controller
│   ├── types.ts                # Data models for Intelligence Reports & Branches
│   ├── data/
│   │   └── mockDatasets.ts     # Verified Dataset Repository (Mobeng 24 Branches, etc.)
│   ├── components/
│   │   ├── BrandHeader.tsx     # Brand overview banner with KPIs & search switcher
│   │   ├── BranchListTable.tsx # Searchable, sortable, and filterable branch table
│   │   ├── BranchDetailModal.tsx # Deep-dive modal for individual branch reviews & sentiment
│   │   ├── ComplaintAnalysis.tsx # Complaint categorization & severity tagger
│   │   ├── TrafficSection.tsx    # Footfall trends & peak hours visualization
│   │   ├── SocialSentimentSection.tsx # Social media sentiment across IG, TikTok, X
│   │   ├── StrategicRecommendations.tsx # Actionable roadmap & red flag interventions
│   │   └── AIAnalysisModal.tsx  # Dynamic custom prompt analyzer
```

---

## 4. Grounded Dataset Specifications (Mobeng - 24 Verified Outlets)

The active dataset reflects all **24 verified Mobeng outlets** (PT Surga Mobil Indonesia) across Jabodetabek, Bandung, Karawang, Surabaya, and Sidoarjo:

1. **Mobeng BSD** — Blok E 8 No. 12, Lengkong Gudang Tim., Serpong, Tangerang Selatan
2. **Mobeng Karawaci** — Jl. Imam Bonjol No. 2, Karawaci, Tangerang
3. **Mobeng Cipondoh** — Jl. KH. Hasyim Ashari, Cipondoh, Tangerang
4. **Mobeng Pondok Betung** — Jl. Pd. Betung Raya, Pondok Aren, Tangerang Selatan
5. **Mobeng Gading Serpong** — Jl. Scientia Blvd No.12 Blok T, Medang, Pagedangan
6. **Mobeng Harapan Indah** — Sentra Bisnis, Jl. Harapan Indah Raya, Medan Satria, Bekasi
7. **Mobeng Jemursari** — Jl. Raya Jemur Sari No. 190, Tenggilis Mejoyo, Surabaya
8. **Mobeng Citraland** — Jl. Citra Raya Unesa Rd, Lidah Kulon, Lakarsantri, Surabaya
9. **Mobeng Cinere** — Jl. Cinere Raya No. 11A, Cinere, Depok
10. **Mobeng Kupang** — Jl. Raya Kupang Baru No. 16, Sukomanunggal, Surabaya
11. **Mobeng Galuhmas** — Jl. Arteri Galuh Mas Blok XIB-2 No. 5, Telukjambe Timur, Karawang
12. **Mobeng Jababeka** — Jl. Dr. Cipto Mangunkusumo, Cikarang Utara, Bekasi
13. **Mobeng Kopo** — Jl. Terusan Kopo No. 262, Margahayu, Bandung
14. **Mobeng Sunter** — Jl. Sunter Indah XV Blok KA 1 No. 25, Sunter Jaya, Jakarta Utara
15. **Mobeng Tole Iskandar** — Jl. Tole Iskandar, Sukamaju, Cilodong, Depok
16. **Mobeng Lenteng Agung** — Jl. Raya Lenteng Agung No. 2, Jagakarsa, Jakarta Selatan
17. **Mobeng Mustika Jaya** — Jl. Mustika Jaya No. 13-54, Mustika Jaya, Bekasi
18. **Mobeng Jati Asih** — Jl. Wibawa Mukti II No. 2, Jatiasih, Bekasi
19. **Mobeng MERR** — Jl. Dr. Ir. H. Soekarno, Semolowaru, Sukolilo, Surabaya
20. **Mobeng Hankam** — Jl. Raya Hankam No. 400, Jatimurni, Pondok Melati, Bekasi
21. **Mobeng Cileungsi** — Cileungsi Kidul, Cileungsi, Kab. Bogor
22. **Mobeng Duren Sawit** — Jl. Raya Kol. Sugiono No. 33, Duren Sawit, Jakarta Timur
23. **Mobeng Brigjen Katamso** — Jl. Brigjend Katamso No. 169, Wedoro, Waru, Sidoarjo
24. **Mobeng Mulyosari** — Jl. Raya Tempurejo No. 63, Mulyorejo, Surabaya

---

## 5. Google Antigravity IDE Handoff Guidelines

When importing this project into **Google Antigravity IDE**:

1. **Environment Setup**: Run `npm install` to populate all packages (React, Lucide, Recharts, Framer Motion).
2. **Dev Server Command**: Launch via `npm run dev` (configured for port 3000, host `0.0.0.0`).
3. **API Integration Readiness**: The data structure in `src/data/mockDatasets.ts` matches Google Maps Places API / Vertex AI Search schema. To connect live backend scraping/grounding APIs:
   - Create server-side endpoint `/api/analyze-brand`
   - Bind `process.env.GEMINI_API_KEY` or Vertex AI Search Grounding API
   - Replace or augment `PRESET_DATASETS` with real-time response objects.
