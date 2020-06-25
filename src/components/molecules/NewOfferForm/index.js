import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field, FieldArray } from 'formik';
import PropTypes from 'prop-types';
import FieldForm from 'components/molecules/FieldForm';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Select from 'components/atoms/Select';
import Button from 'components/atoms/Button';
import Message from 'components/molecules/Message';
import ButtonIcon from 'components/atoms/ButtonIcon';
import SelectIcon from 'assets/icons/select.svg';
import MinusIcon from 'assets/icons/Minus.svg';
import PlusIcon from 'assets/icons/Plus.svg';

const StyledOfferForm = styled.form`
  padding: 1rem;
  height: 100%;
  max-height: 75rem;
  width: 100%;
  max-width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
`;

const StyledRequirements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: auto 0 2rem 0;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0.2rem auto;
`;

const NewOfferForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  message,
}) => (
  <StyledOfferForm onSubmit={handleSubmit}>
    <FieldForm>
      <Label htmlFor="type">Kogo szukasz?</Label>
      <Select
        id="type"
        name="type"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.type}
        icon={SelectIcon}
      >
        <option value="" disabled hidden>
          Stanowisko
        </option>
        <option value="florist">Florysta</option>
        <option value="courier">Kurier</option>
        <option value="gardener">Ogrodnik</option>
        <option value="apprentice">Praktykant</option>
        <option value="conservator">Serwisant</option>
      </Select>
      <ErrorMessage name="type">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="title">Nazwa Oferty</Label>
      <Input
        id="title"
        type="text"
        name="title"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
      />
      <ErrorMessage name="title">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="companyName">Nazwa Firmy</Label>
      <Input
        id="companyName"
        type="text"
        name="companyName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.companyName}
      />
      <ErrorMessage name="companyName">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="city">Miasto</Label>
      <Input
        id="city"
        type="text"
        name="city"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.city}
      />
      <ErrorMessage name="city">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="adress">Adres</Label>
      <Input
        id="adress"
        type="text"
        name="adress"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.adress}
      />
      <ErrorMessage name="adress">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="email">E-mail</Label>
      <Input
        id="email"
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <ErrorMessage name="email">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="about">Napisz kilka słów o Twojej firmie</Label>
      <Input
        id="about"
        type="text"
        name="about"
        as="textarea"
        textarea
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.about}
      />
      <ErrorMessage name="about">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm>
      <Label htmlFor="description">Opis stanowiska</Label>
      <Input
        id="description"
        type="text"
        name="description"
        as="textarea"
        textarea
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
      />
      <ErrorMessage name="description">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
    </FieldForm>
    <FieldForm as="ul">
      <Label htmlFor="requirements">Wymagania</Label>
      <FieldArray
        name="requirements"
        render={(arrayHelpers) => (
          <FieldForm as="ul">
            {values.requirements.map((requirement, index) => (
              <StyledRequirements key={index}>
                <Input
                  as={Field}
                  name={`requirements.${index}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  small="true"
                />
                <ButtonIcon
                  type="button"
                  icon={MinusIcon}
                  onClick={() => arrayHelpers.remove(index)}
                  small="true"
                  aria-label="Remove requirement"
                />
              </StyledRequirements>
            ))}
            {values.requirements.length + 1 > 10 ? null : (
              <StyledButtonIcon
                type="button"
                icon={PlusIcon}
                onClick={() => arrayHelpers.push('')}
                small="true"
                aria-label="Add requirement"
              />
            )}
          </FieldForm>
        )}
      />
      <ErrorMessage name="requirements">
        {(msg) => <Message message={msg} />}
      </ErrorMessage>
      <Message big message={message.msgBody} error={message.msgError} />
    </FieldForm>
    <StyledButton type="submit" disabled={isSubmitting}>
      Wyślij ofertę
    </StyledButton>
  </StyledOfferForm>
);

NewOfferForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
};

NewOfferForm.defaultProps = {
  message: {},
  values: PropTypes.shape({
    type: '',
  }),
};

export default NewOfferForm;
