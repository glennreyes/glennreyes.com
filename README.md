# glennreyes.com

This is the source code for my personal website, built using [Next.js](https://nextjs.org) App Router and [Tailwind CSS](https://tailwindcss.com).

![Banner](https://user-images.githubusercontent.com/5080854/230419923-8374acdf-5746-487d-a404-7139f3d766e8.png)

The site is hosted on [Vercel](https://vercel.com) and uses [Vercel Analytics](https://vercel.com/analytics) for tracking performance. Data is stored using [Turso](https://turso.tech), a distributed SQLite database.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Turso](https://turso.tech)
- [Vercel](https://vercel.com)
- [Vercel Analytics](https://vercel.com/analytics)

## Run the Development Server

This project uses Node 24, Bun, and TypeScript. Use `bun run build` and `bun run test` to run the package scripts; `bun build` and `bun test` invoke Bun’s own bundler and test runner.

### Installation

1. Clone the repository

```bash
git clone https://github.com/glennreyes/glennreyes.com
cd glennreyes.com
```

2. Install dependencies

```bash
bun install
```

### Development Server

1. Run the development server

```bash
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Personal site

The top-level chapters are Freediving, Sport, Tech, and About. Sport contains Running and HYROX; Tech links to AI, projects, appearances, talks, workshops, and writing. Existing content URLs continue to work. Geist stays at one text size, with monochrome themes, borderless navigation/actions, and restrained corners. The earlier `/work` URLs redirect to `/tech`.

High-resolution freediving photos and silent 1080p films from Glenn’s Downloads folder live under `public/media/freediving/`. The HYROX image is the public cover of [Glenn's October 2026 gym reel](https://www.instagram.com/glnnreyes/reel/DeG4OCCtiGY/). Captions and portfolio entries live in `lib/site-content.ts`.

### Activity sync

The optional running journal accepts [Health Auto Export v2](https://help.healthyapps.dev/en/health-auto-export/export-format/workouts/) REST API exports from Apple Health. Enable Garmin Connect's workout/distance permissions and verify a Garmin run reaches Health first.

1. Apply `drizzle/activity-summaries.sql` to the chosen Turso database. This PR does not apply changes to the production database.
2. Set `ACTIVITY_SYNC_TOKEN` to a random secret of at least 32 characters in the deployment environment.
3. Configure Health Auto Export: REST API, POST to `https://glennreyes.com/api/integrations/health`, JSON, Workouts, export version 2, header `Authorization: Bearer <ACTIVITY_SYNC_TOKEN>`. Export running workouts; disable routes, detailed workout metrics, and metadata. Keep each batch below 1 MB and 500 workouts.
4. Send a small test export and check the Running page before enabling recurring exports on the phone. iOS background timing depends on device availability and permissions.

The endpoint stores only running summaries, converts distance to kilometres, hashes source IDs, and deduplicates overlapping watch recordings. Only date, distance, and duration appear publicly. Every imported run is intended for the public journal; select appropriate workouts before sending. Other sports are ignored. No routes, heart rate, or health metrics are stored. Without a token, the journal stays hidden. Precise start times are used privately for sorting and duplicate detection.

Strava remains linked as the full activity destination. This site does not redistribute data from the Strava API.

### Instagram sync

The optional home feed reads three recent posts through Meta's [Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/). It requires a Creator or Business account, a Meta app with `instagram_business_basic` access, and an authorized long-lived token belonging to Glenn's account.

Set `INSTAGRAM_USER_ID` and server-only `INSTAGRAM_ACCESS_TOKEN` in Vercel. The feed caches for an hour, links to originals, uses video covers, and stays hidden when disconnected or unavailable. Renew the token through Meta before it expires. No account credentials are committed; this PR does not authorize an account or change its type. Local media and the selected gym reel work independently.

## Verification

Run `bun format`, `bun lint`, `bun run test`, `bun tsc --noEmit`, `bun run build`, `PLAYWRIGHT_BUILD=1 bun test:e2e`, and `bun run build-storybook`. Playwright checks WCAG, mobile focus, gallery playback, and uniform typography against the production build. Storybook includes the media gallery and shadcn primitives.
