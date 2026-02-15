import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from './Navbar';

// Mock the resources used to build the language list
vi.mock('../resources', () => ({
  resources: {
    en: { translation: { appName: 'ASTRO Playground' } },
    hi: { translation: { appName: 'एस्ट्रो प्लेग्राउंड' } },
  },
}));

// Mock react-i18next and capture the changeLanguage function
const mockChangeLanguage = vi.fn();
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: mockChangeLanguage,
      language: 'en',
    },
  }),
}));

describe('Navbar', () => {
  beforeEach(() => {
    // Reset mocks before each test to ensure isolation
    mockChangeLanguage.mockClear();
  });

  it('should open, select a language, and close the language dropdown', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    // There are two language selectors (mobile and desktop). We'll test the desktop one,
    // which is the second one in the DOM and does not require opening the mobile menu.
    const langButtons = screen.getAllByLabelText('Select Language');
    const desktopLangButton = langButtons[1];

    // Dropdown should be closed initially
    expect(screen.queryByText('हिन्दी')).not.toBeInTheDocument();

    // Click to open the dropdown and find the 'हिन्दी' option
    await user.click(desktopLangButton);
    const hindiOption = await screen.findByText('हिन्दी');
    await user.click(hindiOption);

    // Assert that the language change was requested and the dropdown closed
    expect(mockChangeLanguage).toHaveBeenCalledWith('hi');
    expect(screen.queryByText('हिन्दी')).not.toBeInTheDocument();
  });

  describe('Notification Dropdown', () => {
    it('should toggle the dropdown on click', async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      const notifButtons = screen.getAllByLabelText('Notifications');
      const desktopNotifButton = notifButtons[1];

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      await user.click(desktopNotifButton);
      expect(await screen.findByRole('menu')).toBeVisible();
      expect(screen.getByText('Transactional')).toBeInTheDocument();

      await user.click(desktopNotifButton);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should close dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      const notifButtons = screen.getAllByLabelText('Notifications');
      await user.click(notifButtons[1]);
      expect(await screen.findByRole('menu')).toBeVisible();

      await user.click(document.body);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should close dropdown when pressing Escape', async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      const notifButtons = screen.getAllByLabelText('Notifications');
      await user.click(notifButtons[1]);
      expect(await screen.findByRole('menu')).toBeVisible();

      await user.keyboard('{Escape}');
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });
});
