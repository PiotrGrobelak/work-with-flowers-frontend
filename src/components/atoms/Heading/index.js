import styled from 'styled-components';

const Heading = styled.h1`
  margin: 2rem 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export default Heading;
