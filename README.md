# glennreyes.com

This is the source code for my personal website, built using [Next.js](https://nextjs.org) App Router, [Tailwind CSS](https://tailwindcss.com), and [Prisma](https://prisma.io).

![Banner](https://user-images.githubusercontent.com/5080854/230419923-8374acdf-5746-487d-a404-7139f3d766e8.png)

The site is hosted on [Vercel](https://vercel.com) and uses [Vercel Analytics](https://vercel.com/analytics) for tracking performance. Data is stored using [Supabase](https://supabase.com), a backend-as-a-service platform that provides Postgres databases and other features.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma](https://prisma.io)
- [Supabase](https://supabase.com)
- [Vercel](https://vercel.com)
- [Vercel Analytics](https://vercel.com/analytics)

## Run the Development Server

This project uses latest [Node](https://nodejs.org), [pnpm](https://pnpm.io) and [Docker](https://www.docker.com) for development.

### Installation

1. Clone the repository

```bash
git clone https://github.com/glennreyes/glennreyes.com
cd glennreyes.com
```

2. Install dependencies

```bash
pnpm install
```

### Database Setup

1. Copy the `.env.example` file to `.env` located in the prisma directory. The default values for `DATABASE_URL` points to a local Postgres database.
2. Run following Prisma commands to generate the Prisma client and migrate the database.

```bash
pnpm prisma generate # Generate Prisma client
pnpm prisma migrate dev # Migrate database
```

### Development Server

1. Run the development server

```bash
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Inspiration

I explored various excellent projects to gather ideas and inspiration for my personal website. Here are some of them:

- [Spotlight by Tailwind CSS](https://tailwindui.com/templates/spotlight)
- [Lee Robinson's personal website](https://leerob.io)
- [Delba de Oliveira's personal website](https://delba.dev)
- [Brian Lovin's personal website](https://brianlovin.com)
