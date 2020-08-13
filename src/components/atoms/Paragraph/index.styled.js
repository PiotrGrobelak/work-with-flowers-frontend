import styled, { css } from 'styled-components';

export const StyledParagraph = styled.p`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeights.bold : theme.fontWeights.light};
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: ${({ center }) => center && 'center'};
  ${({ panelTemplate }) =>
    panelTemplate &&
    css`
      margin: 2rem;
      @media (min-width: ${({ theme }) => theme.responsive.md}) {
        margin: 1rem;
      }
      @media (min-width: ${({ theme }) => theme.responsive.xl}) {
        margin: 0 0 1rem 0;
      }
    `};
`;
