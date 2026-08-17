# fokusdong

Next.js (App Router) + TypeScript + Tailwind CSS v4 project.

## Project structure

- `app/(frontend)/` — user-facing pages, route group (no URL segment). Each route gets its own `page.tsx` and, when it needs page-specific chrome/metadata, its own `layout.tsx` scoped to that route only.
- `app/(backend)/api/` — API route handlers, kept separate from frontend routes via route group.
- `app/layout.tsx` — the **only** place that renders `<html>`/`<body>` and loads fonts/`globals.css`. Nested layouts must never repeat these — they should just wrap `children` (plus any route-scoped styling/metadata).
- `components/ui/` — small, presentational primitives (e.g. a single button/badge). No business logic, no data fetching. Take plain props (`label`, `selected`, `onClick`, …) and stay reusable across features.
- `components/features/` — composed components that orchestrate one or more `ui/` primitives plus feature-specific logic (e.g. generating a list from a count, wiring selection state). Page files should stay thin and mostly assemble `features/` components.
- Import via the `@/*` path alias (maps to project root), not relative `../../` chains.

## Component conventions

- Prefer generating repeated elements from data (`Array.from`, `.map`) over hand-duplicated JSX blocks.
- Interactive elements are real `<button type="button">`s, not `<div onClick>` — keep them keyboard/focus accessible.
- Only add `"use client"` to components that actually need interactivity (event handlers, state, refs).
- Keep prop interfaces minimal — don't add props/state a component doesn't yet use.

## Styling

- Tailwind utility classes only; no separate CSS files per component.
- Every component must support both light and dark mode using the existing `zinc` palette convention, e.g.:
  - borders: `border-zinc-200 dark:border-zinc-800`
  - surfaces: `bg-white dark:bg-zinc-900`
  - hover: `hover:bg-zinc-50 dark:hover:bg-zinc-800/50`
  - focus: `focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white`
- Match existing spacing/radius patterns already used in the codebase (`rounded-lg`, `gap-2`/`gap-4`, `p-4`) instead of introducing new scales.
- Use `gap` on flex/grid containers for spacing between siblings, not margin on individual items — margin on grid items with `1fr` tracks doesn't behave like a uniform gutter.

## Data fetching (queries & mutations)

- Client components never call `fetch` directly. Data access is split into three layers:
  - `lib/api/*` — plain async functions that call an API route and return typed data (e.g. `lib/api/quiz.ts`). No React here.
  - `hooks/use-query.ts` / `hooks/use-mutation.ts` — generic, reusable hooks. `useQuery(queryFn, deps, { enabled })` returns `{ data, error, isLoading }`; `useMutation` (add when the first write endpoint exists) should return `{ mutate, data, error, isPending }` in the same shape.
  - `hooks/queries/*` and `hooks/mutations/*` — one hook per operation, composing a `lib/api` function with `useQuery`/`useMutation` (e.g. `useQuizQuery(quizId)`). Pages call these, not the generic hooks directly.
- Reads are queries, writes are mutations — don't reach for `useMutation` to fetch data just because a click triggers it. Prefer deriving a query key from state (e.g. `selectedQuestionId`) so selecting something re-runs a query automatically, rather than calling a fetch function imperatively inside the click handler.
- Don't add a `hooks/mutations/*` hook until there's an actual write endpoint to call — no speculative mutation hooks.

## Formatting

- Indentation is 2 spaces (see `.editorconfig`); no tabs.

## TypeScript

- `strict` mode is on — keep new code strict-clean, don't add `any` or non-null assertions to work around it.
