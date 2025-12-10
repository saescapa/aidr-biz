# Page Specifications

Layout and component breakdown for each page. All copy shown as placeholders.

---

## 1. Welcome (Homepage)

**Routes:** `/en/` | `/es/`

**Purpose:** Immediate impact. Book + value + action.

### Hero Section

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                                                                            │
│                          [DISPLAY HEADLINE]                                │
│                                                                            │
│                          [Subheadline placeholder]                         │
│                                                                            │
│                                                                            │
│              [Book Cover]                    [Primary CTA]                 │
│                                              [Secondary CTA]               │
│                                                                            │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

| Element | Spec |
|---------|------|
| Headline | Display size (72px), bold statement |
| Subheadline | Body size, 1-2 lines max |
| Book cover | Large, with depth/shadow |
| Primary CTA | Teal button, purchase link |
| Secondary CTA | Outline button, learn more |

### Value Section

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                          [Section heading]                                 │
│                                                                            │
│     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐               │
│     │   [Icon]    │     │   [Icon]    │     │   [Icon]    │               │
│     │             │     │             │     │             │               │
│     │  [Title]    │     │  [Title]    │     │  [Title]    │               │
│     │  [Desc]     │     │  [Desc]     │     │  [Desc]     │               │
│     └─────────────┘     └─────────────┘     └─────────────┘               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

- 3 value propositions
- Icon + title + short description each
- Cards or clean layout

### Authors Preview

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│     [Photo]              [Photo]                                           │
│                                                                            │
│     [Name]               [Name]                                            │
│     [Credential]         [Credential]                                      │
│                                                                            │
│                     [Link to Authors page]                                 │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

- Professional headshots
- Name + 1-line credential
- Single link to full bios

### Email Capture

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                          [Heading placeholder]                             │
│                          [Description placeholder]                         │
│                                                                            │
│                    ┌─────────────────────┐  ┌─────────┐                   │
│                    │ [Email input]       │  │ Submit  │                   │
│                    └─────────────────────┘  └─────────┘                   │
│                                                                            │
│                          [Privacy note]                                    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

- Simple email input + submit button
- Privacy reassurance text
- Backend connection TBD

### Final CTA

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│                          [Closing statement]                               │
│                                                                            │
│                          [Primary CTA Button]                              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

- Repeat primary action
- Bold closing statement

---

## 2. Book

**Routes:** `/en/book/` | `/es/libro/`

**Purpose:** Full book details for purchase decision.

### Book Header

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│     [Book Cover]                [Title]                                    │
│                                 [Subtitle]                                 │
│                                                                            │
│                                 [Primary CTA]                              │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Description

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Section heading]                                                         │
│                                                                            │
│  [Description paragraph placeholder]                                       │
│  [Description paragraph placeholder]                                       │
│  [Description paragraph placeholder]                                       │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

- 300-500 words
- Compelling, addresses pain points

### Table of Contents

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Section heading]                                                         │
│                                                                            │
│  [Chapter 1 placeholder]                                                   │
│  [Chapter 2 placeholder]                                                   │
│  [Chapter 3 placeholder]                                                   │
│  ...                                                                       │
│                                                                            │
│  [Expand/Collapse if long]                                                 │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Target Audience

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Section heading]                                                         │
│                                                                            │
│  • [Audience 1 placeholder]                                                │
│  • [Audience 2 placeholder]                                                │
│  • [Audience 3 placeholder]                                                │
│  • [Audience 4 placeholder]                                                │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Field | Value |
|-------|-------|
| Format | [TBD] |
| Pages | [TBD] |
| ISBN | [TBD] |
| Publisher | [TBD] |
| Published | [TBD] |

### Purchase CTA

- Links to both editions
- Clear language indicators

---

## 3. Authors

**Routes:** `/en/authors/` | `/es/autores/`

**Purpose:** Establish expertise and credibility.

### Author Section (repeat for each)

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│     [Headshot]                                                             │
│                                                                            │
│     [Name]                                                                 │
│     [Title / Role]                                                         │
│                                                                            │
│     [Bio paragraph placeholder]                                            │
│     [Bio paragraph placeholder]                                            │
│                                                                            │
│     [LinkedIn]  [Twitter]  [Website]                                       │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

| Element | Spec |
|---------|------|
| Photo | Professional headshot, consistent style |
| Name | H2 |
| Title | Subtitle text |
| Bio | 200-300 words, third person |
| Links | Icon buttons, professional networks |

### Authors (Data)

**Jorge Calvo**
- Photo: [TBD]
- Bio: [Placeholder]
- Links: [TBD]

**Carlos Escapa**
- Photo: [TBD]
- Bio: [Placeholder]
- Links: [TBD]

---

## 4. Resources

**Routes:** `/en/resources/` | `/es/recursos/`

**Purpose:** Value exchange, demonstrate expertise.

### Resource Grid

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Page heading]                                                            │
│  [Page description placeholder]                                            │
│                                                                            │
│  ┌──────────────────────┐  ┌──────────────────────┐                       │
│  │                      │  │                      │                       │
│  │  [Resource title]    │  │  [Resource title]    │                       │
│  │  [Description]       │  │  [Description]       │                       │
│  │                      │  │                      │                       │
│  │  [Download CTA]      │  │  [Download CTA]      │                       │
│  │                      │  │                      │                       │
│  └──────────────────────┘  └──────────────────────┘                       │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Planned Resources

| Resource | Format | Status |
|----------|--------|--------|
| Sample chapter | PDF | TBD |
| AI Glossary | PDF | TBD |
| Use cases | PDF | TBD |

### Download Behavior

- Direct download (no gate for now)
- Track analytics events
- Open in new tab

---

## 5. Buy

**Routes:** `/en/buy/` | `/es/comprar/`

**Purpose:** Clear path to purchase.

### Edition Cards

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Page heading]                                                            │
│                                                                            │
│  ┌──────────────────────────┐    ┌──────────────────────────┐             │
│  │                          │    │                          │             │
│  │  [EN Cover]              │    │  [ES Cover]              │             │
│  │                          │    │                          │             │
│  │  English Edition         │    │  Edición Española        │             │
│  │                          │    │                          │             │
│  │  Available on:           │    │  Disponible en:          │             │
│  │  • Amazon (Kindle)       │    │  • Libros de Cabecera    │             │
│  │  • Amazon (Paperback)    │    │                          │             │
│  │                          │    │                          │             │
│  │  [Buy on Amazon →]       │    │  [Comprar →]             │             │
│  │                          │    │                          │             │
│  └──────────────────────────┘    └──────────────────────────┘             │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Purchase Links

| Edition | Retailer | URL |
|---------|----------|-----|
| English | Amazon | https://www.amazon.com/dp/B0FRZBF7C3 |
| Spanish | Libros de Cabecera | https://librosdecabecera.com/la-ia-en-los-negocios/ |

### Link Behavior

- External links open in new tab
- Track outbound clicks
- Clear external link indicator

---

## 6. Privacy

**Routes:** `/en/privacy/` | `/es/privacidad/`

**Purpose:** Legal compliance.

### Content

```
┌────────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│  [Page heading]                                                            │
│  [Last updated: date]                                                      │
│                                                                            │
│  [Privacy policy content placeholder]                                      │
│  [Section placeholder]                                                     │
│  [Section placeholder]                                                     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

- Standard privacy policy
- Generated content, reviewed for accuracy
- Updated date shown

---

## Responsive Behavior

| Page | Mobile Adaptation |
|------|-------------------|
| Welcome | Hero stacks vertically, single prominent CTA |
| Book | Cover above content, TOC collapsible |
| Authors | Full-width photos, stacked bios |
| Resources | Single column cards |
| Buy | Editions stack, full-width CTAs |
| Privacy | Standard text layout |

---

## Shared Elements

### Breadcrumbs

```
Home > Book
```

- All pages except homepage
- Structured data for SEO

### Page Transitions

- Smooth, subtle transitions between pages
- No jarring flashes on theme/language change
