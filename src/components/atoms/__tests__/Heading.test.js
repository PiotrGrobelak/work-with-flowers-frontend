import React from 'react';
import { render } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Heading from '../Heading';

describe('Heading component', () => {
  it('render content', () => {
    const text = 'render content';
    const { getByText } = render(<Heading theme={theme}>{text}</Heading>);
    expect(getByText(/render content/i)).toBeInTheDocument();
  });
});
