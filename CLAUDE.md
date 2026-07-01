# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`cool-mint` is the **customer-facing storefront** for *Made in Workshop* — a Next.js 14 (App Router) + TypeScript site that handles both informational content (blog/news, about, machines) and e-commerce (cart, checkout, orders, class/tour bookings). It is one of two repos in the project; the backend it talks to is `pepper-mint` (the `fusion` API server).

## Commands

Package manager is **npm** (`package-lock.json`).

```bash
npm install        # install deps
npm run dev        # dev server (next dev)
npm run build      # production build (standalone output, for Docker/Cloud Run)
npm start          # serve production build
npm run lint       # ESLint (next/core-web-vitals)
```

There is **no test framework** configured. Formatting is Prettier (`.prettierrc`: no semicolons, `prettier-plugin-tailwindcss` auto-sorts classes).

## Architecture

- **App Router** under `app/`. Routes include `(auth)` (login/register/reset — grouped for its own two-column layout), `cart`, `checkout`, `orders`, `classes`, `machines`, `memberships`, `news`, `book-tour`, `contact`. Root `layout.tsx` wraps the app in `UserProvider` + `CartProvider`.
- **Backend calls go through Twirp, not REST.** The client is code-generated from `pepper-mint`'s protobufs (via twirpscript) and lives in `lib/fusion/` (commerce, workshop, masterClass, auth, billing…). `lib/transport.ts` sets the base URL and auth header. Base URL = `NEXT_PUBLIC_API_URL` (default `http://localhost:8080`), path prefix `/api/v1`.
- **Data-fetch pattern:** Client components use `useUser()` / `useCart()` (in `contexts/`). Mutations and authed reads run through **server actions** in `app/*/actions.ts` (`"use server"`), which read the auth cookie and call the Twirp endpoints. Errors are normalized via `parseError()` in `lib/util/error.ts` and surfaced as `sonner` toasts.
- **Auth:** Firebase Auth client-side (`lib/firebase`, `NEXT_PUBLIC_FIREBASE_*` env vars). On login, the Firebase ID token is written to an httpOnly secure cookie server-side so it's available to server actions and to `middleware.ts`.
- **`middleware.ts`** does a token check and protects `/cart/*`, `/checkout/*`, `/orders/*`, redirecting to `/login?redirect=...` when unauthenticated.
- **Content/blog** is filesystem-based: Markdown files in `posts/` with gray-matter front matter (`title`, `date`, `author`, `imageUrl`, `categories`, `filter`), loaded at build time by `app/library/posts.ts` and rendered via `@next/mdx`. The `filter` field drives the tabbed `/news` page. No CMS.
- **Styling:** Tailwind 3.4 + shadcn/ui (`components.json`, default style, RSC on). Components split into `components/base/` (large shared) and `components/ui/` (shadcn atoms). HSL CSS-variable color tokens; custom Helvetica font scale.
- **Currency is hardcoded ZAR** via `moneyFormatter` in `lib/util` — this is a South-Africa-only deployment.

## Conventions

- Path alias `@/*` → repo root (`tsconfig.json`).
- Server actions named `actions.ts`; components `PascalCase.tsx`; lib helpers camelCase.
- Remote images are restricted to `storage.googleapis.com/made-in-workshop/**` (`next.config.js`).

## Deploy

Conventional commits → **release-please** (`.github/workflows/release-please.yml`) cuts releases on `master`. Tags trigger `google-cloudrun-docker.yml`: Docker image to Artifact Registry (africa-south1), deploy to Cloud Run service `cool-mint` (europe-west1), project `made-in-workshop`. See `docs/infrastructure-setup.md`.
