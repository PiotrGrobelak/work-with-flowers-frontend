import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import translateType from 'utils/translateType';
import ComapnyLogoIcon from 'assets/icons/CompanyLogo.svg';
import PlaceIcon from 'assets/icons/Place.svg';
import CompanyIcon from 'assets/icons/Company.svg';
import TimeIcon from 'assets/icons/Time.svg';
import {
  StyledList,
  StyledButton,
  StyledLogo,
  StyledSection,
  StyledHeading,
  StyledWrapper,
  StyledInfo,
  StyledDate,
} from './index.styled';

const OfferCard = ({ offer: { type, _id: id, date, companyName, city } }) => {
  return (
    <StyledList>
      <StyledButton
        as={NavLink}
        to={`offer/${id}`}
        aria-label="open current offer"
      >
        <StyledLogo src={ComapnyLogoIcon} alt="Logo firmy" />
        <StyledSection>
          <StyledHeading as="h3">{translateType(type)}</StyledHeading>
          <StyledWrapper>
            <StyledInfo icon={CompanyIcon} height={14} width={14}>
              {companyName}
            </StyledInfo>
            <StyledInfo icon={PlaceIcon} height={14} width={14}>
              {city}
            </StyledInfo>
          </StyledWrapper>
          <StyledDate icon={TimeIcon} height={14} width={14}>
            Dodano: {date}
          </StyledDate>
        </StyledSection>
      </StyledButton>
    </StyledList>
  );
};
OfferCard.propTypes = {
  offer: PropTypes.shape({
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferCard;
