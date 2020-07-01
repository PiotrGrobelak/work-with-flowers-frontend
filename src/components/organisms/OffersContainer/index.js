import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOffers as getAllOffersAction } from 'redux/actions/offerActions';
import TemplateImage from 'assets/image/among_nature.svg';
import OfferCard from 'components/molecules/OfferCard';
import Image from 'components/atoms/Image';
import { StyledWrapper, StyledList } from './index.styled';

const OffersContainer = ({ offers, getAllOffers }) => {
  useEffect(() => {
    if (!offers.length) getAllOffers();
  }, [getAllOffers, offers]);
  return (
    <StyledWrapper>
      <StyledList>
        {offers
          .map((offer) => {
            return <OfferCard key={offer._id} offer={offer} />;
          })
          .reverse()}
      </StyledList>
      <Image
        src={TemplateImage}
        direction="right"
        alt="wśród natury"
        width={35}
        height={35}
      />
    </StyledWrapper>
  );
};

OffersContainer.propTypes = {
  getAllOffers: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }),
  ),
};

OffersContainer.defaultProps = {
  offers: [],
};

const mapStateToProps = (state) => {
  const { offers } = state.offerReducer;
  return { offers };
};

const mapDispatchToProps = (dispatch) => ({
  getAllOffers: () => dispatch(getAllOffersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);
