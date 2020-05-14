import styled from 'styled-components';

const Label = styled.label`
  margin: 0.5rem 0 0.5rem 0.5rem;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export default Label;
