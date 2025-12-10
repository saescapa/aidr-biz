# Page Specifications

Detailed breakdown of each page with intended purposes and UI components.

---

## 1. Welcome Page (Homepage)

**Routes:** `/en/` | `/es/`

**Purpose:** Capture attention, communicate value, drive to purchase within 10-15 seconds.

### Sections

#### Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [Book Cover Image]                       │
│                                                             │
│              [Book Title]                                   │
│              [Subtitle/tagline placeholder]                 │
│                                                             │
│         [Primary CTA]    [Secondary CTA]                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|---------------|
| Book cover | High-res image, min 1500px wide |
| Headline | Book title, large and prominent |
| Subheadline | Value proposition, <100 words |
| CTAs | Primary buttons to purchase pages |

#### Key Highlights

3-5 bullet points (content TBD):

- [Highlight 1 placeholder]
- [Highlight 2 placeholder]
- [Highlight 3 placeholder]

#### Author Preview

```
┌───────────────────────┐  ┌───────────────────────┐
│    [Author 1 Photo]   │  │    [Author 2 Photo]   │
│                       │  │                       │
│    Name               │  │    Name               │
│    Brief credential   │  │    Brief credential   │
│                       │  │                       │
│    [Read More →]      │  │    [Read More →]      │
└───────────────────────┘  └───────────────────────┘
```

- Professional headshots
- 1-2 line credentials
- Links to full author pages

#### Testimonials (When Available)

- Featured endorsements or reviews
- Attribution with credibility markers
- Carousel or grid display

#### Final CTA

- Repeat primary call to action
- Newsletter signup (optional)

---

## 2. Book Page

**Routes:** `/en/book/` | `/es/libro/`

**Purpose:** Provide comprehensive book information for informed purchase decision.

### Sections

#### Book Description

- Full description (300-500 words)
- Written compellingly, not just factual
- Addresses target audience pain points

#### Table of Contents

```
[Table of contents placeholder]
[Actual TOC will be provided by client]
```

- Collapsible/expandable for length
- Demonstrates depth and coverage

#### Target Audience

Clear list of who benefits (content TBD):

- [Target audience 1]
- [Target audience 2]
- [Target audience 3]
- [Target audience 4]

#### Book Specifications

| Spec | Value |
|------|-------|
| Format | [TBD] |
| Pages | [TBD] |
| ISBN | [TBD] |
| Published | [TBD] |
| Publisher | [TBD] |

#### Sample Preview

"Look Inside" feature or sample pages:

- Embed PDF viewer for sample chapter
- Or link to Resources page for download
- Multiple pages, not just cover

#### Purchase CTA

- Links to both editions
- Clear language for each

---

## 3. Authors Page

**Routes:** `/en/authors/` | `/es/autores/`

**Purpose:** Establish credibility and expertise of both authors.

### Combined or Separate

Can be single page with both authors, or individual pages. Recommendation: single page with anchor links.

### Per-Author Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Professional Headshot]                                    │
│                                                             │
│  Author Name                                                │
│  Title / Current Role                                       │
│                                                             │
│  Bio (200-300 words)                                        │
│  - Background and experience                                │
│  - AI/business expertise                                    │
│  - Notable achievements                                     │
│  - Current work                                             │
│                                                             │
│  [LinkedIn]  [Twitter]  [Website]                          │
│                                                             │
│  Other Books (if applicable)                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Elements

| Element | Specification |
|---------|---------------|
| Photo | Professional headshot, consistent style both authors |
| Bio | 200-300 words, third person |
| Credentials | Specific, verifiable achievements |
| Social links | Professional networks only |
| Other books | Placeholder for future publications |

---

## 4. Resources Page

**Routes:** `/en/resources/` | `/es/recursos/`

**Purpose:** Provide valuable free content to engage visitors and demonstrate expertise.

### Available Downloads

#### Sample Chapters

```
┌─────────────────────────────────────────────────────────────┐
│  [Resource Title]                                           │
│                                                             │
│  [Resource description placeholder]                         │
│                                                             │
│  [Download CTA]                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

Resources to be offered (TBD):
- Sample chapters
- AI Glossary
- Use cases
- Other materials as determined by client

### Download Tracking

Track download numbers for analytics:

- Total downloads per resource
- Optional: Display counts for social proof
- Analytics event on each download

### Email Capture (Optional)

- Gate high-value downloads behind email
- Or offer ungated with newsletter opt-in

---

## 5. Where to Buy Page

**Routes:** `/en/buy/` | `/es/comprar/`

**Purpose:** Remove friction from purchase decision.

### Purchase Options

```
┌──────────────────────────────┐  ┌──────────────────────────────┐
│                              │  │                              │
│  English Edition             │  │  Spanish Edition             │
│                              │  │                              │
│  [Book Cover EN]             │  │  [Book Cover ES]             │
│                              │  │                              │
│  Available on Amazon         │  │  Available on Libros de      │
│                              │  │  Cabecera                    │
│  Formats:                    │  │                              │
│  • Kindle                    │  │  Formats:                    │
│  • Paperback                 │  │  • Print                     │
│                              │  │  • Digital                   │
│                              │  │                              │
│  [Buy on Amazon →]           │  │  [Comprar →]                 │
│                              │  │                              │
└──────────────────────────────┘  └──────────────────────────────┘
```

### Information to Include

- Available formats (Kindle, paperback, hardcover)
- Price indicators (or note prices on retailer sites)
- Countries/regions where available
- Expected delivery information (optional)

### External Links

- Clear indication links go to external sites
- Open in new tab
- Track outbound clicks

---

## 6. Legal Pages

**Routes:** `/en/privacy/` | `/es/privacidad/`

**Purpose:** Compliance and transparency.

### Privacy Policy

Standard privacy policy covering:

- Data collection practices
- Cookie usage
- Third-party services (analytics, etc.)
- User rights
- Contact information

### Cookie Policy

If cookies are used:

- Types of cookies
- Purpose of each
- How to manage/opt-out

### GDPR Compliance

- Avoid banner if possible (minimal cookie usage)
- If banner needed, implement proper consent flow
- Clear opt-out mechanism

### Content Approach

- Use AI-generated draft as starting point
- Review for accuracy
- Keep language accessible, not overly legal

---

## Shared Components Across Pages

### Breadcrumbs

```
Home > Book
```

- Show on all pages except homepage
- Structured data for SEO

### Related Content

At bottom of pages, suggest:

- Related pages on site
- Related downloads
- Purchase CTA

### Social Sharing

- Share buttons on relevant pages (Book, Authors)
- Pre-populated share text
- Proper Open Graph tags for previews

---

## Responsive Behavior Summary

| Page | Mobile Adaptations |
|------|-------------------|
| Welcome | Hero stacks, single CTA prominent |
| Book | TOC collapsible, specs in list format |
| Authors | Photos smaller, bios full width |
| Resources | Download cards stack vertically |
| Buy | Editions stack, CTAs full width |
| Legal | Standard text layout |
