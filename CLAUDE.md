# CLAUDE.md

Claude, follow the canonical guidance in [`AGENTS.md`](./AGENTS.md). Keep both files aligned: if you update one, ensure the other still reflects the same rules and workflows.

## Critical Rules (ALWAYS check BEFORE coding)

### File Creation

- **NEVER create files unless absolutely necessary** for achieving the goal
- **ALWAYS prefer editing existing files** over creating new ones
- **NEVER proactively create documentation files** (\*.md) or README files unless explicitly requested
- Ask yourself: "Can I solve this by editing an existing file instead?"

### Quality Gates

**Run BEFORE responding with code changes:**

1. `pnpm format` - Prettier + ESLint auto-fix
2. `pnpm lint` - ESLint checks (no warnings tolerated)
3. `pnpm test` - Vitest test runner
4. `tsc --noEmit` - TypeScript checks (if types feel risky)

If quality gates can't run, explain why and what was attempted.

### Code Standards

- **No `any` types** - use proper typing or type guards
- **Never use type assertions** (`as Type`) or non-null assertions (`!`) - only allow `as const` if necessary
- **Never disable ESLint rules** via comments - fix the underlying issue instead
- **Never abbreviate event handlers** - use `(event)` not `(e)`
- **For unused destructured values** - use array holes `[, setValue]` not `_value`

### Git Workflow

- **Avoid conventional commits** (fix:, feat:, etc.) - use natural, readable descriptions
- Work in small, coherent commits with present-tense summaries
- Always run quality gates before committing

See [`AGENTS.md`](./AGENTS.md) for complete project documentation.
