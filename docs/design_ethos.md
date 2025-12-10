# Design Ethos

Visual design philosophy for the AI in Business book website.

---

## Design Vision

**Confident Authority** - Bold, direct presentation that commands attention. No hedging, no corporate blandness.

**Language as Identity** - English and Spanish editions have distinct visual identities rooted in their cover designs. Not translations—siblings.

**Clarity Through Space** - Generous whitespace, clear hierarchy, scannable in seconds.

---

## Color System

### English Theme (Blue)

Derived from the English book cover's sky blue background.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#A8D5E5` | Page background |
| `--bg-secondary` | `#F5EDE0` | Cards, sections |
| `--accent-primary` | `#3AAFAF` | CTAs, highlights, links |
| `--accent-secondary` | `#D94744` | Emphasis, alerts |
| `--accent-tertiary` | `#F2C94C` | Badges, decorative |
| `--text-primary` | `#1A2E44` | Headings, body text |
| `--text-secondary` | `#3D5A73` | Secondary text |
| `--text-inverse` | `#FFFFFF` | Text on dark/accent |

### Spanish Theme (Cream)

Derived from the Spanish book cover's warm cream background.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#F5EDE0` | Page background |
| `--bg-secondary` | `#A8D5E5` | Cards, sections |
| `--accent-primary` | `#3AAFAF` | CTAs, highlights, links |
| `--accent-secondary` | `#D94744` | Emphasis, alerts |
| `--accent-tertiary` | `#F2C94C` | Badges, decorative |
| `--text-primary` | `#1A2E44` | Headings, body text |
| `--text-secondary` | `#3D5A73` | Secondary text |
| `--text-inverse` | `#FFFFFF` | Text on dark/accent |

### Dark Mode (Both Languages)

Dark mode inverts the hierarchy while preserving brand identity.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0F1419` | Page background |
| `--bg-secondary` | `#1A2E44` | Cards, sections |
| `--accent-primary` | `#4ECDC4` | CTAs (lighter teal for contrast) |
| `--accent-secondary` | `#FF6B6B` | Emphasis (lighter red) |
| `--accent-tertiary` | `#FFE66D` | Badges (lighter yellow) |
| `--text-primary` | `#F5F5F5` | Headings, body text |
| `--text-secondary` | `#A0AEC0` | Secondary text |
| `--text-inverse` | `#0F1419` | Text on light backgrounds |

### Theme Selection

- Light mode is default
- System preference detection with manual override
- Language determines light mode palette (EN=blue, ES=cream)
- Dark mode is consistent across languages

---

## Typography

### Font Families

**Headings: Space Grotesk** (Google Fonts)
- Geometric sans-serif with tech-forward personality
- Strong presence at large sizes
- Weights: 500, 600, 700

**Body: Inter** (Google Fonts)
- Highly readable, designed for screens
- Excellent support for Spanish characters (á, é, í, ó, ú, ñ, ü)
- Weights: 400, 500, 600

### Type Scale

Bold, confident headlines. Readable body text.

| Element | Desktop | Mobile | Weight | Font |
|---------|---------|--------|--------|------|
| Display | 72px | 48px | 700 | Space Grotesk |
| H1 | 56px | 36px | 700 | Space Grotesk |
| H2 | 40px | 28px | 600 | Space Grotesk |
| H3 | 28px | 22px | 600 | Space Grotesk |
| Body | 18px | 16px | 400 | Inter |
| Small | 14px | 14px | 400 | Inter |

### Line Heights

| Element | Line Height |
|---------|-------------|
| Display/H1 | 1.1 |
| H2/H3 | 1.2 |
| Body | 1.6 |
| Small | 1.4 |

---

## Layout

### Content Width

| Container | Max Width |
|-----------|-----------|
| Content (reading) | 680px |
| Standard | 1080px |
| Wide | 1280px |

### Spacing Scale

```
4px   - xs (tight inline spacing)
8px   - sm (related elements)
16px  - md (default gaps)
24px  - lg (component padding)
48px  - xl (section gaps)
96px  - 2xl (major divisions)
128px - 3xl (hero spacing)
```

### Grid

- Mobile: Single column
- Tablet (768px+): 2 columns
- Desktop (1024px+): Up to 3 columns

---

## Visual Language

### Geometric Aesthetic

Inspired by the book cover's circuit/connection patterns:

- Circles, triangles, rectangles as decorative elements
- Connected dots/lines suggesting AI networks
- Used sparingly, not overwhelming content

### Shapes Usage

| Shape | Meaning |
|-------|---------|
| Circles | Connection points, completeness |
| Triangles | Direction, progress, growth |
| Lines | Networks, relationships |
| Rounded rectangles | Containers, buttons, cards |

### Decorative Constraints

- Decorative elements support, never distract
- Consistent stroke weight when using lines
- Color from the defined palette only
- Reduce or remove on mobile if needed

---

## Components

### Buttons

**Primary (Teal)**
- Background: `--accent-primary`
- Text: `--text-inverse`
- Padding: 16px 32px
- Border-radius: 8px (or pill for emphasis)
- Hover: Darken 10%

**Secondary (Outline)**
- Background: transparent
- Border: 2px solid `--accent-primary`
- Text: `--accent-primary`
- Same padding and radius

**Ghost**
- Background: transparent
- Text: `--text-primary`
- Underline on hover

### Cards

- Background: `--bg-secondary`
- Border-radius: 12px
- Padding: 24px
- Optional subtle shadow in light mode
- No border (background contrast sufficient)

### Form Inputs

- Height: 48px minimum
- Border: 1px solid `--text-secondary`
- Border-radius: 8px
- Focus: 2px solid `--accent-primary`
- Padding: 12px 16px

---

## Imagery

### Book Covers

- High resolution required (min 1500px height)
- Display with subtle shadow/depth
- Consistent presentation both editions

### Author Photos

- Professional headshots
- Consistent style and lighting
- Square or 4:5 aspect ratio
- Same treatment for both authors

### Decorative

- Geometric patterns from brand
- Abstract AI/network visualizations
- No stock photography

---

## Accessibility

### Contrast Requirements

All text meets WCAG 2.1 AA:
- Normal text: 4.5:1 minimum
- Large text (24px+): 3:1 minimum
- UI components: 3:1 minimum

### Interactive Elements

- Focus indicators visible (2px outline)
- Touch targets: 44px minimum
- Keyboard navigation supported
- Skip links provided

### Motion & Animations

**Timing Tokens**
| Token | Duration | Use Case |
|-------|----------|----------|
| `--transition-fast` | 150ms | Color changes, opacity |
| `--transition-base` | 200ms | Most interactions |
| `--transition-slow` | 300ms | Complex transforms |
| `--transition-smooth` | 300ms cubic-bezier | Page transitions |

**Hover Effects**
- Links: Animated underline grows from left
- Buttons: Lift effect (-2px) + shadow
- Cards: Subtle lift + shadow expansion

**Page Transitions**
- Astro View Transitions enabled
- Crossfade between pages (300ms)
- Header/Footer persist during navigation
- Respects `prefers-reduced-motion`

**Guidelines**
- No auto-playing animations
- All transitions under 300ms
- Use easing for natural feel

---

## Performance

Design decisions that support performance:

- Google Fonts with `display=swap` for fast initial render
- System fonts as fallback during font loading
- Font preconnect for faster loading
- SVG for icons and geometric elements
- Lazy load below-fold images
- Target: 95+ Lighthouse performance

---

## Implementation Notes

### CSS Custom Properties

```css
:root {
  /* Typography */
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Animation timing */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
  --transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

:root[data-lang="en"] {
  --bg-primary: #A8D5E5;
  --bg-secondary: #F5EDE0;
  --accent-primary-hover: #2E9494;
  /* ... */
}

:root[data-lang="es"] {
  --bg-primary: #F5EDE0;
  --bg-secondary: #A8D5E5;
  --accent-primary-hover: #2E9494;
  /* ... */
}

:root[data-theme="dark"] {
  --bg-primary: #0F1419;
  --bg-secondary: #1A2E44;
  --accent-primary-hover: #5FE0D7;
  /* ... */
}
```

### Theme Switching

1. Check `localStorage` for saved preference
2. Fall back to system preference (`prefers-color-scheme`)
3. Default to light mode
4. Language determines light palette variant
