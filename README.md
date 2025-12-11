# AI in Business - Website

Promotional website for "AI in Business" book. Bilingual (English/Spanish).

- **English Edition:** [Amazon](https://www.amazon.com/dp/B0FRZBF7C3)
- **Spanish Edition:** [Libros de Cabecera](https://librosdecabecera.com/la-ia-en-los-negocios/)

## Prerequisites

- [Node.js](https://nodejs.org/) v18.17.1 or v20.3.0+ (v22+ recommended)
- [pnpm](https://pnpm.io/) v10+

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:4321/aidr-biz](http://localhost:4321/aidr-biz)

## Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/
│   ├── en/         # English pages
│   └── es/         # Spanish pages
├── styles/         # Global CSS and theme config
└── consts.ts       # Site configuration and routes
```

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 5.x
- **Package Manager:** pnpm
- **Theming:** [PTE](https://github.com/saescapa/pte) (Programmatic Theme Engine)
- **Deployment:** GitHub Pages

## Documentation

See `docs/main.md` for full project documentation.

## Non-Technical Setup

If you're not familiar with development tools, see [NON_TECHNICAL_README.md](./NON_TECHNICAL_README.md) for a step-by-step installation guide.
