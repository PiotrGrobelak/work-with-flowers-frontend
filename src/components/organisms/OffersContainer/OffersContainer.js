import React from 'react';
import styled from 'styled-components';
import OfferCard from 'components/molecules/OfferCard/OfferCard';

const StyledWrapper = styled.div`
  /* max-height: 100%; */
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const StyledList = styled.ul`
  overflow-y: scroll;
  height: calc(100vh - 200px);
  width: 1000px;
  list-style: none;
`;

const OffersContainer = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </StyledList>
    </StyledWrapper>
  );
};

export default OffersContainer;
