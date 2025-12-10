# AI in Business - Project Documentation

Promotional website for a published book about AI in business. Available in English and Spanish.

## Quick Links

- **English Edition (Amazon):** https://www.amazon.com/dp/B0FRZBF7C3
- **Spanish Edition (Libros de Cabecera):** https://librosdecabecera.com/la-ia-en-los-negocios/

## Documentation Index

### Core Documentation (docs/)

| Document | Description |
|----------|-------------|
| [main.md](main.md) | This file - project overview and navigation |
| [code_style.md](code_style.md) | Code formatting and implementation standards |
| [design_ethos.md](design_ethos.md) | Visual design philosophy and principles |

### Session Initialization (docs/main/)

| Document | Description |
|----------|-------------|
| [session_init.md](main/session_init.md) | Session initialization checklist |
| [recent_work.md](main/recent_work.md) | Recent changes and current state |

### Website Documentation (docs/website/)

| Document | Description |
|----------|-------------|
| [overview.md](website/overview.md) | Site structure and navigation tree |
| [header_footer.md](website/header_footer.md) | Header, navigation, and footer design |
| [pages.md](website/pages.md) | Individual page breakdowns |

### Local Development (docs.local/)

| Document | Description |
|----------|-------------|
| [todos.md](../docs.local/todos.md) | Task tracking and work distribution |

---

## Development Workflow

### Session Initialization

Every AI session must start by:

1. Reading `docs/main/session_init.md` for initialization checklist
2. Reviewing `docs/main/recent_work.md` for current state
3. Checking recent git commits to understand latest changes
4. Reviewing `docs.local/todos.md` for pending tasks

### Documentation Requirements

Documentation must be updated in every session:

- Update `docs/main/recent_work.md` with changes made
- Update `docs.local/todos.md` with completed/new tasks
- Update relevant documentation when features change
- Commit documentation changes with code changes

### AI-Agnostic Approach

This repository uses Markdown documentation to remain AI-tool agnostic:

- All instructions are in standard Markdown files
- No tool-specific configurations in core documentation
- Any AI assistant can follow these workflows
- Human developers can also use this documentation

---

## Technical Stack

- **Framework:** Astro 5.x
- **Package Manager:** pnpm
- **Languages:** TypeScript, Astro
- **Styling:** PTE (Programmatic Theme Engine)
- **Deployment:** Static site generation (GitHub Pages or CDN)

## Key Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Build for production
pnpm preview    # Preview production build
```

---

## Project Goals

1. Create professional online presence for the AI book and authors
2. Drive traffic to purchase pages (Amazon, Libros de Cabecera)
3. Offer dynamic, multimedia content with downloadable resources
4. Establish authors as credible AI experts
5. Maximize SEO visibility for AI business topics

## Target Audiences

1. Business executives and managers (C-level, VPs, Directors)
2. Corporate learning & HR/Training departments
3. Academics and business school students
4. Media and journalists seeking AI expertise
