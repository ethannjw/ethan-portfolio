# Gerard Robinson — Portfolio

Personal portfolio website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Fully config-driven — edit one file to customise everything.

## Live Site

[https://yourdomain.com](https://yourdomain.com) *(update after deployment)*

## Tech Stack

- **React 19** + **TypeScript** (strict mode)
- **Vite** — fast dev server & build tool
- **Tailwind CSS v3** — utility-first dark theme
- **Framer Motion** — scroll-triggered animations
- **react-scroll** — smooth anchor navigation
- **react-helmet-async** — SEO meta tags
- **Lucide React** + **React Icons** — UI & brand icons
- **Vitest** + **React Testing Library** — unit tests

## Getting Started

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:5173
```

## Customising the Portfolio

> **You only need to edit one file: `src/config/portfolio.config.ts`**

| Field | Description |
|-------|-------------|
| `personal.name` | Your full name (updates everywhere) |
| `personal.email` | Contact email for mailto links |
| `personal.resumeUrl` | Path to your PDF resume in `/public` |
| `personal.avatarUrl` | Path to your photo in `/public` |
| `seo.*` | Site title, description, OG image |
| `hero.taglines` | Typewriter effect phrases |
| `about.bio` | Bio paragraphs |
| `about.stats` | Stat boxes below bio |
| `skills[]` | Tech stack grouped by category |
| `experience[]` | Work history entries |
| `projects[]` | Portfolio projects |
| `contact.formspreeEndpoint` | Formspree URL for contact form |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run test` | Run unit tests |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier |

## Deployment (Render)

1. Push to GitHub
2. Create **Static Site** on [Render](https://render.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add custom domain in Render dashboard

## Adding Your Photo

Drop `avatar.jpg` into `public/` and update `config.personal.avatarUrl` to `"/avatar.jpg"`.

## License

MIT
