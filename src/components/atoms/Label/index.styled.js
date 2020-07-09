import styled from 'styled-components';

export const StyledLabel = styled.label`
  margin: 0.5rem 0 0.5rem 0;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.7px;
`;
