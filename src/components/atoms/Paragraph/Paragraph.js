import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export default Paragraph;
