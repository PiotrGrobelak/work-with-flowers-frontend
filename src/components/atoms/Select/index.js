import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './index.styled';

const Select = ({
  children,
  icon,
  id,
  name,
  onChange,
  onBlur,
  value,
  ...props
}) => (
  <StyledSelect
    data-testid="select"
    id={id}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    icon={icon}
    {...props}
  >
    {children}
  </StyledSelect>
);

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string,
  icon: PropTypes.string,
};

Select.defaultProps = {
  icon: undefined,
  value: '',
};

export default Select;
