import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './index.styled';

const Label = ({ children, ...props }) => (
  <StyledLabel data-testid="label" {...props}>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
