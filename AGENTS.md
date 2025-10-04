# AGENTS.md

Canonical playbook for automation agents (Claude, Cursor, etc.) contributing to `glennreyes.com`.

## Project Snapshot

- **Stack**: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Prisma · PostgreSQL
- **Content**: MDX files under `content/`; Prisma sources additional data (events, appearances, analytics)
- **Hosting**: Vercel (deployment, analytics, speed insights)
- **Design system**: Tailwind-first components in `components/ui/`

## Environment & Tooling

1. Install dependencies: `pnpm install`
2. Database
   - Copy `prisma/.env.example` ➝ `prisma/.env`
   - Run `pnpm prisma generate` and `pnpm prisma migrate dev`
3. Development server: `pnpm dev` (Turbopack, served at <http://localhost:3000>)
4. Production build: `pnpm build` then `pnpm start`

## Quality Gates (run before handing work back)

- `pnpm format` – Prettier + ESLint auto-fix
- `pnpm lint` – ESLint (strict, no warnings tolerated)
- `pnpm test` – Vitest test runner
- `pnpm knip` – Optional, will flag unused files/deps
- `tsc --noEmit` (if types feel risky) – TypeScript checks

## MCP Server Notes

- `/mcp` route exposes the MCP server over HTTP; HTML renders for browsers, JSON/POST requests receive MCP responses.
- Shared logic lives in `lib/mcp/core.ts`.
- The standalone CLI (`scripts/mcp-server.ts`) is optional: keep only if stdio-based agents are needed.
- Middleware currently lets `/mcp` handle all traffic directly; no `/api/mcp` proxy exists.

## Code Style & Engineering Rules

- Use React function declarations for components; avoid `React.FC`.
- Define prop interfaces/types above components (`ComponentProps` pattern).
- No `any`, unchecked type assertions, or implicit truthiness: prefer type guards.
- Never use type assertions (`as Type`) or non-null assertions (`!`); always refactor to use proper typing or type guards. Only allow `as const` if absolutely necessary.
- Avoid disabling ESLint rules via comments (`// eslint-disable-next-line`). Instead, fix the underlying issue by improving types, refactoring code, or using proper TypeScript patterns.
- Favour server components; elevate `"use client"` only where interaction is required.
- Use `const`; structure control flow to avoid reassignment.
- Prefer `async/await` with explicit `try/catch`; do not chain `.then()`/`.catch()`.
- Always use descriptive event parameter names; never abbreviate to `(e)`; spell out identifiers like `event`.
- For unused array destructuring elements, use array holes (e.g., `const [, setValue] = useState()`) instead of underscore prefixes.
- Tailwind classes: inline for static strings, `cn()` helper for conditional logic.
- Typography is intentionally uniform: do not introduce ad-hoc font-size utilities.
- Accessibility: use `focus-visible:` for focus styles; preserve existing semantics.
- Keep imports sorted logically (grouped by origin). Use named imports unless a library only exports default.

## Testing Rules

- Use Vitest as the test framework
- Place test files next to the files they test
- Test file naming: `{filename}.test.{extension}` (e.g., `utils.ts` → `utils.test.ts`)

## Content & Data

- Blog posts: `content/posts/*.mdx`
- Static pages: `content/pages/*.mdx`
- Prisma schema & migrations: `prisma/`
- When adding MDX, ensure frontmatter matches existing conventions.

## Git & Workflow

- **Always run quality gates before committing** - ensure `pnpm format`, `pnpm lint`, and `pnpm test` pass.
- Work in small, coherent commits with present-tense summaries.
- **Avoid conventional commit messages** (fix:, feat:, etc.) - use natural, readable descriptions instead.
- Use commit descriptions to provide context about what was done during the changes.
- If tooling (lint/test) cannot run, state why and what was attempted.
- Mention any nonstandard manual steps in the PR/summary.

## Agent-Specific Guidance

### Claude Code

- Treat this file as the single source of truth; keep `CLAUDE.md` in sync (it references this document).
- Run quality gates (`format`, `lint`, `test`) before responding unless infeasible; then explain.
- Highlight assumption checks and TODOs for Glenn.

### Cursor

- Follow the same rules and quality gates as Claude.
- Prefer using Cursor Tasks/Notebooks to capture command output when collaborating.
- Keep code actions reversible: avoid auto-fixing files unrelated to the task.

## Keeping Documents in Sync

- `AGENTS.md` is canonical; update `CLAUDE.md` and `CURSOR.md` whenever this file changes.
- Avoid duplicating guidance across multiple Markdown files: link back here instead.
