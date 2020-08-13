import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { StyledWrapper, InnerWrapper } from './index.styled';

const EmployerOffers = ({ getEmployerOffers, employerOffers }) => {
  console.log(employerOffers);
  useEffect(() => {
    if (!employerOffers.length) getEmployerOffers();
  }, [getEmployerOffers, employerOffers]);

  return (
    <StyledWrapper>
      <Heading panelTemplate>Twoje aktualne oferty</Heading>
      <Paragraph panelTemplate>Hello Again App</Paragraph>
      <InnerWrapper>
        {employerOffers.map((offer) => {
          return (
            <div key={offer._id}>
              <div style={{ margin: '2rem' }}>{offer._id}</div>
              <div style={{ margin: '2rem' }}>{offer.about}</div>
              <div style={{ margin: '2rem' }}>{offer.date}</div>
              <div style={{ margin: '2rem' }}>{offer.type}</div>
            </div>
          );
        })}
      </InnerWrapper>
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
