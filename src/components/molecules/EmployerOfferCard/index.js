import React from 'react';
import PropTypes from 'prop-types';
import translateType from 'utils/translateType';
// import Button from 'components/atoms/Button';
import TimeIcon from 'assets/icons/Time.svg';
import SearchIcon from 'assets/icons/Search.svg';
import {
  StyledCard,
  StyledSection,
  StyledHeading,
  StyledDate,
  StyledLink,
} from './index.styled';

const EmployerOfferCard = ({ offer: { type, _id: id, date } }) => {
  return (
    <StyledCard>
      <StyledSection>
        <StyledHeading as="h3">{translateType(type)}</StyledHeading>
        <StyledDate dateTime={date} icon={TimeIcon} height={14} width={14}>
          Dodano: {date}
        </StyledDate>
        <StyledLink
          href={`${window.location.origin}/offer/${id}`}
          icon={SearchIcon}
          height={14}
          width={14}
        >
          Podgląd
        </StyledLink>
      </StyledSection>
      {/* <StyledButtonsWrapper>
        <Button type="button">Edytuj</Button>
        <Button type="button" danger>
          Usuń
        </Button>
      </StyledButtonsWrapper> */}
    </StyledCard>
  );
};
EmployerOfferCard.propTypes = {
  offer: PropTypes.shape({
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmployerOfferCard;
