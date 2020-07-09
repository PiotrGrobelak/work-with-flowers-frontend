import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './index.styled';

const Input = ({ id, name, onChange, onBlur, type, ...props }) => (
  <StyledInput
    data-testid="input"
    id={id}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    type={type}
    {...props}
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
