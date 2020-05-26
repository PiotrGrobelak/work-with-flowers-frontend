import styled, { css } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.8px;
  text-decoration: none;
  ${({ primary }) =>
    primary &&
    css`
      padding: 10px;
      height: 80px;
      min-width: 120px;
      border: none;
      color: ${({ theme }) => theme.colors.priamryBlack};
    `};
`;

export default Button;
