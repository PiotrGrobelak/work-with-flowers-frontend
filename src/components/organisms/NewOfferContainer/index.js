import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import NewOfferForm from 'components/molecules/NewOfferForm';

const StyledWrapper = styled.div`
  grid-column: 3 / 3;
  grid-row: 2/2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const AddOfferSchema = Yup.object().shape({
  type: Yup.string().required('Wybierz stanowisko'),
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
  adress: Yup.string()
    .max(40, 'Maksymalna liczba znaków to 40')
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
        .max(30, 'Maksymalna liczba znaków to 30'),
    )
    .test('test-one', 'Uzupełnij pola', function (item) {
      const isNotUndefined = !item.some((filed) => filed === undefined);
      return isNotUndefined;
    })
    .min(0)
    .max(10, 'Maksymalna liczba pól to 10')
    .required('Podaj przynajmniej jedno wymagnie'),
});

const NewOfferContainer = ({ addNewOffer, clearMessage, message }) => (
  <StyledWrapper>
    <Heading>Dodaj swoją ofertę</Heading>
    <Paragraph>
      Uzupełnij swoje ogłoszenie, kliknij <strong>Wyślij ofertę</strong>.
    </Paragraph>
    <Formik
      initialValues={{
        type: '',
        title: '',
        companyName: '',
        city: '',
        adress: '',
        about: '',
        description: '',
        requirements: ['Organizacja czasem'],
      }}
      validationSchema={AddOfferSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        addNewOffer(values);
        setTimeout(() => {
          setSubmitting(false);
          resetForm(values);
          clearMessage();
        }, 2000);
      }}
    >
      {(props) => {
        return <NewOfferForm message={message} {...props} />;
      }}
    </Formik>
  </StyledWrapper>
);

NewOfferContainer.propTypes = {
  addNewOffer: PropTypes.func.isRequired,
  clearMessage: PropTypes.func.isRequired,
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
};

NewOfferContainer.defaultProps = {
  message: {},
};

export default NewOfferContainer;
