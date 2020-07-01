import styled from 'styled-components';
import { scrollBar } from 'theme/mixins';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 1rem 1rem 0;
  overflow-y: scroll;
  height: calc(100vh - 13.3rem);
  max-width: 100rem;
  list-style: none;
  ${scrollBar}
  z-index: 1;
`;
