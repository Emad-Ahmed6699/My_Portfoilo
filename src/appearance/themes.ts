import { Themes } from 'types';

// Enhance contrast by using white and black text with reduced opacity over
// colored backgrounds instead of gray.
// https://m2.material.io/design/color/text-legibility.html#text-backgrounds
export const themes: Themes = {
  dark: {
    key: 'dark',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#f0f4f8',
    tertiaryTextColor: '#b0bec5',
    background: '#0a0e27',
    shadowColor: '#1a1f3a',
  },
  light: {
    key: 'light',
    primaryTextColor: '#1a202c',
    secondaryTextColor: '#2d3748',
    tertiaryTextColor: '#718096',
    background: '#f8fafc',
    shadowColor: '#edf2f7',
  },
};
