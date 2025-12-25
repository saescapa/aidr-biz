# Header & Footer

Navigation and structural components.

---

## Header

### Desktop Layout

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [LOGO]           [Nav]  [Nav]  [Nav]  [Nav]           [EN|ES]  [CTA]  [◐] │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

Three zones with generous spacing:

| Zone | Content | Alignment |
|------|---------|-----------|
| Left | Logo/Site title | Left |
| Center | Navigation links | Center |
| Right | Language, CTA, Theme toggle | Right |

### Mobile Layout

```
┌──────────────────────────────────────┐
│  [LOGO]              [EN|ES]    [☰]  │
└──────────────────────────────────────┘
```

- Hamburger triggers full-screen menu
- Language switcher stays visible
- Theme toggle moves to menu

---

## Navigation Items

### English

| Label | Route |
|-------|-------|
| Book | `/en/book/` |
| Authors | `/en/authors/` |
| Resources | `/en/resources/` |

### Spanish

| Label | Route |
|-------|-------|
| Libro | `/es/libro/` |
| Autores | `/es/autores/` |
| Recursos | `/es/recursos/` |

### CTA Button

| Language | Label | Route |
|----------|-------|-------|
| EN | Buy | `/en/buy/` |
| ES | Comprar | `/es/comprar/` |

Styled as primary button (teal background).

---

## Language Switcher

### Display

```
EN | ES
```

- Current language: bold/highlighted
- Separator: subtle divider
- Click switches to equivalent page in other language

### Behavior

- Maintains current page context when switching
- Falls back to homepage if no equivalent exists
- Updates `data-lang` attribute on `<html>`

---

## Theme Toggle

### Icon States

| Mode | Icon |
|------|------|
| Light | `◐` (half circle) or sun icon |
| Dark | `◑` (half circle) or moon icon |

### Behavior

- Single click toggles between light/dark
- Persists choice to `localStorage`
- Respects system preference on first visit

---

## Mobile Menu

### Trigger

- Hamburger icon (3 lines)
- 44x44px touch target minimum
- Transforms to X when open

### Menu Panel

Full-screen overlay:

```
┌──────────────────────────────────────┐
│                                 [✕]  │
│                                      │
│                                      │
│              Book                    │
│                                      │
│              Authors                 │
│                                      │
│              Resources               │
│                                      │
│              ─────────               │
│                                      │
│              [Buy CTA]               │
│                                      │
│                                      │
│              [◐ Theme]               │
│                                      │
└──────────────────────────────────────┘
```

- Centered navigation items
- Large touch targets
- CTA prominent
- Theme toggle at bottom
- Background scroll locked

### Close Triggers

- X button
- Escape key
- Outside click
- Any navigation

---

## Footer

### Desktop Layout

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│     [Navigation]              [Resources]              [Connect]           │
│                                                                            │
│     Book                      [Resource 1]             LinkedIn            │
│     Authors                   [Resource 2]             Twitter             │
│     Resources                 [Resource 3]             Email               │
│     Buy                                                                    │
│                                                                            │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│     © 2025 [Book Title]                              Privacy Policy        │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Mobile Layout

Stacked single column:

```
┌──────────────────────────────────────┐
│                                      │
│  Navigation                          │
│  Book · Authors · Resources · Buy    │
│                                      │
│  Resources                           │
│  [Resource links]                    │
│                                      │
│  Connect                             │
│  [Social links]                      │
│                                      │
│  ────────────────────────────────    │
│                                      │
│  © 2025 [Book Title]                 │
│  Privacy Policy                      │
│                                      │
└──────────────────────────────────────┘
```

### Footer Sections

**Navigation**
- Repeat main nav links
- Quick access from bottom of long pages

**Resources**
- Direct links to downloadable content
- PDF links open in new tab

**Connect**
- Author social profiles (LinkedIn, Twitter/X)
- Contact email
- Professional networks only

**Legal Bar**
- Copyright notice
- Privacy policy link
- Year updates automatically

---

## Specifications

### Heights

| Element | Desktop | Mobile |
|---------|---------|--------|
| Header | 80px | 64px |
| Header (scrolled) | 64px | 56px |

### Z-Index

| Element | Value |
|---------|-------|
| Header | 100 |
| Mobile menu | 200 |
| Modals | 300 |

### Transitions

- Header shrink: 200ms ease
- Menu open/close: 300ms ease
- Theme toggle: instant (no flash)

---

## Accessibility

### Header

- `<header role="banner">`
- `<nav aria-label="Main">`
- Skip link as first focusable element
- `aria-current="page"` on active nav item
- `aria-expanded` on mobile menu trigger

### Footer

- `<footer role="contentinfo">`
- Link groups have headings
- External links marked with `aria-label`
- Social icons have accessible names

### Skip Link

```html
<a href="#main" class="skip-link">
  Skip to content
</a>
```

Visually hidden until focused.

---

## Semantic Structure

```html
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <header role="banner">
    <a href="/" class="logo">[Logo]</a>
    <nav aria-label="Main">
      <!-- Nav items -->
    </nav>
    <div class="header-actions">
      <!-- Language, CTA, Theme -->
    </div>
  </header>

  <main id="main">
    <!-- Page content -->
  </main>

  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
```
