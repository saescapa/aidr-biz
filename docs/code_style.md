# Code Style Guide

Standards for code formatting and implementation in this project.

---

## Core Principles

### Self-Documenting Code

Code should be clear without requiring comments:

- Use descriptive variable and function names
- Break complex operations into well-named functions
- Structure code to flow logically

```typescript
// Avoid
const x = getData().filter(i => i.a > 5);

// Prefer
const activeUsers = fetchAllUsers().filter(user => user.loginCount > 5);
```

### Comments Policy

Comments are permissible in complex scenarios:

- Algorithm explanations where logic is non-obvious
- Business rule documentation
- API behavior notes
- TODO markers for known limitations

```typescript
// Complex scenarios warrant comments
// Binary search requires sorted array - sorting happens in fetchProducts()
function findProductByPrice(products: Product[], targetPrice: number): Product | null {
  // implementation
}
```

Avoid comments that restate the obvious:

```typescript
// Avoid
const total = sum(prices); // calculates total

// Prefer
const orderTotal = calculateOrderTotal(lineItemPrices);
```

---

## TypeScript Standards

### Type Safety

- Never use `any` type
- Define explicit types for function parameters and returns
- Use interfaces for object shapes
- Prefer `unknown` over `any` when type is truly unknown

```typescript
// Define interfaces
interface BookData {
  title: string;
  authors: string[];
  isbn: string;
  publishedDate: Date;
}

// Explicit return types
function getBookMetadata(slug: string): BookData | null {
  // implementation
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Variables | camelCase | `userName`, `bookTitle` |
| Constants | UPPER_SNAKE | `MAX_RETRIES`, `API_BASE_URL` |
| Functions | camelCase | `fetchAuthors`, `calculatePrice` |
| Types/Interfaces | PascalCase | `BookData`, `AuthorProfile` |
| Files (components) | PascalCase | `Header.astro`, `BookCard.astro` |
| Files (utilities) | camelCase | `formatDate.ts`, `i18n.ts` |

### Acronyms

Use uppercase for acronyms, including in camelCase:

```typescript
// Correct
const userID = '123';
const apiURL = 'https://...';
const htmlContent = '<div>...</div>';

// Incorrect
const userId = '123';
const apiUrl = 'https://...';
```

---

## Astro Specifics

### Component Structure

```astro
---
// 1. Imports
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';

// 2. Props interface
interface Props {
  title: string;
  description?: string;
}

// 3. Props destructuring
const { title, description = 'Default description' } = Astro.props;

// 4. Data fetching / logic
const posts = await getCollection('blog');
---

<!-- 5. Template -->
<Layout title={title}>
  <main>
    <h1>{title}</h1>
  </main>
</Layout>

<!-- 6. Styles (scoped by default) -->
<style>
  main {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
```

### File Organization

```
src/
├── components/     # Reusable UI components
│   ├── Header.astro
│   ├── Footer.astro
│   └── BookCard.astro
├── layouts/        # Page layouts
│   └── Layout.astro
├── pages/          # Route pages
│   ├── en/         # English pages
│   └── es/         # Spanish pages
├── content/        # Content collections
├── styles/         # Global styles, theme
└── utils/          # Utility functions
    └── i18n.ts
```

---

## Formatting

### General Rules

- 2-space indentation
- No trailing whitespace
- Single quotes for strings
- Semicolons required
- Max line length: 100 characters

### Imports Order

```typescript
// 1. Astro imports
import { getCollection } from 'astro:content';

// 2. External packages
import { format } from 'date-fns';

// 3. Internal absolute imports
import Layout from '../layouts/Layout.astro';
import { SITE_TITLE } from '../consts';

// 4. Relative imports
import './styles.css';
```

---

## Error Handling

### Graceful Degradation

```typescript
// Handle potential failures
async function fetchBookData(isbn: string): Promise<BookData | null> {
  try {
    const response = await fetch(`/api/books/${isbn}`);
    if (!response.ok) {
      console.error(`Failed to fetch book ${isbn}: ${response.status}`);
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching book ${isbn}:`, error);
    return null;
  }
}
```

### Logging

Use console methods appropriately:

- `console.error()` - Errors requiring attention
- `console.warn()` - Potential issues, deprecations
- `console.info()` - Important operational info
- `console.debug()` - Development debugging (remove before commit)

---

## Performance Considerations

### Static Generation

- Prefer static content over client-side rendering
- Use Astro's partial hydration (`client:*` directives) sparingly
- Optimize images with `astro:assets`

### Bundle Size

- Import only what you need from packages
- Avoid large runtime JavaScript dependencies
- Leverage Astro's zero-JS-by-default approach
