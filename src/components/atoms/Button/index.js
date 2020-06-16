import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const styles = css`
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.8px;
  text-decoration: none;
  border: none;
  outline: none;
  padding: 10px;
  height: 50px;
  width: 200px;
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.primaryWhite};
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.primaryBlack};
      background-color: ${({ theme }) => theme.colors.primaryGrey};
    `}
`;

const StyledButton = styled.button`
  ${styles}
`;

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
