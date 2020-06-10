import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOffers } from 'actions';
import styled from 'styled-components';
import OfferCard from 'components/molecules/OfferCard';

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
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <StyledWrapper>
      <StyledList>
        {offers.map((offer) => {
          return <OfferCard key={offer._id} offer={offer} />;
        })}
        {offers.map((offer) => {
          return <OfferCard key={offer._id} offer={offer} />;
        })}
        {offers.map((offer) => {
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
