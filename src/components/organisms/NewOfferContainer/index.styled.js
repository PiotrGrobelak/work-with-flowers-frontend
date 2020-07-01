import styled from 'styled-components';
import Heading from 'components/atoms/Heading';

export const StyledWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 2/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const StyledHeading = styled(Heading)`
  margin: 0;
`;
