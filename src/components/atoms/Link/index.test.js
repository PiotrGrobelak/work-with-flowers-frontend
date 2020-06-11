import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { theme } from 'theme/Theme';
import Link from '.';

describe('Link component', () => {
  afterEach(cleanup);
  it('render navLink element with prop "to"', () => {
    const route = '/example-route';
    const { getByTestId } = render(<Link to={route} theme={theme} />, {
      wrapper: MemoryRouter,
    });
    const navLink = getByTestId(/navlink/i);
    expect(navLink).toHaveAttribute('href', '/example-route');
    expect(navLink).toBeInTheDocument();
  });
  it('render anchor element with prop "href"', () => {
    const exapmleLink = 'example-link.com';
    const { getByTestId } = render(<Link href={exapmleLink} theme={theme} />, {
      wrapper: MemoryRouter,
    });
    const anchor = getByTestId(/anchor/i);
    expect(anchor).toHaveAttribute('href', 'example-link.com');
    expect(anchor).toBeInTheDocument();
  });
});
