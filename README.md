# PDA Website Project Documentation

This repository contains the official PDA website built with React + Vite + Tailwind CSS.
It includes the main public website, the PDA Africa area, projects/publications/news pages, multilingual support (English/French), and embedded resources (Power BI, Ushahidi, external links).

## 1) Tech Stack

- React 18
- Vite 5
- React Router DOM 6
- Tailwind CSS
- Framer Motion
- React Slick / Swiper
- React Icons

## 2) Project Structure

Top-level:

- `src/main.jsx`: app entry point and route registration.
- `src/App.jsx`: shared layout shell (header, footer, outlet, global popups).
- `src/pages/`: route-level pages.
- `src/sections/`: home/PDA-Africa reusable landing sections.
- `src/components/`: shared UI and data components.
- `src/data/`: content data (news, partners, etc.).
- `src/translations/`: i18n dictionaries (`en.js`, `fr.js`).
- `src/assets/images/` and `src/assets/icons/`: static assets.

Important content/data files:

- `src/components/ProjectsData.jsx`: primary projects data source.
- `src/components/ArchivedProjectsData.jsx`: archived project records.
- `src/data/newsAndActivitiesData.js`: news/activity cards.
- `src/pages/Publications.jsx` + `src/components/FilterableTable.jsx`: publications and newsletters.
- `src/pages/Staff.jsx`: staff listing and modal bios.

## 3) Routing Overview

Routing is defined in `src/main.jsx` using `createBrowserRouter`.

Main routes include:

- `/` home
- `/who-we-are`
- `/what-we-do`
- `/our-projects`
- `/our-impact`
- `/publications`
- `/news-and-activities`
- `/events`
- `/staff`, `/teams`, `/board`
- `/child-abuse-tracker`
- `/covid-19`
- `/projects/:slug` and `/archives/:slug` detail pages
- `/pdaafrica/*` segment for PDA Africa pages

## 4) Core Functional Modules

### 4.1 Home and Shared Layout

- `App.jsx` controls:
  - menu switch (`Nav` vs `PDAAFRICAMenu`)
  - footer and cookie consent
  - global mailing list popup after 60 seconds (`MailingListPopup`)
  - hash scrolling behavior

### 4.2 Projects System

- Source of truth: `src/components/ProjectsData.jsx`
- Home current projects: `src/sections/CurrentProjects.jsx`
- Full listing page: `src/pages/ProjectsPage.jsx`
- Detail page: `src/pages/ProjectDetail.jsx`
- Archived list/detail: `src/components/ArchivedProjectsData.jsx` + `src/pages/ArchivesPage.jsx`

### 4.3 Publications & Newsletters

- Publications list with filtering + "Load More": `FilterableTable.jsx`
- Page wrapper and newsletters gallery: `Publications.jsx`
- Newsletter sign-up form: `NewsletterForm.jsx`

### 4.4 Staff Experience

- Staff grouped by department: `Staff.jsx`
- "Read More" opens modal with full bio and image
- Modal preserves user scroll position on close

### 4.5 News & Activities

- Data array in `newsAndActivitiesData.js`
- Rendered by `NewsAndActivities.jsx` and detail in `NewsDetail.jsx`
- Ordered by date (most recent first)

### 4.6 External Embeds

- Covid page includes Power BI iframe.
- Child Abuse Tracker includes Ushahidi iframe.

## 5) Internationalization (i18n)

- Language context: `src/contexts/LanguageContext.jsx`
- Hook: `src/hooks/useTranslation.js`
- Dictionaries:
  - `src/translations/en.js`
  - `src/translations/fr.js`

When adding UI text:

1. Add keys in both translation files.
2. Use `const { t } = useTranslation()` in components.
3. Render text with `t("path.to.key")`.

## 6) Setup and Local Development

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 7) Content Update Guide

### Add or edit project cards

Edit: `src/components/ProjectsData.jsx`

Required fields per project object:

- `id`
- `slug`
- `title`
- `image`
- `description`
- `fullDescription`
- `partners`
- `period`
- `category`
- `location`
- `status` (`Active`, `Ongoing`, `Completed`, etc.)
- `color` (`orange` or `red` used for UI theme accents)

### Add project images

1. Add image file to `src/assets/images/`.
2. Import and export in `src/assets/images/index.js`.
3. Use exported identifier in `ProjectsData.jsx`.

### Add news/activity items

Edit: `src/data/newsAndActivitiesData.js`.

### Update publications/newsletters

- Publications table behavior: `src/components/FilterableTable.jsx`
- Newsletter cards and order: `src/pages/Publications.jsx`

### Update staff details

Edit `src/pages/Staff.jsx` staff data arrays:

- `name`, `position`, `image`, `bio`, optional `profileLink`

## 8) UX/Behavior Notes

- Mailing list popup appears after 60s of browsing and is dismissed for the current session (`sessionStorage` key: `mailing-list-popup-dismissed`).
- Staff modals lock body scroll and restore exact previous scroll position on close.
- Projects page prioritizes selected featured/new projects at the top via slug ordering.

## 9) Deployment Notes

- Production build output: `dist/`
- Config files present:
  - `vercel.json`
  - `public/netlify.toml`

You can deploy to Vercel, Netlify, or any static host serving the `dist` folder.

## 10) Git and Large File Policy

GitHub rejects files larger than 100MB.

- Do not commit installers/executables or raw downloads into source folders.
- `src/assets/images/Downloads/` is ignored in `.gitignore`.
- Keep only optimized web assets in `src/assets/images/`.

## 11) Known Build Warnings

Current builds may show:

- unresolved `hero.svg` reference from `src/index.css` at build time
- chunk size warning (>1000 kB)

These are warnings (not build blockers), but should be addressed as part of performance optimization.

## 12) Recommended Next Improvements

- Add proper backend/API endpoint for newsletter subscriptions (replace `mailto` flows).
- Add image optimization pipeline (compression + responsive formats).
- Add route-based code splitting for large bundle reduction.
- Add automated tests for critical user flows (routing, modals, project rendering).

---

For major content changes, update this README in the same PR so documentation stays aligned with the codebase.
