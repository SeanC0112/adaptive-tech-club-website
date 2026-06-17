# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/portfolio site for the Adaptive Tech Club — high schoolers who modify toys and build custom devices (cars, switches) for kids with disabilities. It's a static React SPA: no backend, no database. All project content lives in source; forms post to external Google Forms.

## Commands

```bash
bun install          # bun is the package manager (bun.lock is committed; package-lock.json also exists)
bun run dev          # Vite dev server on http://localhost:8080
bun run build        # production build (build:dev for development-mode build)
bun run lint         # eslint
bun run test         # vitest run (one-shot)
bun run test:watch   # vitest watch
bunx vitest run src/test/example.test.ts   # run a single test file
```

Playwright is configured (`playwright.config.ts`, `playwright-fixture.ts`) but only as thin re-exports of `lovable-agent-playwright-config`; there are no committed e2e specs. Unit tests are vitest + Testing Library (jsdom), discovered as `src/**/*.{test,spec}.{ts,tsx}`.

## Architecture

- **Routing** is in `src/App.tsx` via react-router (`BrowserRouter`). `AppContent` scrolls to top on every navigation. `vercel.json` rewrites all paths to `index.html` so deep links work on Vercel.
- **Pages** (`src/pages/`) map 1:1 to routes: Index, About, WhyItMatters, Projects, ProjectDetail, Contact, ToyRequest, NotFound. Each page wraps its content in `<Layout>` (`Navbar` + `main` + `Footer`) itself — Layout is not applied centrally in the router.
- **Project content is data, not pages.** `src/data/projects.ts` exports a typed `Project[]` (the `Project` interface defines `features`, `materials`, `steps`, `image` cover, `photos` grid, `category`, `hasDocumentation`, `inProgress`). The Projects page lists them; `ProjectDetail` renders one by looking up `projects.find(p => p.id === id)`. To add/edit a project, edit this array and drop images under `public/project-images/<slug>/`.
  - **Gotcha:** `project.id` is the human-readable title with spaces (e.g. `"Mini Powered Chair"`), and it's used directly as the `/projects/:id` route param. IDs must stay unique and URL-safe-enough; React Router handles the encoding, but keep this in mind when linking.
- **UI components** (`src/components/ui/`) are shadcn/ui (Radix + class-variance-authority). Config in `components.json`; add new ones with the shadcn CLI. Import via the `@/` alias (→ `src/`).

## Styling & theming

- Tailwind with CSS-variable-based design tokens defined in `src/index.css`; colors are referenced as `hsl(var(--…))` in `tailwind.config.ts`. Fonts: `font-display` = Nunito, `font-body` = Inter.
- **Dark mode is automatic**, driven by the OS `prefers-color-scheme` (the effect in `App.tsx` toggles the `dark` class on `<html>`). There is no manual theme toggle; test both modes via your system setting.

## Forms

Both forms submit to **Google Forms**, not an API in this repo:
- `Contact.tsx` POSTs `FormData` (with `entry.<id>` field names) to a Google Forms `formResponse` URL using `mode: "no-cors"` — the response is opaque, so success is assumed and a toast is shown regardless.
- `ToyRequest.tsx` embeds a Google Form via iframe.

If form fields change, the `entry.<id>` keys must match the live Google Form.

## Notes

- This project was scaffolded with Lovable (`lovable-tagger` Vite plugin runs only in dev mode). Deployed on Vercel; `@vercel/analytics` is wired in.
- TypeScript is configured loosely (`strictNullChecks: false`, `noImplicitAny: false`, unused-vars off in both tsconfig and eslint) — don't expect the compiler to catch null/undefined issues.
