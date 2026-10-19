# aligovro.com

Personal portfolio of **Ali Geroev** — Senior Full-Stack Engineer (Laravel · React · Flutter).

Live: [aligovro.com](https://aligovro.com)

## Stack

- **Next.js 16** (App Router, fully static output) · React 19 · TypeScript
- **Tailwind CSS 4** — design tokens via CSS variables, dark/light themes (`next-themes`)
- Geist Sans / Geist Mono via `next/font`
- Deployed on **Vercel**

## Architecture notes

- All page content lives in a single typed source: [`src/content/site.ts`](src/content/site.ts) — components are presentation-only.
- Semantic color tokens (`--bg`, `--fg`, `--accent`, …) are defined once per theme in [`globals.css`](src/app/globals.css) and mapped to Tailwind utilities through `@theme inline`.
- No client-side JS beyond the theme toggle; everything else is server-rendered static markup.
- Animations respect `prefers-reduced-motion`.

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static production build
```

## Roadmap

- [ ] `/work/[slug]` — MDX case studies (Velite)
- [ ] `/cv` — HTML résumé with PDF/DOCX download
- [ ] OG image generation, JSON-LD, sitemap
- [ ] Playwright smoke tests + Lighthouse CI
