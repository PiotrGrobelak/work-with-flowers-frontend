import React from 'react';
import styled, { css } from 'styled-components';
import { Formik, ErrorMessage, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
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
  max-height: 750px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
`;

const StyledFieldForm = styled.p`
  margin: 8px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  ${({ as }) =>
    as &&
    css`
      padding: 0;
      height: 370px;
      width: 100%;
      max-width: 250px;
      list-style: none;
    `}
`;

const StyledRequirements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: auto 0;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 2px auto;
`;

const AddOfferSchema = Yup.object().shape({
  position: Yup.string().required('Wybierz stanowisko'),
  title: Yup.string()
    .min(2, 'Minimalna liczba znaków to 2')
    .max(60, 'Maksymalna liczba znaków to 60')
    .required('Uzupełnij pole'),
  companyName: Yup.string()
    .min(1, 'Minimalna liczba znaków to 1')
    .max(20, 'Maksymalna liczba znaków to 20')
    .required('Uzupełnij pole'),
  city: Yup.string()
    .max(30, 'Maksymalna liczba znaków to 30')
    .required('Uzupełnij pole'),
  about: Yup.string()
    .min(10, 'Minimalna liczba znaków to 10')
    .max(300, 'Maksymalna liczba znaków to 300')
    .required('Uzupełnij pole'),
  description: Yup.string()
    .min(10, 'Minimalna liczba znaków to 10')
    .max(300, 'Maksymalna liczba znaków to 300')
    .required('Uzupełnij pole'),
  requirements: Yup.array()
    .of(
      Yup.string()
        .min(3, 'Minimalna liczba znaków to 3')
        .max(20, 'Maksymalna liczba znaków to 20')
        .required('Uzupełnij pole '),
    )
    .min(0)
    .max(10, 'Maksymalna liczba pól to 10')
    .required('Podaj przynajmniej jedno wymaganie'),
});

const NewOfferForm = () => (
  <Formik
    initialValues={{
      position: '',
      title: '',
      companyName: '',
      city: '',
      about: '',
      description: '',
      requirements: [],
    }}
    validationSchema={AddOfferSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ values, handleChange, handleBlur, handleSubmit }) => {
      return (
        <StyledOfferForm onSubmit={handleSubmit}>
          <StyledFieldForm>
            <Label htmlFor="position">Kogo szukasz?</Label>
            <Select
              id="position"
              name="position"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.position}
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
            <ErrorMessage name="position">
              {(msg) => <Message message={msg} />}
            </ErrorMessage>
          </StyledFieldForm>
          <StyledFieldForm>
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
          </StyledFieldForm>
          <StyledFieldForm>
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
          </StyledFieldForm>
          <StyledFieldForm>
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
          </StyledFieldForm>
          <StyledFieldForm>
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
          </StyledFieldForm>
          <StyledFieldForm>
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
          </StyledFieldForm>
          <StyledFieldForm as="ul">
            <Label htmlFor="requirements">Wymagania</Label>
            <FieldArray
              name="requirements"
              render={(arrayHelpers) => (
                <>
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
                      />
                    </StyledRequirements>
                  ))}
                  {values.requirements.length + 1 > 10 ? null : (
                    <StyledButtonIcon
                      type="button"
                      icon={PlusIcon}
                      onClick={() => arrayHelpers.push('')}
                      small="true"
                    />
                  )}
                </>
              )}
            />
            <ErrorMessage name="requirements">
              {(msg) => <Message message={msg} />}
            </ErrorMessage>
          </StyledFieldForm>
          <StyledButton type="submit">Wyślij ofertę</StyledButton>
        </StyledOfferForm>
      );
    }}
  </Formik>
);

export default NewOfferForm;
