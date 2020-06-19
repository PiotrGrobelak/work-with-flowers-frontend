import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const styles = css`
  padding: 10px;
  height: 50px;
  width: 200px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryWhite};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.2);
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
