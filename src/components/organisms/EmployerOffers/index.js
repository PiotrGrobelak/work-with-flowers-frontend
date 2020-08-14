import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EmployerOfferCard from 'components/molecules/EmployerOfferCard';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { StyledWrapper, OffersList } from './index.styled';

const EmployerOffers = ({ getEmployerOffers, employerOffers }) => {
  useEffect(() => {
    if (!employerOffers.length) getEmployerOffers();
  }, [getEmployerOffers, employerOffers]);

  return (
    <StyledWrapper>
      <Heading panelTemplate>Twoje aktualne oferty</Heading>
      <Paragraph panelTemplate>
        Edytuj lub usuwaj swoje oferty.
        <br />
        <small>*panel w trakcie budowy</small>
      </Paragraph>
      <OffersList>
        {employerOffers
          .map((offer) => {
            return <EmployerOfferCard key={offer._id} offer={offer} />;
          })
          .reverse()}
      </OffersList>
    </StyledWrapper>
  );
};

EmployerOffers.propTypes = {
  getEmployerOffers: PropTypes.func.isRequired,
  employerOffers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }),
  ),
};

EmployerOffers.defaultProps = {
  employerOffers: [],
};

export default EmployerOffers;
