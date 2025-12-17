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

This project uses latest [Node](https://nodejs.org), [Bun](https://bun.sh) and [Docker](https://www.docker.com) for development.

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
