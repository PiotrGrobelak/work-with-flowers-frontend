import styled from 'styled-components';
import { primaryBoxModel } from 'theme/mixins';

export const StyledWrapper = styled.main`
  margin-top: 4rem;
  grid-column: 3 / 3;
  grid-row: 2/2;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-top: 0;
    align-items: flex-start;
    padding-right: 1rem;
  }
`;

export const OffersList = styled.ol`
  padding: 1rem;
  width: 100%;
  max-width: 140rem;

  ${primaryBoxModel};
  list-style: none;
`;
