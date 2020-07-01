import styled, { css } from 'styled-components';

const styles = css`
  height: 3rem;
  width: 12rem;
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
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding: 1rem;
    height: 5rem;
    width: 20rem;
  }
`;

export const StyledButton = styled.button`
  ${styles}
`;
