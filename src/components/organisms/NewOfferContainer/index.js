import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import NewOfferForm from 'components/molecules/NewOfferForm';

const StyledInnerWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 2/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const NewOfferContainer = () => (
  <StyledInnerWrapper>
    <Heading>Dodaj swoją ofertę</Heading>
    <Paragraph>
      Uzupełnij swoje ogłoszenie, kliknij <strong>Wyślij ofertę</strong>.
    </Paragraph>
    <NewOfferForm />
  </StyledInnerWrapper>
);

export default NewOfferContainer;
