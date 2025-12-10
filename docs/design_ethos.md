# Design Ethos

Visual design philosophy and principles for the AI in Business book website.

---

## Design Vision

**Professional Authority** - The site should convey expertise and trustworthiness befitting veteran professionals publishing on AI in business.

**Accessible Intelligence** - Complex AI topics made approachable through clear visual hierarchy and readable presentation.

**Bilingual Parity** - Equal visual treatment for English and Spanish content; neither feels like a translation.

---

## Core Principles

### 1. Clarity Over Cleverness

Every design decision should enhance comprehension:

- Clear visual hierarchy guides the eye
- Whitespace provides breathing room
- Information is scannable in 10-15 seconds
- CTAs are unmistakable

### 2. Mobile-First Reality

Most traffic is mobile; design accordingly:

- Touch-friendly tap targets (44px minimum)
- Readable text without zooming
- No horizontal scrolling
- Fast load times on cellular

### 3. Readable Typography

Designed for readability across all audiences, including those with hypermetropia:

- Base font size: 18px minimum on desktop, 16px on mobile
- Line height: 1.6 for body text
- High contrast ratios (WCAG AA minimum)
- Generous spacing between sections

### 4. Credible Professionalism

Design choices that build trust:

- Clean, uncluttered layouts
- Professional photography
- Consistent visual language
- Polished micro-interactions

---

## Color Philosophy

### Primary Palette Direction

**Suggested:** Deep blue/navy anchors with warm accent colors

- **Authority colors:** Navy, charcoal, deep slate
- **Warmth/humanity:** Warm white, cream, subtle gold
- **Action accents:** Strategic use of energetic accent for CTAs

### Light/Dark Mode

Both modes should feel intentional, not inverted:

- **Light mode:** Clean, professional, approachable
- **Dark mode:** Sophisticated, modern, easy on eyes

Automatic detection based on system preference with manual override.

---

## Typography Direction

### Font Characteristics

**Headings:** Strong, confident, modern sans-serif
- Clear at large sizes
- Distinctive but not decorative

**Body:** Highly readable, professional
- Optimized for long-form reading
- Clear at smaller sizes
- Good language support (accents, special characters)

### Type Scale

| Element | Desktop | Mobile |
|---------|---------|--------|
| H1 | 48px | 32px |
| H2 | 36px | 28px |
| H3 | 24px | 20px |
| Body | 18px | 16px |
| Small | 14px | 14px |

---

## Layout Principles

### Content Width

- Max content width: 720px for reading comfort
- Max container width: 1200px for broader layouts
- Generous margins on all screen sizes

### Grid System

- Mobile: Single column
- Tablet: 2 columns where appropriate
- Desktop: Max 3 columns for content grids

### Spacing Scale

Consistent spacing creates rhythm:

```
4px  - Micro spacing (inline elements)
8px  - Small spacing (related elements)
16px - Base spacing (default gaps)
24px - Medium spacing (section internals)
48px - Large spacing (between sections)
96px - XL spacing (major page divisions)
```

---

## Component Design Direction

### Buttons

- Clear primary/secondary hierarchy
- Generous padding for touch
- Visible hover/focus states
- Loading states for async actions

### Cards

- Subtle shadows or borders for definition
- Consistent internal padding
- Clear visual grouping of related content

### Navigation

- Sticky header for easy access
- Clear current page indicator
- Mobile hamburger menu
- Language switcher prominent but not dominant

### Book Display

- High-quality cover images
- Professional presentation
- Clear CTAs to purchase

---

## Imagery Guidelines

### Photography

- Professional author headshots
- Consistent style and quality
- Appropriate for business context

### Book Cover

- High resolution (minimum 1500px wide for hero)
- Multiple formats for different contexts
- Proper aspect ratio maintenance

### Iconography

- Simple, recognizable icons
- Consistent stroke weight/style
- Purposeful use (not decorative)

---

## Accessibility Requirements

### WCAG Compliance

Target WCAG 2.1 AA compliance:

- Color contrast ratios 4.5:1 minimum for text
- All interactive elements keyboard accessible
- Proper heading hierarchy
- Alt text for meaningful images
- Focus indicators visible

### Inclusive Design

- No information conveyed by color alone
- Sufficient touch targets
- Readable without images
- Usable without JavaScript (graceful degradation)

---

## Performance as Design

Fast load times are a design feature:

- Optimize images aggressively
- Minimize render-blocking resources
- Lazy load below-fold content
- Target sub-2-second first meaningful paint

---

## Iteration Process

This design ethos is a living document:

1. Start with these principles
2. Implement and test with real content
3. Gather feedback
4. Refine and document changes
5. Update this document

Design decisions should reference back to these principles for consistency.
