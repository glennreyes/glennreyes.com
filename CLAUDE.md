# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Development and build commands:

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier and fix lint issues
- `pnpm knip` - Find unused files and dependencies

Database commands:

- `pnpm prisma generate` - Generate Prisma client (runs automatically on install)
- `pnpm prisma migrate dev` - Run database migrations in development
- `pnpm prisma db seed` - Seed database with initial data

Code quality commands:

- `pnpm knip` - Check for unused files and dependencies
- `pnpm lint` - Run ESLint checks
- `pnpm format` - Format and fix code issues

**Important**: Always run `pnpm format`, `pnpm knip` and `pnpm lint` after making any file changes to ensure code quality, proper formatting, and adherence to project rules.

## Architecture

This is a personal portfolio website built with Next.js 15 using the App Router architecture. The site serves as a content platform for blog posts, talks, and workshops.

### Key Technologies

- **Frontend**: Next.js 15 with React 19, TypeScript, Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Content**: MDX files processed with next-mdx-remote
- **Hosting**: Vercel with analytics and speed insights
- **Styling**: Tailwind CSS with custom design system components

### Directory Structure

**Core Application**:

- `app/` - Next.js App Router pages and layouts
  - Route structure follows file-system routing: `/posts/[slug]`, `/talks/[slug]`, `/workshops/[slug]`
  - Each dynamic route includes OpenGraph image generation
- `components/` - Reusable UI components organized by type:
  - `ui/layout/` - Layout components (Container, Main, Card, etc.)
  - `ui/forms/` - Form components (Button, Input, Select)
  - `ui/mdx/` - MDX content rendering components
- `lib/` - Utility functions and data fetching:
  - `posts.ts`, `talks.ts` - Content management utilities
  - `mdx/` - MDX processing utilities
  - `prisma.ts` - Database client configuration

**Content Management**:

- `content/posts/` - Blog post MDX files
- `content/pages/` - Static page content
- `prisma/` - Database schema and migrations
  - Models: Post, Talk, Workshop, Event, Location, Appearance with analytics (Views, Reactions)

**Configuration**:

- Uses pnpm for package management
- ESLint with extensive rule configuration
- Prettier with Tailwind CSS plugin
- TypeScript with strict configuration

### Data Flow

1. Static content (posts, talks, workshops) stored as MDX files in `content/`
2. Dynamic data (events, appearances, analytics) stored in PostgreSQL via Prisma
3. MDX content processed server-side with syntax highlighting via Shiki
4. Analytics tracked via Vercel Analytics and custom database views/reactions

### Development Notes

- Components follow a strict TypeScript pattern with explicit prop interfaces
- Styling uses Tailwind CSS with a custom design system
- Content rendering supports syntax highlighting, auto-linking headings, and GitHub-flavored markdown
- Database uses UUIDs (cuid) for all primary keys
- Environment requires `.env` file for database connection (see README for setup)

## Code Style Guidelines

### React & TypeScript Rules

- **Function declarations**: Use function declarations for React components (`function MyComponent() {}`), arrow functions for everything else
- **Component typing**: Never use `FC` or `FunctionComponent` types - define prop interfaces/types above the component function
- **TypeScript strictness**: Never use `any` type - always provide explicit types or use proper type inference. Never use type assertions (`as string`, `as any`, etc.) - solve type issues through proper typing, type guards, or refactoring instead
- **Component props**: Always define explicit interfaces for component props, even for simple components, positioned above the function. Name the interface the same as the component with 'Props' appended (e.g., `ButtonProps` for `Button` component)
- **Imports**: Use explicit named imports, avoid default imports except for React components
- **File naming**: Use kebab-case for component files, camelCase for utility files
- **Component structure**: Use function declarations with prop interfaces defined above
- **Event handlers**: Prefix with `handle` (e.g., `handleClick`, `handleSubmit`)
- **State naming**: Use descriptive names, avoid abbreviations (`isLoading` not `loading`)
- **Variable declarations**: Never use `let` - always use `const`. Use early returns and other control flow to avoid reassignment
- **Async functions**: Always use `async`/`await` syntax, never use `.then()` or `.catch()` - handle errors explicitly with try/catch
- **CSS classes**: Use Tailwind class names directly for simple literals. For conditional logic or dynamic classes, use the `cn()` utility function (wraps tailwind-merge and clsx)
- **Data management**: Maintain single source of truth where possible - centralize configuration, constants, and shared state. Duplicate strategically when it improves performance or reduces coupling
- **Component types**: Prefer server components by default. Extract client components (`"use client"`) only for the minimal component that requires interactivity, not entire component trees
- **Typography**: Use consistent font size throughout the website - do not vary font sizes as the design maintains uniform typography
- **Rendering strategy**: Only render content dynamically when truly necessary. Default to static generation for better performance - reserve dynamic rendering for content that must be personalized or real-time
- **React features**: Use latest React 19 features where appropriate and beneficial - leverage new hooks, concurrent features, and performance optimizations when they make sense
- **Focus states**: Always use `focus-visible:` pseudo-class instead of `focus:` for better accessibility and user experience. This only shows focus indicators when navigating with keyboard, not when clicking with mouse
