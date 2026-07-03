# ARAM Prospects — Careers Guidance Website

Prototype implementation of the ARAM Initiative careers guidance website for
students in Sri Lanka, built from the internal **Full Site Design
Specification v1.0 (June 2026)**.

## What this is

A bilingual (English / Tamil), mobile-first, low-data careers guidance site:

- **Explore Careers** — browse and filter job profiles by sector, route type,
  district, workplace language, and study level
- **Job Profiles** — role details with skills, demand notes, and a
  pathway map showing every realistic route (university / TVET / apprenticeship /
  professional / work-first) with CURRENT–REFORM badges and barrier notes
- **Pathways Hub** — route families compared side by side
- **Career Quiz** — 10 questions, advisory-only results with matched role clusters
- **Training Provider Finder**, **Get Help**, **After O/L**, **After A/L** —
  expanded in iteration 2

## Design principles (from the spec — non-negotiable)

1. **Mobile-first, low data** — no autoplay media, text loads first, 48px tap targets
2. **Language parity** — full Tamil/English switch persisted across sessions
3. **Explicit language visibility** — every role states the languages required at work
4. **Assistive clarity** — dark mode, high contrast, invert colours, text-size controls (WCAG 2.2 baseline)
5. **Decision support** — every page ends with a next step

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Plain CSS design system (`src/app/globals.css`) with the spec's tokens:
  teal `#1A6E6E`, gold `#C9A84C`, light fill `#F2F4F4`, Arial, 16px base
- No client-side state library; saved lists use `sessionStorage` (no accounts)

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Important caveats

- **All content is sample data** written for design review: job details,
  provider names, contact numbers, and statistics must be verified against the
  current UGC handbook, TVEC manual, and provider registers before any launch.
- **Tamil translations are unreviewed drafts** — see [TRANSLATIONS.md](TRANSLATIONS.md).
- The mentor intake form and contact forms do not submit anywhere yet
  (no backend); safeguarding routing described in spec 15.5 needs a real
  backend before go-live.
