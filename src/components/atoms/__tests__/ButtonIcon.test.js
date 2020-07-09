import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { theme } from 'theme/Theme';
import exampleIcon from 'assets/icons/Courier.svg';
import ButtonIcon from '../ButtonIcon';

const renderButtonIcon = (props) => {
  const utils = render(<ButtonIcon theme={theme} {...props} />);
  const buttonIcon = utils.getByTestId('buttonIcon');
  return { ...utils, buttonIcon };
};

describe('ButtonIcon component', () => {
  afterEach(cleanup);
  it('render buttonIcon element', () => {
    const { buttonIcon } = renderButtonIcon();
    expect(buttonIcon).toBeInTheDocument();
  });
  it('render buttonIcon element with Icon', () => {
    const { rerender } = renderButtonIcon();
    rerender(<ButtonIcon icon={exampleIcon} theme={theme} />);
    expect(exampleIcon).toBe('Courier.svg');
  });
  it('default is width/height without "small" prop', () => {
    const { buttonIcon } = renderButtonIcon();
    expect(buttonIcon).toHaveStyleRule('width', '3.5rem');
    expect(buttonIcon).toHaveStyleRule('height', '3.5rem');
  });
  it('width/height with "small" prop', () => {
    const { rerender, buttonIcon } = renderButtonIcon();
    rerender(<ButtonIcon small theme={theme} />);
    expect(buttonIcon).toHaveStyleRule('width', '2.4rem');
    expect(buttonIcon).toHaveStyleRule('height', '2.4rem');
  });
  it('with the aria-label', () => {
    const { rerender, getByLabelText } = renderButtonIcon();
    rerender(<ButtonIcon aria-label="test" theme={theme} />);
    expect(getByLabelText('test')).toBeInTheDocument();
  });
  it('with select the value', () => {
    const { buttonIcon } = renderButtonIcon();
    const value = 'courier';
    fireEvent.click(buttonIcon, { target: { value } });
    expect(buttonIcon).toHaveValue('courier');
  });
});
