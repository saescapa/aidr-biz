# Header, Navigation & Footer Design

Detailed specifications for site header, navigation system, and footer.

---

## Header

### Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo/Title]              [Nav Links]         [EN|ES] [☀️]  │
└─────────────────────────────────────────────────────────────┘
```

### Components

| Element | Description |
|---------|-------------|
| Logo/Title | Book title or site logo - links to homepage |
| Nav Links | Primary navigation items |
| Language Switcher | EN/ES toggle |
| Theme Toggle | Light/dark mode (optional, may auto-detect only) |

### Behavior

- **Sticky:** Header remains fixed at top on scroll
- **Compact on scroll:** Optionally reduces height after scrolling down
- **Transparent hero option:** Can be transparent over hero, solid on scroll

### Desktop Layout (>768px)

```
[Logo]                    [Home] [Book] [Authors] [Resources] [Buy]    [EN|ES]
```

- Horizontal navigation
- All items visible
- Language switcher at far right

### Mobile Layout (<768px)

```
[Logo]                                                    [☰] [EN|ES]
```

- Hamburger menu replaces navigation
- Language switcher remains visible
- Menu opens as overlay

---

## Navigation Items

### English

| Label | Route | Active On |
|-------|-------|-----------|
| Home | `/en/` | Exact match |
| Book | `/en/book/` | Starts with |
| Authors | `/en/authors/` | Starts with |
| Resources | `/en/resources/` | Starts with |
| Buy | `/en/buy/` | Starts with |

### Spanish

| Label | Route | Active On |
|-------|-------|-----------|
| Inicio | `/es/` | Exact match |
| Libro | `/es/libro/` | Starts with |
| Autores | `/es/autores/` | Starts with |
| Recursos | `/es/recursos/` | Starts with |
| Comprar | `/es/comprar/` | Starts with |

### Active State

- Visual indicator for current page
- Underline, background color, or font weight change
- Must be visually distinct from hover state

---

## Language Switcher

### Design

- Simple toggle: `EN | ES`
- Current language highlighted
- Click switches to equivalent page

### Technical Behavior

```typescript
// Switcher determines current page and finds equivalent
function getAlternateLanguageURL(currentPath: string, targetLang: 'en' | 'es'): string {
  // Map current path to target language equivalent
  // Fall back to homepage if no equivalent exists
}
```

### Accessibility

- `aria-label="Switch language"`
- Keyboard accessible
- Clear visual feedback

---

## Mobile Menu

### Trigger

- Hamburger icon (☰) or custom icon
- Minimum 44x44px touch target
- `aria-expanded` state managed

### Menu Panel

```
┌─────────────────────────────────────────┐
│                                    [✕]  │
├─────────────────────────────────────────┤
│                                         │
│  Home                                   │
│  ─────────────────────────────────      │
│  Book                                   │
│  ─────────────────────────────────      │
│  Authors                                │
│  ─────────────────────────────────      │
│  Resources                              │
│  ─────────────────────────────────      │
│  Buy                                    │
│                                         │
└─────────────────────────────────────────┘
```

### Behavior

- Overlay or slide-in from right
- Background scroll locked
- Focus trapped within menu
- Close on: X button, outside click, Escape key, navigation

---

## Footer

### Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Quick Links]        [Resources]         [Connect]         │
│                                                             │
│  Home                 Sample Chapter      LinkedIn          │
│  Book                 AI Glossary         Twitter           │
│  Authors              Use Cases           Email             │
│  Buy                                                        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  © 2024 [Book Title]. All rights reserved.                  │
│  Privacy Policy                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Sections

#### Quick Links

Primary navigation repeated:
- Home
- Book
- Authors
- Buy

#### Resources

Direct links to downloads:
- Sample Chapter (PDF)
- AI Glossary (PDF)
- Use Cases (PDF)

#### Connect

- Author social links (LinkedIn, Twitter/X)
- Contact email
- Publisher links (optional)

#### Legal Bar

- Copyright notice
- Privacy policy link
- Cookie preferences (if applicable)

### Mobile Footer

- Sections stack vertically
- Full-width layout
- Collapsible sections optional (accordion)

---

## Visual Specifications

### Header Heights

| State | Desktop | Mobile |
|-------|---------|--------|
| Default | 80px | 64px |
| Scrolled | 64px | 56px |

### Z-Index

| Element | Z-Index |
|---------|---------|
| Header | 100 |
| Mobile menu | 200 |
| Modals | 300 |

### Colors (Reference design_ethos.md)

- Header background: White (light) / Dark slate (dark)
- Footer background: Slightly darker than body
- Text: High contrast for readability

---

## Accessibility Checklist

### Header

- [ ] Logo has alt text and links to homepage
- [ ] Navigation uses `<nav>` element with `aria-label`
- [ ] Current page indicated with `aria-current="page"`
- [ ] Skip link provided for keyboard users
- [ ] Mobile menu manages focus correctly

### Footer

- [ ] Footer uses `<footer>` element
- [ ] Link groups have headings or `aria-label`
- [ ] External links marked appropriately
- [ ] Social links have accessible names

---

## Implementation Notes

### Skip Link

First focusable element should be skip link:

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

Visually hidden until focused.

### Semantic Structure

```html
<header role="banner">
  <nav aria-label="Main navigation">
    <!-- Primary nav -->
  </nav>
</header>

<main id="main-content">
  <!-- Page content -->
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```
