import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Button from '.';

describe('Button component', () => {
  it('should render button element', () => {
    const { getByTestId } = render(<Button theme={theme} />);
    expect(getByTestId('button')).toBeInTheDocument();
  });
  it('should default is not disabled', () => {
    const { getByTestId } = render(<Button theme={theme} />);
    expect(getByTestId('button')).not.toBeDisabled();
  });
  it('should disabled if isSubmitting', () => {
    const { getByTestId } = render(<Button theme={theme} />);
    fireEvent.submit(getByTestId('button'), { target: { disabled: true } });
    expect(getByTestId('button')).toBeDisabled();
  });
});
