import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Label from '../Label';

describe('Label component', () => {
  afterEach(cleanup);
  it('render content', () => {
    const text = 'render content';
    const { getByText } = render(<Label theme={theme}>{text}</Label>);
    expect(getByText(/render content/i)).toBeInTheDocument();
  });
  it('render htmlFor attribute', () => {
    const username = 'name';
    const { getByTestId } = render(
      <Label theme={theme} htmlFor={username}>
        {username}
      </Label>,
    );
    const label = getByTestId(/label/i);
    expect(label).toHaveAttribute('for', 'name');
  });
});
