import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import FormContainer from 'components/organisms/FormContainer/FormContainer';
import { login as loginAction } from 'actions';

const LoginPage = ({ login, location }) => {
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          login(username, password);
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
            />
          );
        }}
      </Formik>
    </AuthTemplate>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (username, password, role) =>
    dispatch(loginAction(username, password, role)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
