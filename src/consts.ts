// Site configuration
export const SITE_TITLE_EN = 'The AI-driven Business';
export const SITE_TITLE_ES = 'La IA en los Negocios';

export const SITE_DESCRIPTION_EN = 'Leading, Competing, and Thriving in the Age of Artificial Intelligence';
export const SITE_DESCRIPTION_ES = 'Liderando, compitiendo y prosperando en la era de la inteligencia artificial';

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
