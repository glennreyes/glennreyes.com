# Working on glennreyes.com

## Repository map

| When changing                                | Start here                                                                                                                                                                                                        |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Routes, metadata, redirects                  | [App Router](app), [Next.js configuration](next.config.ts)                                                                                                                                                        |
| Portfolio entries, media, chapter visibility | [Site content](lib/site-content.ts), [site constants](lib/constants.ts), [publication guide](README.md#personal-site)                                                                                             |
| Posts and static copy                        | [MDX content](content), [collection schemas](content-collections.ts), [post queries](lib/posts.ts)                                                                                                                |
| Talks, workshops, appearances                | [Talk queries](lib/talks.ts), [workshop queries](lib/workshops.ts), [event queries](lib/events.ts), [shared appearance history](lib/appearance-history.ts), [archive feed](components/speaking/speaking-feed.tsx) |
| Persistence and integrations                 | [Drizzle schema](drizzle/schema.ts), [database client](lib/db.ts), [activity storage](lib/activity-store.ts), [integration setup](README.md#activity-sync)                                                        |
| MCP                                          | [HTTP route](app/mcp/route.ts), [shared tools](lib/mcp.ts), [stdio entry point](scripts/mcp-server.ts)                                                                                                            |
| UI and browser behavior                      | [UI primitives](components/ui), [browser tests](e2e), [Playwright configuration](playwright.config.ts)                                                                                                            |

## Working locally

Use the Bun version in [package.json](package.json) and install with `bun install --frozen-lockfile`. For development with Turso, configure `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in `.env` and run `bun dev`. The production commands are `bun run build` and `bun start`. For verification from a fresh checkout, follow the [test commands](README.md#verification).

## Code and content

- Keep queries in `lib/`. Routes and components consume domain functions. [Oxlint](.oxlintrc.json) checks imports at that boundary. The HTTP and stdio MCP transports use the same tool definitions.
- Define React components with function declarations and props types above them. Prefer server components. Put `use client` on the component that owns browser interaction.
- Use explicit types or guards. Avoid `any`, type assertions, non-null assertions, implicit truthiness and lint suppressions. Use `as const` only when literal inference requires it.
- Use named imports where supported. Group imports by origin. Prefer `const` and `async/await`; handle errors where recovery is possible. Spell out event parameters and use holes for unused destructured array elements.
- Use inline static Tailwind classes and `cn()` for conditional classes. Preserve the site's uniform type size and black, white and teal palette. Read the installed UI SDK documentation in `node_modules/@ui-sdk/react/docs/` before changing primitives. Use its `render` composition.
- Follow existing MDX frontmatter and validate changes against the collection schemas.

## Accessibility

Meet WCAG 2.1 AA. Keep semantic landmarks, ordered headings, 4.5:1 text contrast, 44×44 px touch targets, keyboard operation and visible `focus-visible` styles. Use `aria-current="page"` on current links, `aria-label` on icon-only controls and `aria-expanded` on toggles. Modal dialogs need a name, `role="dialog"`, `aria-modal`, trapped focus, Escape dismissal and focus restoration.

## Verification and handoff

- Run `bun format` and review its changes. Keep unrelated formatting out of the patch.
- Run `bun run check` for generated types, strict lint, TypeScript, Vitest and unused code. Keep unit tests beside their source as `{filename}.test.{extension}`.
- Before committing, run `bun run test:e2e:fixture`. It builds the site against a temporary SQLite speaking archive and runs the browser and accessibility tests. Install the browsers once per Playwright version as described in the [verification guide](README.md#verification).
- Prefer editing existing files. Add files only when needed for the change. Keep repository documentation here and add standalone guides only when requested.
- Make small, coherent commits with present-tense summaries and a body explaining the reason. Use backticks for technical names. Omit conventional prefixes and AI attribution.
- In the handoff, identify remaining decisions, failed checks, what you tried and any nonstandard manual steps.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
