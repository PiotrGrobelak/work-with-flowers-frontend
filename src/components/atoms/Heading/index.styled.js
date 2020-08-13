import styled, { css } from 'styled-components';

export const StyledHeading = styled.h1`
  margin: 2rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  ${({ panelTemplate }) =>
    panelTemplate &&
    css`
      margin: 1rem;
      @media (min-width: ${({ theme }) => theme.responsive.xl}) {
        margin: 0 0 1rem 0;
      }
    `};
`;
