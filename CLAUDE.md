# InsulationRValues.com — Claude Code Project Guide

## Project Overview

Content-driven insulation authority site. ~160 pages targeting Google organic traffic. Monetized via Raptive display ads + affiliate links.

- **Domain:** insulationrvalues.com
- **Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, MDX for content
- **Hosting:** Vercel
- **Ads:** Raptive (ad script injected via layout)
- **Analytics:** Google Analytics 4 + Google Search Console

## Architecture

### Directory Structure

```
insulationrvalue/
├── CLAUDE.md
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── images/
│       ├── team/
│       └── og/
├── content/
│   ├── articles/                      # MDX article files
│   │   ├── r-value-chart.mdx
│   │   ├── what-is-r-value.mdx
│   │   └── ...
│   └── pages/                         # Static pages
│       ├── about.mdx
│       ├── contact.mdx
│       ├── privacy-policy.mdx
│       ├── terms-of-use.mdx
│       ├── editorial-policy.mdx
│       └── disclaimer.mdx
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (nav, footer, Raptive)
│   │   ├── page.tsx                   # Homepage
│   │   ├── [slug]/page.tsx            # Dynamic article pages
│   │   ├── r-value-calculator/page.tsx
│   │   ├── insulation-cost-calculator/page.tsx
│   │   ├── climate-zone-map/page.tsx
│   │   ├── insulation-thickness-calculator/page.tsx
│   │   ├── what-insulation-do-i-need/page.tsx
│   │   ├── insulation-savings-calculator/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-of-use/page.tsx
│   │   ├── editorial-policy/page.tsx
│   │   ├── disclaimer/page.tsx
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── TableOfContents.tsx
│   │   ├── content/
│   │   │   ├── ProTip.tsx
│   │   │   ├── QuickAnswer.tsx
│   │   │   ├── DataTable.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── KeyTakeaways.tsx
│   │   │   ├── ComparisonTable.tsx
│   │   │   └── ArticleLayout.tsx
│   │   ├── calculators/
│   │   │   ├── RValueCalculator.tsx
│   │   │   ├── CostCalculator.tsx
│   │   │   ├── ThicknessCalculator.tsx
│   │   │   ├── SavingsCalculator.tsx
│   │   │   ├── ClimateZoneLookup.tsx
│   │   │   └── InsulationQuiz.tsx
│   │   ├── seo/
│   │   │   ├── SchemaMarkup.tsx
│   │   │   └── MetaTags.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       └── Slider.tsx
│   ├── lib/
│   │   ├── mdx.ts
│   │   ├── insulation-data.ts
│   │   ├── climate-zones.ts
│   │   ├── calculations.ts
│   │   └── seo.ts
│   └── styles/
│       └── globals.css
└── data/
    ├── zip-to-zone.json
    ├── insulation-materials.json
    ├── iecc-requirements.json
    └── state-codes.json
```

## Content (MDX) System

All 32 written articles are markdown files in `content/articles/`. Convert to MDX with frontmatter:

```mdx
---
title: "R-Value Insulation Chart"
slug: "r-value-chart"
metaTitle: "R-Value Insulation Chart: Complete Guide to Every Material (2026)"
metaDescription: "Complete R-value chart for all insulation types..."
primaryKeyword: "insulation r value chart"
datePublished: "2026-02-19"
dateModified: "2026-02-19"
author: "InsulationRValues.com Editorial Team"
---

# R-Value Insulation Chart
...
```

The `[slug]/page.tsx` route reads MDX from `content/articles/`, parses frontmatter for SEO, and renders with custom components (ProTip, QuickAnswer, DataTable, FAQ, etc).

## Design System

### Colors
- **Primary:** Deep blue (#1e3a5f) — trust, authority
- **Secondary:** Warm orange (#e67e22) — energy, warmth
- **Accent:** Green (#27ae60) — savings, eco
- **Background:** White (#ffffff), light gray sections (#f8f9fa)
- **Text:** Near-black (#1a1a2e)
- **Table headers:** Primary blue with white text
- **Pro Tips:** Left-bordered orange boxes
- **Quick Answers:** Subtle blue background with border

### Typography
- Headings: Inter or system font stack, bold
- Body: 18px base, 1.7 line-height
- Tables: 14-15px, tighter spacing
- Max content width: 780px for articles
- Sidebar: 300px right sidebar for TOC + ads on desktop

### Layout
- Header: Sticky, mega-menu navigation
- Article pages: Content (780px) + right sidebar (TOC + ad slots)
- Calculator pages: Centered, wider (960px)
- Footer: Extensive — all section links, about, legal, trust signals
- Mobile: Full-width, TOC collapses, sidebar stacks below

## Interactive Calculators (6 Tools)

### 1. R-Value Calculator (`/r-value-calculator/`)
**Input:** ZIP code (or manual climate zone)
**Output:** Recommended R-values by location (attic, walls, floor, basement, crawl space) per IECC
**Data:** `zip-to-zone.json` + `iecc-requirements.json`
**Logic:** ZIP → zone → R-value requirements table → display with material options

### 2. Cost Calculator (`/insulation-cost-calculator/`)
**Inputs:** Area (sq ft), location (attic/walls/etc), material, DIY vs pro
**Output:** Cost range, material quantities, comparison of alternatives
**Data:** `insulation-materials.json`

### 3. Climate Zone Map (`/climate-zone-map/`)
**Input:** ZIP code or click on SVG map
**Output:** IECC climate zone + all requirements
**Map:** Static SVG of US zones with hover + ZIP lookup

### 4. Thickness Calculator (`/insulation-thickness-calculator/`)
**Inputs:** Target R-value, material type
**Output:** Required inches, comparison table all materials
**Logic:** R-value / R-per-inch = thickness

### 5. Insulation Quiz (`/what-insulation-do-i-need/`)
**Flow:** Multi-step wizard:
1. Where? (attic, walls, basement, crawl space, garage)
2. New construction or retrofit?
3. Climate zone (ZIP lookup)
4. Budget priority (cheapest, best performance, balanced)
5. DIY or hiring?
**Output:** Personalized recommendation + cost estimate + guide links

### 6. Savings Calculator (`/insulation-savings-calculator/`)
**Inputs:** Current R-value, target R-value, ZIP, home sq ft, annual energy bill
**Output:** Annual savings ($), payback period, 10/20yr ROI
**Logic:** Proportional savings from R-value improvement × climate zone HDD/CDD

## SEO Requirements

### Every page must have:
1. Unique `<title>` — under 60 chars, primary keyword first
2. Unique `<meta description>` — 150-160 chars
3. Canonical URL
4. Open Graph tags (title, description, image, url)
5. JSON-LD structured data:
   - Articles: `Article` schema (author, dates)
   - FAQs: `FAQPage` schema
   - Calculators: `WebApplication` schema
   - About: `Organization` schema (full details)
   - How-to articles: `HowTo` schema with steps
6. Breadcrumb JSON-LD (`BreadcrumbList`)
7. Internal links 8-12+ per article
8. External links 3-5 to authoritative sources

### Auto-generated sitemap.xml
All pages with `lastmod` dates. robots.txt points to it.

## Footer (Extensive)

Critical for UX and Google quality signals. Must include ALL section links:

```
──────────────────────────────────────────
INSULATION R-VALUES

Guides              Materials           Tools
├── Attic            ├── Spray Foam      ├── R-Value Calculator
├── Wall             ├── Fiberglass      ├── Cost Calculator
├── Basement         ├── Mineral Wool    ├── Climate Zone Map
├── Crawl Space      ├── Cellulose       ├── Thickness Calculator
├── Garage           ├── Blown-In        ├── Savings Calculator
├── Rim Joist        ├── Rigid Foam      └── Insulation Quiz
├── Cathedral Ceil.  ├── Radiant Barrier
└── Old Houses       └── Natural/Eco

Comparisons          Costs & Savings     Resources
├── Open vs Closed   ├── Spray Foam $    ├── R-Value Chart
├── FG vs Cellulose  ├── Attic $         ├── R-Value Per Inch
├── FG vs Min. Wool  ├── Blown-In $      ├── Types of Insulation
├── XPS vs EPS       ├── Cost/Sq Ft      ├── Code Requirements
├── Batts vs Blown   ├── Tax Credits     ├── Climate Zones
├── Faced vs Unfaced └── Home Value      └── What Is R-Value?
└── R-30/R-38/R-49

About Us · Contact · Privacy Policy · Terms of Use
Editorial Policy · Disclaimer

© 2026 InsulationRValues.com. All rights reserved.
Independent resource — not affiliated with any manufacturer,
retailer, or installation company.
──────────────────────────────────────────
```

## About Us Page (Critical for Google/Raptive Approval)

This page establishes E-E-A-T. Google quality raters specifically evaluate About pages.

### Required elements:
1. **Mission** — "The most comprehensive, unbiased insulation resource"
2. **Team bios** (minimum 2-3 named people):
   - Editor-in-Chief: building science background, BPI/RESNET credentials
   - Technical Reviewer: licensed contractor, field experience
   - Each with bio, role, headshot placeholder
3. **Editorial process** — how content is researched, reviewed, updated
4. **Sources** — DOE, ORNL, BSC, IECC, Energy Star, manufacturer specs
5. **Independence** — "Not paid by any manufacturer to recommend products"
6. **Ad disclosure** — "Supported by display advertising and affiliate links"
7. **Update policy** — "Reviewed annually, updated when codes change"
8. **Contact** — info@insulationrvalues.com
9. **Organization schema** JSON-LD
10. **Trust signals** — years of experience, number of articles, data-driven approach

### Tone:
Professional but real. Specific field examples ("We've pulled soggy fiberglass out of hundreds of crawl spaces"). NOT generic AI bio filler. These are real practitioners who decided to share their knowledge.

## Contact Page

- Heading: "Get in Touch"
- Email: info@insulationrvalues.com
- Note: "We are not a contractor referral service. For local insulation contractors, we recommend checking [ICAA Contractor Directory](https://icaa.net/), your local Home Depot Pro Referral, or asking your utility company for approved insulation contractors."
- Response time: "We aim to respond within 2 business days"
- Topics we can help with: editorial corrections, partnership inquiries, technical questions about our content
- Topics we cannot help with: specific project quotes, contractor recommendations, legal/building code interpretations for your specific situation

## Privacy Policy

Full GDPR + CCPA compliant policy covering:
- Data collection (analytics, cookies)
- Raptive/ad network cookies and tracking
- Affiliate link disclosure (Amazon, Home Depot, Lowe's)
- Google Analytics data
- Email collection (if/when newsletter is added)
- Cookie consent management
- User rights (access, deletion, opt-out)
- California consumer rights (CCPA)
- European user rights (GDPR)
- Children's privacy (COPPA — no data from under 13)
- Contact for privacy concerns: privacy@insulationrvalues.com
- Last updated date prominently displayed

## Terms of Use

- Content is educational, not professional advice
- "Always consult local building codes and qualified professionals"
- Liability limitation
- Copyright notice
- Accuracy disclaimer — "While we strive for accuracy, building codes and product specifications change. Always verify current requirements."
- Affiliate link disclosure
- Prohibited uses
- Governing law
- Contact for questions

## Editorial Policy & Disclosure

- How we research content (DOE data, manufacturer specs, field experience, building codes)
- Fact-checking process
- Update schedule (annually + when codes change)
- Affiliate relationships (Amazon, Home Depot, Lowe's — "may earn commissions")
- "Affiliate relationships NEVER influence our recommendations"
- Ad network disclosure (Raptive display ads)
- Correction policy — "If you find an error, email us at info@insulationrvalues.com"
- Author credentials and review process

## Disclaimer

- Not a substitute for professional advice
- Building codes vary by jurisdiction — always check local requirements
- Cost estimates are national averages — actual costs vary by region
- Product recommendations are based on building science data, not brand partnerships
- "We are not licensed contractors, engineers, or architects. Our content is for educational purposes."
- Safety warnings — always follow manufacturer instructions and building codes
- Not responsible for DIY project outcomes

## Ad Integration (Raptive)

Add placeholder for Raptive script in root layout `<head>`:
```tsx
{/* Raptive ad script — inserted after approval */}
{/* <script async src="//..." /> */}
```

Ad placements in articles will be auto-inserted by Raptive after site approval. For now, add spacing/comment markers where ads typically go (after intro, mid-article, before FAQ).

## Build Phases

### Phase 1: MVP (Launch-ready)
1. Next.js scaffold with routing
2. MDX content system — load all 32 articles
3. Article template with full styling (tables, ProTip, FAQ, QuickAnswer)
4. Homepage (hero + category navigation cards)
5. Header (mega-menu) + Footer (extensive, all links)
6. All footer pages (About, Contact, Privacy, Terms, Editorial, Disclaimer)
7. SEO (meta tags, JSON-LD schemas, sitemap, robots.txt, breadcrumbs)
8. Mobile responsive

### Phase 2: Calculators
9. R-Value Calculator
10. Cost Calculator
11. Climate Zone Map
12. Thickness Calculator
13. Insulation Quiz
14. Savings Calculator

### Phase 3: Polish + Scale
15. OG images
16. Core Web Vitals optimization
17. Google Search Console setup
18. Raptive application
19. Remaining content (Batches 9-17, ~130 more articles)
