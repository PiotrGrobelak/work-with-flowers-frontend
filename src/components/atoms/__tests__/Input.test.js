import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Input from '../Input';

const renderInput = ({ id, name, type, onChange, onBlur, ...props }) => {
  const utils = render(
    <Input
      theme={theme}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />,
  );
  const input = utils.getByTestId(/input/i);
  return { ...utils, input };
};

const props = {
  id: 'username',
  name: 'username',
  type: 'text',
  onChange: () => {},
  onBlur: () => {},
};

describe('Input component', () => {
  it('render with props', () => {
    const { input } = renderInput(props);
    expect(input).toBeInTheDocument();
  });
  it('have id, name, type attribute', () => {
    const { input } = renderInput(props);
    expect(input).toHaveAttribute('id', 'username');
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toHaveAttribute('type', 'text');
  });
  it('default value is empty string', () => {
    const { input } = renderInput(props);
    expect(input).toHaveValue('');
  });
  it('set value by event', () => {
    const { input } = renderInput(props);
    fireEvent.change(input, {
      target: { value: 'someText' },
    });
    expect(input).toHaveValue('someText');
    fireEvent.change(input, {
      target: { value: 'otherText' },
    });
    expect(input).toHaveValue('otherText');
  });
});
