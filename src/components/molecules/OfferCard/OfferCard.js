import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
// import { routes } from 'routes';

const id = 'r43frcvsdf';

const StyledList = styled.li`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
`;

const OfferCard = () => {
  return (
    <StyledList>
      <header>
        <h3>florysta</h3>
        <span>Dodano: </span>
      </header>
      <section>
        <h4>nazwa firmy</h4>
        <p>Krotki opis stanowiska</p>
      </section>
      <Button secondary as={NavLink} to={`offer/${id}`}>
        Zobacz oferte
      </Button>
    </StyledList>
  );
};

export default OfferCard;
