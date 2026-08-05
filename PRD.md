# Product Requirements Document (PRD) — Enterprise Business & Reputation Intelligence Platform

## 1. Product Overview
- **Product Name**: Enterprise Business & Reputation Intelligence Dashboard
- **Target Users**: C-Suite Executives, Regional Operations Managers, Brand Reputation Analysts, Regional Franchise Managers.
- **Objective**: Provide a real-time, grounded intelligence dashboard that aggregates store reviews, customer complaint patterns, footfall trends, and social media sentiment across multi-location automotive service networks.

---

## 2. Core Functional Requirements

### 2.1 Brand & Network Selector
- **Dataset Switcher**: Quick toggle between analyzed brands (e.g., Mobeng 24 Branches, Shop&Drive, Auto2000, Custom Search).
- **Executive Key Metrics**:
  - Total Verified Branches
  - Network Average Google Rating (e.g. 4.81/5.0)
  - Total Analyzed Reviews Count (e.g. 48,600+)
  - Red Flag Branch Count & Instant Filter

### 2.2 Branch Performance Table & Mapping
- **Search & Filter**: Filter by branch name, city, minimum rating threshold, or status ("Top Performer", "Attention Required").
- **Sorting**: Sort by Rating (High to Low / Low to High), Review Count, and Complaint Volume.
- **Comparative Badging**:
  - `Top Performer`: Rating ≥ 4.7 with high review volume.
  - `Attention Required`: Identified operational bottleneck or elevated complaint volume.
- **Branch Detail Modal**:
  - Complete address & verified coordinates
  - Top positive customer highlights
  - Primary customer negative complaints
  - Tagged recent customer reviews with sentiment scores (Positive, Neutral, Negative)

### 2.3 Complaint Deep-Dive & Category Analytics
- **Category Grouping**: Group complaints into Service Quality, Pricing & Transparency, Wait Times, Staff Behavior, Facilities & Amenities.
- **Severity Tagging**: High, Medium, Low impact categories with percentage distribution charts.
- **Trend Indicators**: Track whether complaint volume is `improving`, `stable`, or `declining`.

### 2.4 Traffic & Footfall Patterns
- **Hourly Busy Curves**: Interactive line/bar chart displaying store busy levels from 08:00 to 20:00.
- **Peak Days Matrix**: Highlight busiest days (e.g., Saturday & Sunday mornings).
- **Operational Summary**: AI-synthesized advice for queue management and Express Service pit allocation.

### 2.5 Social Media Sentiment & Public Perception
- **Platform Breakdown**: Instagram, TikTok, YouTube, X/Twitter, Google News sentiment distribution.
- **Viral Highlights**: Monitor viral customer feedback, successful marketing campaigns, and public brand perception score.

### 2.6 Strategic Recommendations & Actionable Interventions
- **Prioritized Interventions**: Categorized into Critical, High, and Medium priority actions.
- **Target Branch Binding**: Directly link recommendations to specific branches or network-wide policies.
- **Expected Impact**: Quantifiable ROI and operational metrics (e.g., "Reduce weekend queue wait times by 30 mins").

---

## 3. Grounded Data Quality & Accuracy Standards

1. **Accuracy**: Store addresses and branch names MUST match official store directories (e.g., `mobeng.id/lokasi-toko`).
2. **No Hallucinated Outlets**: Closed or non-existent branches (e.g. Serpong Utara, Margond, Ciputat, Raden Inten, Pamulang, Pondok Gede, Kebayoran Lama) MUST be purged from dataset calculations.
3. **Data Completeness**: Every branch object must contain verified address, city, rating, total review count, positive/negative feedback tags, and recent sample reviews.

---

## 4. Non-Functional Requirements & Design Principles

- **Performance**: Instant client-side search and filtering across hundreds of branches.
- **Responsive Layout**: Desktop-first executive layout, responsive on tablet and mobile viewports.
- **Visual Aesthetic**: High-contrast, executive-ready light theme with refined typography, mathematical padding, and zero AI-slop visual clichés.
- **Accessibility**: High contrast ratios compliant with WCAG AA standards.
