import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Select from '../Select';

const renderSelect = ({ id, name, onChange, onBlur, value }) => {
  const utils = render(
    <Select
      theme={theme}
      id={id}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    >
      <option data-testid="option" value="" disabled hidden>
        Kandydat/Pracodawaca
      </option>
      <option data-testid="option" value="employer">
        Pracodawaca
      </option>
      <option data-testid="option" value="employee">
        Kandydat
      </option>
    </Select>,
  );
  const select = utils.getByTestId(/select/i);
  const option = utils.getAllByTestId(/option/i);
  return { ...utils, select, option };
};

const props = {
  id: 'role',
  name: 'role',
  onChange: () => {},
  onBlur: () => {},
  value: '',
};

describe('Select component', () => {
  afterEach(cleanup);
  it('render options', () => {
    const { select, option } = renderSelect(props);
    expect(select).toBeInTheDocument();
    expect(option[0]).toBeInTheDocument();
    expect(option[1]).toBeInTheDocument();
    expect(option[2]).toBeInTheDocument();
  });
  it('have id and name attribute', async () => {
    const { select } = renderSelect(props);
    expect(select).toHaveAttribute('id');
    expect(select).toHaveAttribute('name');
  });
  it('default value is empty string', async () => {
    const { select } = renderSelect(props);
    expect(select).toHaveValue('');
  });
  it('pick employer or employee option', () => {
    const { select } = renderSelect(props);
    fireEvent.click(select, { target: { value: 'employer' } });
    expect(select).toHaveValue('employer');
    fireEvent.click(select, { target: { value: 'employee' } });
    expect(select).toHaveValue('employee');
  });
});
