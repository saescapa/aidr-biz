// Site configuration
export const SITE_TITLE_EN = 'The AI-driven Business';
export const SITE_TITLE_ES = 'La IA en los Negocios';

export const SITE_DESCRIPTION_EN = "Learn how to lead AI transformation with 60+ case studies and 5 proven frameworks from executives who've trained 1,400+ leaders.";
export const SITE_DESCRIPTION_ES = 'Aprende a liderar la transformación con IA con más de 60 casos de estudio y 5 frameworks probados de ejecutivos que han formado a más de 1.400 líderes.';

// Purchase links
export const PURCHASE_LINKS = {
  en: 'https://www.amazon.com/dp/B0FRZBF7C3',
  es: 'https://librosdecabecera.com/la-ia-en-los-negocios/',
} as const;

// Authors
export const AUTHORS = ['Jorge Calvo', 'Carlos Escapa'] as const;

// Supported languages
export const LANGUAGES = ['en', 'es'] as const;
export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'en';

// Base URL from Astro config (handles GitHub Pages subpath)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

// Route mapping for language switching
export const ROUTES = {
  home: { en: `${BASE}/en/`, es: `${BASE}/es/` },
  book: { en: `${BASE}/en/book/`, es: `${BASE}/es/libro/` },
  authors: { en: `${BASE}/en/authors/`, es: `${BASE}/es/autores/` },
  resources: { en: `${BASE}/en/resources/`, es: `${BASE}/es/recursos/` },
  buy: { en: `${BASE}/en/buy/`, es: `${BASE}/es/comprar/` },
};

export type RouteKey = keyof typeof ROUTES;

// Get alternate language route for any given path
export function getAlternateRoute(currentPath: string, targetLang: Language): string {
  for (const [, routes] of Object.entries(ROUTES)) {
    if (routes.en === currentPath || routes.es === currentPath) {
      return routes[targetLang];
    }
  }
  // Fallback to homepage
  return ROUTES.home[targetLang];
}
