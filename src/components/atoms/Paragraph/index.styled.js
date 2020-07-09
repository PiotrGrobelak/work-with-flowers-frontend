import styled from 'styled-components';

export const StyledParagraph = styled.p`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme, bold }) =>
    bold ? theme.fontWeights.bold : theme.fontWeights.light};
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: ${({ center }) => center && 'center'};
`;
