import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { iconBeforeElement } from 'theme/mixins';
import translateType from 'utils/translateType';
import Heading from 'components/atoms/Heading';
import ComapnyLogoIcon from 'assets/icons/CompanyLogo.svg';
import PlaceIcon from 'assets/icons/Place.svg';
import CompanyIcon from 'assets/icons/Company.svg';
import TimeIcon from 'assets/icons/Time.svg';

const StyledList = styled.li`
  margin: 0px 10px 12px;
  padding: 0px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.09) 0px 1px 5px 0px;
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 12px 2px, rgba(0, 0, 0, 0.19) 2px 1px 5px 0px;
  }
`;

const StyledButton = styled.a`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primaryBlack};
  text-decoration: none;
`;

const StyledLogo = styled.img`
  margin-left: 20px;
  height: 34px;
`;

const StyledSection = styled.section`
  display: flex;
  width: 800px;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  flex-basis: 250px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledWrapper = styled.div`
  flex-basis: 250px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledInfo = styled.span`
  padding: 5px 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ${iconBeforeElement}
`;

const StyledDate = styled.span`
  margin-right: 20px;
  padding: 5px 0;
  align-self: flex-end;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  ${iconBeforeElement}
`;

const OfferCard = ({ offer: { type, _id: id, date, companyName, city } }) => {
  return (
    <StyledList>
      <StyledButton as={NavLink} to={`offer/${id}`}>
        <StyledLogo src={ComapnyLogoIcon} />
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
