# STEAM for ME NJ Inc — Nexus Infra Plan

Website: https://www.STEAMforME.org

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (auth, data)

## Getting Started

Prereqs: Node.js and npm

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
cp .env.example .env  # set your Supabase URL and anon key
npm ci
npm run dev
```

Dev server runs at http://localhost:8080 (or next available port).

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build locally

## Environment

Set the following in `.env`:

```
VITE_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_ANON_KEY"
```

## Notes

- This repo uses client-side routing via React Router.
- Supabase credentials are read from Vite env vars; no secrets are committed.
