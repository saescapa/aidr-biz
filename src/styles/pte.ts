import { createTheme } from 'pte';

export const LightTheme = createTheme({
    themeName: 'light',
    colors: {
        primary: '#000',
        secondary: '#fff',
    },
});

export const DarkTheme = createTheme({
    themeName: 'dark',
    colors: {
        primary: '#fff',
        secondary: '#000',
    },
});