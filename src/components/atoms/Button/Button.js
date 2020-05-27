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
  border: none;
  outline: none;
  ${({ primary }) =>
    primary &&
    css`
      padding: 10px;
      height: 80px;
      min-width: 120px;
      border: none;
      color: ${({ theme }) => theme.colors.primaryBlack};
      transition: background-color 0.3s ease-in-out;
      :hover {
        background-color: ${({ theme }) => theme.colors.secondaryGrey};
      }
    `};
  ${({ secondary }) =>
    secondary &&
    css`
      padding: 10px;
      height: 50px;
      min-width: 200px;
      border: none;
      border-radius: 25px;
      color: ${({ theme }) => theme.colors.primaryWhite};
      background-color: ${({ theme }) => theme.colors.secondaryBlue};
      transition: box-shadow 0.3s ease-in-out;
      :hover {
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
      }
    `};
`;

export default Button;
