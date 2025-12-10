# AGENTS.md

Canonical playbook for automation agents (Claude, Cursor, etc.) contributing to `glennreyes.com`.

## Project Snapshot

- **Stack**: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Drizzle · Turso
- **Content**: MDX files under `content/`; Drizzle sources additional data (events, appearances, analytics)
- **Hosting**: Vercel (deployment, analytics, speed insights)
- **Design system**: Tailwind-first components in `components/ui/`

## Environment & Tooling

1. Install dependencies: `pnpm install`
2. Database: Configure Turso connection in `.env`
3. Development server: `pnpm dev` (Turbopack, served at <http://localhost:3000>)
4. Production build: `pnpm build` then `pnpm start`

## Quality Gates (run before handing work back)

- `pnpm format` – Prettier + ESLint auto-fix
- `pnpm lint` – ESLint (strict, no warnings tolerated)
- `pnpm test` – Vitest test runner
- `pnpm tsc --noEmit` – TypeScript type checking
- `pnpm knip` – Optional, will flag unused files/deps

## MCP Server Notes

- `/mcp` route exposes the MCP server over HTTP; HTML renders for browsers, JSON/POST requests receive MCP responses.
- Shared logic lives in `lib/mcp.ts`.
- The standalone CLI (`scripts/mcp-server.ts`) is optional: keep only if stdio-based agents are needed.
- Middleware currently lets `/mcp` handle all traffic directly; no `/api/mcp` proxy exists.

## Code Style & Engineering Rules

- Use React function declarations for components; never use `const` with arrow functions. ✅ `function Component(props: Props)` ❌ `const Component = (props: Props) =>`. Avoid `React.FC`.
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
- Keep imports sorted logically (grouped by origin). Use named imports unless a library only exports default.

## Accessibility Rules (WCAG 2.1 AA)

- **Focus Management**: Use `focus-visible:` for focus styles; preserve existing semantics.
- **Touch Targets**: Minimum 44×44px for all interactive elements (buttons, links).
- **ARIA Attributes**:
  - Use `aria-current="page"` for active navigation links.
  - Use `aria-label` for icon-only buttons.
  - Use `aria-expanded` for toggle buttons.
  - Use `aria-modal` and `role="dialog"` for modals.
- **Keyboard Navigation**:
  - All interactive elements must be keyboard accessible.
  - Modals must trap focus and close on ESC key.
  - Return focus to trigger element when closing modals.
- **Color & Contrast**: Pure black/white theme with teal accents; ensure 4.5:1 contrast ratio.
- **Semantic HTML**: Use proper heading hierarchy (h1-h6), landmarks (nav, main, footer).
- **Testing**: Run E2E accessibility tests with @axe-core/playwright before committing.

## Testing Rules

- Use Vitest as the test framework
- Place test files next to the files they test
- Test file naming: `{filename}.test.{extension}` (e.g., `utils.ts` → `utils.test.ts`)

## Content & Data

- Blog posts: `content/posts/*.mdx`
- Static pages: `content/pages/*.mdx`
- Drizzle schema: `drizzle/schema.ts`
- When adding MDX, ensure frontmatter matches existing conventions.

## Git & Workflow

- **Always run quality gates before committing** - ensure `pnpm format`, `pnpm lint`, and `pnpm test` pass.
- Work in small, coherent commits with present-tense summaries.
- **Avoid conventional commit messages** (fix:, feat:, etc.) - use natural, readable descriptions instead.
- **Use backticks for technical terms** - wrap variables, component names, function names, and file paths in backticks (e.g., `viewTransitionName`, `Avatar`, `utils.ts`).
- **Never add AI attribution** - do not include "Generated with Claude Code", co-author tags, or any AI branding in commit messages.
- Use commit descriptions to provide context about what was done during the changes.
- If tooling (lint/test) cannot run, state why and what was attempted.
- Mention any nonstandard manual steps in the PR/summary.

## Agent-Specific Guidance

### Claude Code

**Critical Rules (ALWAYS check BEFORE coding):**

- **File Creation**:
  - NEVER create files unless absolutely necessary for achieving the goal
  - ALWAYS prefer editing existing files over creating new ones
  - NEVER proactively create documentation files (\*.md) or README files unless explicitly requested
  - Ask yourself: "Can I solve this by editing an existing file instead?"

- **Quality Gates** (run BEFORE responding with code changes):
  1. `pnpm format` - Prettier + ESLint auto-fix
  2. `pnpm lint` - ESLint checks (no warnings tolerated)
  3. `pnpm test` - Vitest test runner
  4. `tsc --noEmit` - TypeScript checks (if types feel risky)
  - If quality gates can't run, explain why and what was attempted

- **Code Standards** (reinforced for Claude):
  - No `any` types - use proper typing or type guards
  - Never use type assertions (`as Type`) or non-null assertions (`!`) - only allow `as const` if necessary
  - Never disable ESLint rules via comments - fix the underlying issue instead
  - Never abbreviate event handlers - use `(event)` not `(e)`
  - For unused destructured values - use array holes `[, setValue]` not `_value`

- **General Workflow**:
  - Treat this file as the single source of truth
  - Run quality gates (`format`, `lint`, `test`) before responding unless infeasible; then explain
  - Highlight assumption checks and TODOs for Glenn

### Cursor

- Follow the same rules and quality gates as Claude
- Prefer using Cursor Tasks/Notebooks to capture command output when collaborating
- Keep code actions reversible: avoid auto-fixing files unrelated to the task
