import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock react-i18next to prevent errors in components that use useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: 'en',
    },
  }),
}));

describe('App', () => {
  it('renders the Navbar and SubNavbar', () => {
    render(<App />);
    // Check for an element from Navbar (e.g., the app name, which uses t('appName'))
    expect(screen.getByText('appName')).toBeInTheDocument();
    // Check for an element from SubNavbar (e.g., 'Home' link)
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});