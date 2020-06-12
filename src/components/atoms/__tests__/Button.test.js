import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Button from '../Button';

const renderButton = (props) => {
  const utils = render(<Button theme={theme} {...props} />);
  const button = utils.getByTestId('button');

  return { ...utils, button };
};

describe('Button component', () => {
  afterEach(cleanup);
  it('render button element', () => {
    const { button } = renderButton();

    expect(button).toBeInTheDocument();
  });
  it('default is not disabled', () => {
    const { button } = renderButton();

    expect(button).not.toBeDisabled();
  });
  it('disabled if isSubmitting', () => {
    const { button } = renderButton();

    fireEvent.submit(button, { target: { disabled: true } });
    expect(button).toBeDisabled();
  });
  it('background is grey if disabled', () => {
    const { button, rerender } = renderButton();

    rerender(<Button disabled theme={theme} />);
    expect(button).toHaveStyleRule('background-color', theme.colors.primaryGrey);
  });
});
