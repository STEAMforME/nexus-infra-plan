# STEAM for ME NJ Inc — Nexus Infra Plan

Website: https://www.STEAMforME.org

## Overview

Nexus Infra Plan is a React + Vite application for showcasing STEAM for ME’s smart infrastructure platform: safety simulation, zoning intelligence, and compliance workflows. The home page includes wired CTAs and a Book Demo flow.

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (auth and session)

## Features

- Auth pages backed by Supabase
- Home page CTAs wired (Book Demo, Learn More)
- New route: `/book-demo` (email CTA + scheduling placeholder)
- Smooth in‑page scrolling to sections (`#solutions`, `#platform`)
- Route-based code splitting (lazy-loaded pages)
- Centralized design tokens in `src/index.css`

## Getting Started

Prereqs: Node.js ≥ 18 and npm

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
cp .env.example .env  # set your Supabase URL and anon key
npm ci
npm run dev
```

Dev server: http://localhost:8080 (Vite will pick next port if busy).

## Environment

Set these variables in `.env` (values are safe to expose in the client):

```
VITE_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_ANON_KEY"
```

Notes:
- We removed hardcoded keys; rotate your anon key if it was previously committed.
- Types for env vars live in `src/vite-env.d.ts`.

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build locally
- `npm run lint` — run ESLint

## Deploy

This is a static Vite build. Any static host works (Vercel, Netlify, Cloudflare Pages, S3+CloudFront, etc.).

```sh
npm run build
npx serve dist  # or your host’s adapter
```

If deploying behind a CDN, ensure SPA fallback is enabled so React Router routes resolve to `/index.html`.

## Project Notes

- Branding: Meta tags in `index.html` reference `www.STEAMforME.org` images/handles.
- Anchors: Navbar links to `#solutions` and `#platform` on the home page.
- Routing: Add protected routes by wrapping components with an auth guard from `src/hooks/useAuth.tsx`.
