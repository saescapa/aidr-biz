# Website Overview

Site structure, navigation tree, and content organization.

---

## Site Architecture

### URL Structure

Bilingual routing with language prefix:

```
/                    → Redirects to /en/ or /es/ based on browser locale
/en/                 → English homepage
/en/book/            → Book details (EN)
/en/authors/         → Author profiles (EN)
/en/resources/       → Downloads & resources (EN)
/en/buy/             → Where to purchase (EN)
/en/privacy/         → Privacy policy (EN)
/en/blog/            → Blog/articles (EN) - future

/es/                 → Spanish homepage
/es/libro/           → Book details (ES)
/es/autores/         → Author profiles (ES)
/es/recursos/        → Downloads & resources (ES)
/es/comprar/         → Where to purchase (ES)
/es/privacidad/      → Privacy policy (ES)
/es/blog/            → Blog/articles (ES) - future
```

### Navigation Tree

```
├── Home (Welcome)
│   └── Hero → Book intro → Author preview → CTA
│
├── Book
│   └── Full description → TOC → Specs → Sample preview
│
├── Authors
│   ├── Author 1 profile
│   └── Author 2 profile
│
├── Resources
│   ├── Sample chapters (PDF)
│   ├── AI Glossary (PDF)
│   └── Use cases (PDF)
│
├── Buy
│   ├── Amazon (English)
│   └── Libros de Cabecera (Spanish)
│
└── Legal
    └── Privacy & cookies
```

---

## Content Organization

### Static Pages

| Page | EN Route | ES Route | Priority |
|------|----------|----------|----------|
| Welcome | `/en/` | `/es/` | P0 |
| Book | `/en/book/` | `/es/libro/` | P0 |
| Authors | `/en/authors/` | `/es/autores/` | P0 |
| Resources | `/en/resources/` | `/es/recursos/` | P1 |
| Buy | `/en/buy/` | `/es/comprar/` | P1 |
| Privacy | `/en/privacy/` | `/es/privacidad/` | P2 |

### Content Collections

Blog and other dynamic content uses Astro Content Collections with Markdown files stored in the repository.

```
src/content/
├── blog/           # Blog posts (Markdown files)
│   ├── en/         # English posts
│   └── es/         # Spanish posts
└── testimonials/   # Reviews/endorsements (future)
```

**Blog Implementation:**
- Content stored as `.md` files in the repository
- Managed via Astro Content Collections
- Frontmatter for metadata (title, date, author, lang)
- Markdown for post content
- No external CMS required (content lives in repo)

---

## SEO Structure

### URL Guidelines

- Lowercase URLs only
- Hyphens for word separation
- No trailing parameters
- Language-appropriate slugs (not translations of EN slugs)

### hreflang Implementation

Every page must include hreflang tags:

```html
<link rel="alternate" hreflang="en" href="https://domain.com/en/book/" />
<link rel="alternate" hreflang="es" href="https://domain.com/es/libro/" />
<link rel="alternate" hreflang="x-default" href="https://domain.com/en/book/" />
```

### Sitemap Structure

Generated sitemap should include:

- All language variations of each page
- Proper `<xhtml:link>` for language alternates
- Last modified dates
- Priority hints (homepage > main pages > legal)

---

## User Flows

### Primary Flow: Book Purchase

```
Land on homepage → Scan hero (10 sec) → Understand value prop
    → Click "Buy" CTA → Choose edition → External purchase
```

### Secondary Flow: Author Research

```
Land anywhere → Navigate to Authors → Read credentials
    → Return to Buy or Resources
```

### Tertiary Flow: Resource Download

```
Land on homepage → Navigate to Resources → Download sample
    → Return to Buy (informed purchase)
```

---

## Language Switching

### Behavior

- Switcher visible in header on all pages
- Switches to equivalent page in other language
- Preserves scroll position where possible
- Falls back to homepage if page doesn't exist

### Implementation

```typescript
// Example language route mapping
const routeMap = {
  en: {
    book: '/en/book/',
    authors: '/en/authors/',
    resources: '/en/resources/',
    buy: '/en/buy/',
    privacy: '/en/privacy/',
  },
  es: {
    book: '/es/libro/',
    authors: '/es/autores/',
    resources: '/es/recursos/',
    buy: '/es/comprar/',
    privacy: '/es/privacidad/',
  },
};
```

---

## Mobile Navigation

### Collapsed Menu

On mobile, navigation collapses to hamburger:

- Language switcher remains visible
- Menu opens as overlay or slide-in
- Clear close mechanism
- Traps focus when open

### Touch Targets

All nav items: minimum 44x44px touch area

---

## Analytics Considerations

Track these key events:

- Language preference (initial and switches)
- Navigation patterns
- Resource downloads
- External link clicks (purchase CTAs)
- Scroll depth on key pages
