import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOffers } from 'actions';
import styled from 'styled-components';
import { scrollBar } from 'theme/mixins';
import TemplateImage from 'assets/image/among_nature.svg';
import OfferCard from 'components/molecules/OfferCard';
import Image from 'components/atoms/Image';

const StyledWrapper = styled.div`
  position: relative;
  height: calc(100vh - 133px);
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 1rem 1rem 0;
  overflow-y: scroll;
  height: calc(100vh - 133px);
  width: 50vw;
  list-style: none;
  ${scrollBar}
  z-index: 1;
`;

const OffersContainer = ({ offers, getRequest }) => {
  useEffect(() => {
    if (!offers.length) getRequest();
  }, [getRequest, offers]);
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
        width={350}
        height={350}
      />
    </StyledWrapper>
  );
};

OffersContainer.propTypes = {
  getRequest: PropTypes.func.isRequired,
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

const mapStateToProps = ({ offers }) => {
  return { offers };
};

const mapDispatchToProps = (dispatch) => ({
  getRequest: () => dispatch(getAllOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);
