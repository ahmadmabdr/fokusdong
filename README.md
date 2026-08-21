# fokusdong

A Next.js quiz app with a Postgres (Supabase) backend via Prisma.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [Prisma](https://www.prisma.io) ORM against Postgres (Supabase-hosted)

## Getting started

Install dependencies:

```bash
pnpm install
```

Copy the environment file and fill in your Supabase Postgres credentials:

```bash
cp .env.example .env
```

`DATABASE_URL` is the pooled connection used at runtime; `DIRECT_URL` is the session-mode connection used for migrations.

Apply migrations and generate the Prisma client:

```bash
pnpm migrate:apply
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project structure

- `app/(frontend)/` — user-facing pages (`library`, `quiz`), route-grouped with no URL segment.
- `app/(backend)/api/` — API route handlers (`question`, `quiz`).
- `app/layout.tsx` — root layout; the only place `<html>`/`<body>` and global fonts/styles are set up.
- `components/ui/` — presentational primitives.
- `components/features/` — feature composition built from `ui/` components.
- `lib/api/`, `hooks/` — data-fetching layer (typed API calls + `useQuery`/`useMutation` hooks).
- `prisma/schema.prisma` — database schema; `prisma/migrations/` — migration history.

See [CLAUDE.md](CLAUDE.md) for the full set of project and component conventions.

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build for production |
| `pnpm start` | Run the production build |
| `pnpm lint` | Run ESLint |
| `pnpm migrate:generate` | Create a new Prisma migration (without applying it) |
| `pnpm migrate:apply` | Apply pending Prisma migrations |
| `pnpm db:seed` | Seed the database (`prisma/seed.ts`) |
