import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './index.styled';

const Button = ({ disabled, ...props }) => {
  return <StyledButton data-testid="button" disabled={disabled} {...props} />;
};

Button.propTypes = {
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
