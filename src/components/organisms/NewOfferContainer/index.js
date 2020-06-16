import React from 'react';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import Message from 'components/molecules/Message';

const StyledInnerWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 2/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const StyledOfferForm = styled.form`
  height: 700px;
  width: 800px;
  border: 1px solid black;
`;

const StyledFeildForm = styled.p``;

const NewOfferContainer = () => (
  <StyledInnerWrapper>
    <Heading>Dodaj Swoją Ofertę</Heading>
    <Paragraph>Uzupełnij swoje ogłoszenie i gotowe</Paragraph>
    <Formik>
      <StyledOfferForm>
        <StyledFeildForm>
          <Label htmlFor="username">Nazwa Użytkownika</Label>
          <Input id="username" type="text" name="username" />
          <ErrorMessage name="username">{(msg) => <Message message={msg} />}</ErrorMessage>
        </StyledFeildForm>
        <StyledFeildForm>
          <Label htmlFor="password">Twoje Hasło</Label>
          <Input id="password" type="password" name="password" />
          <ErrorMessage name="password">{(msg) => <Message message={msg} />}</ErrorMessage>
        </StyledFeildForm>
        <StyledFeildForm>
          <Label htmlFor="about">O twojej firmie</Label>
          <Input id="about" type="text" name="about" as="textarea" />
          <ErrorMessage name="password">{(msg) => <Message message={msg} />}</ErrorMessage>
        </StyledFeildForm>
        <StyledFeildForm>
          <Label htmlFor="description">Opis stanowiska</Label>
          <Input id="description" type="text" name="description" as="textarea" />
          <ErrorMessage name="password">{(msg) => <Message message={msg} />}</ErrorMessage>
        </StyledFeildForm>
        <Button>Dodaj oferte</Button>
      </StyledOfferForm>
    </Formik>
  </StyledInnerWrapper>
);

export default NewOfferContainer;
