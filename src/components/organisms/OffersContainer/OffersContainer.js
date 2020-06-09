import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOffers } from 'actions';
import styled from 'styled-components';
import OfferCard from 'components/molecules/OfferCard/OfferCard';

const StyledWrapper = styled.div`
  height: calc(100vh - 133px);
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 1rem 1rem 0;
  overflow-y: scroll;
  height: calc(100vh - 133px);
  width: 50vw;
  list-style: none;
`;

const OffersContainer = ({ offers, getRequest }) => {
  const [offerList, setOfferList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getList = useCallback(async () => {
    if (isLoading) {
      await getRequest();
      setOfferList(offers);
      setIsLoading(false);
    }
  }, [offers, getRequest, isLoading]);

  useEffect(() => {
    getList();
  }, [getList]);
  return (
    <StyledWrapper>
      <StyledList>
        {offerList.map((offer) => {
          return <OfferCard key={offer._id} offer={offer} />;
        })}
        {offerList.map((offer) => {
          return <OfferCard key={offer._id} offer={offer} />;
        })}
        {offerList.map((offer) => {
          return <OfferCard key={offer._id} offer={offer} />;
        })}
      </StyledList>
    </StyledWrapper>
  );
};

OffersContainer.propTypes = {
  getRequest: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }),
  ),
};

OffersContainer.defaultProps = {
  offers: [],
};

const mapStateToProps = ({ offers }) => {
  return { offers };
};

const mapDispatchToProps = (dispatch) => ({
  getRequest: () => dispatch(getAllOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);
