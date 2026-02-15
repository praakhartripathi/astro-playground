import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import SubNavbar from './SubNavbar';

describe('SubNavbar', () => {
  it('should toggle a dropdown menu on click', async () => {
    const user = userEvent.setup();
    render(<SubNavbar />);

    const newYearLink = screen.getByText('NewYear 2026');
    // Dropdown should be closed initially
    expect(screen.queryByText('Planet Transit')).not.toBeInTheDocument();

    // Click to open the dropdown
    await user.click(newYearLink);
    expect(await screen.findByText('Planet Transit')).toBeVisible();

    // Click again to close the dropdown
    await user.click(newYearLink);
    expect(screen.queryByText('Planet Transit')).not.toBeInTheDocument();
  });

  it('should close an open dropdown when clicking outside', async () => {
    const user = userEvent.setup();
    render(<SubNavbar />);

    // Open the dropdown
    await user.click(screen.getByText('NewYear 2026'));
    expect(await screen.findByText('Planet Transit')).toBeVisible();

    // Click outside the component
    await user.click(document.body);
    expect(screen.queryByText('Planet Transit')).not.toBeInTheDocument();
  });

  it('should close an open dropdown when pressing the Escape key', async () => {
    const user = userEvent.setup();
    render(<SubNavbar />);

    // Open the dropdown
    await user.click(screen.getByText('NewYear 2026'));
    expect(await screen.findByText('Planet Transit')).toBeVisible();

    // Press Escape
    await user.keyboard('{Escape}');
    expect(screen.queryByText('Planet Transit')).not.toBeInTheDocument();
  });

  it('should switch between dropdowns on click', async () => {
    const user = userEvent.setup();
    render(<SubNavbar />);

    const newYearLink = screen.getByText('NewYear 2026');
    const panchangLink = screen.getByText('Panchang');

    // Open the first dropdown
    await user.click(newYearLink);
    expect(await screen.findByText('Planet Transit')).toBeVisible();
    expect(screen.queryByText('Todays Panchang')).not.toBeInTheDocument();

    // Click the second dropdown trigger
    await user.click(panchangLink);
    expect(await screen.findByText('Todays Panchang')).toBeVisible();
    expect(screen.queryByText('Planet Transit')).not.toBeInTheDocument();
  });
});