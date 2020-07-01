import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import NewOfferForm from 'components/molecules/NewOfferForm';
import { AddOfferSchema } from './index.yupSchema';
import { StyledWrapper, StyledHeading } from './index.styled';

const NewOfferContainer = ({ addNewOffer, clearMessage, message }) => (
  <StyledWrapper>
    <StyledHeading>Dodaj swoją ofertę</StyledHeading>
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
        email: 'xxxx@email.com',
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
