import { createTheme } from 'pte';

// English Light Theme (Blue background)
export const EnglishLightTheme = createTheme({
  themeName: 'en-light',
  colors: {
    bgPrimary: '#A8D5E5',
    bgSecondary: '#F5EDE0',
    accentPrimary: '#3AAFAF',
    accentSecondary: '#D94744',
    accentTertiary: '#F2C94C',
    textPrimary: '#1A2E44',
    textSecondary: '#3D5A73',
    textInverse: '#FFFFFF',
  },
});

// Spanish Light Theme (Cream background)
export const SpanishLightTheme = createTheme({
  themeName: 'es-light',
  colors: {
    bgPrimary: '#F5EDE0',
    bgSecondary: '#A8D5E5',
    accentPrimary: '#3AAFAF',
    accentSecondary: '#D94744',
    accentTertiary: '#F2C94C',
    textPrimary: '#1A2E44',
    textSecondary: '#3D5A73',
    textInverse: '#FFFFFF',
  },
});

// Dark Theme (shared)
export const DarkTheme = createTheme({
  themeName: 'dark',
  colors: {
    bgPrimary: '#0F1419',
    bgSecondary: '#1A2E44',
    accentPrimary: '#4ECDC4',
    accentSecondary: '#FF6B6B',
    accentTertiary: '#FFE66D',
    textPrimary: '#F5F5F5',
    textSecondary: '#A0AEC0',
    textInverse: '#0F1419',
  },
});

// Legacy exports for compatibility
export const LightTheme = EnglishLightTheme;
