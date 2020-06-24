import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme, bold }) => bold && theme.fontWeights.bold};
`;

export default Paragraph;
