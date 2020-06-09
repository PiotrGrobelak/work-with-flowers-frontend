import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Heading from 'components/atoms/Heading/Heading';
// import { routes } from 'routes';

// const id = 'r43frcvsdf';

const StyledList = styled.li`
  margin: 0px 10px 12px;
  padding: 0px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.09) 0px 1px 5px 0px;
`;

const StyledButton = styled.a`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primaryBlack};
  text-decoration: none;
`;

const StyledLogo = styled.span`
  margin-left: 20px;
`;

const StyledSection = styled.section`
  display: flex;
  width: 800px;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  flex-basis: 200px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledDate = styled.span`
  margin-right: 20px;
`;

const OfferCard = ({ offer: { type, _id: id } }) => {
  return (
    <StyledList>
      <StyledButton as={NavLink} to={`offer/${id}`}>
        <StyledLogo>Logo</StyledLogo>
        <StyledSection>
          <StyledHeading as="h3">{type}</StyledHeading>
          <StyledWrapper>
            <span>nazwa firmy</span>
            <span>miasto</span>
          </StyledWrapper>
          <StyledDate>Dodano: 23.05</StyledDate>
        </StyledSection>
      </StyledButton>
    </StyledList>
  );
};
OfferCard.propTypes = {
  offer: PropTypes.shape({
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default OfferCard;
