import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import FormContainer from 'components/organisms/FormContainer/FormContainer';
import { register as registerAction } from 'actions';

const RegisterPage = ({ message, register, location }) => {
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '', role: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.role) {
            errors.role = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          register(values);
          resetForm(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <FormContainer
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              values={values}
              pathname={location.pathname}
              message={message}
            />
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

RegisterPage.defaultProps = {
  message: {},
};

const mapStateToProps = ({ message }) => ({ message });

const mapDispatchToProps = (dispatch) => ({
  register: (userData) => dispatch(registerAction(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
