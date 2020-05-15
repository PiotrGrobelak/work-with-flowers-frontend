import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import FormContainer from 'components/organisms/FormContainer/FormContainer';
import { register as registerAction } from 'actions';

const RegisterPage = ({ register, location }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '', role: '' }}
      onSubmit={({ username, password, role }) => {
        register(username, password, role);
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

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};

const mapDispatchToProps = (dispatch) => ({
  register: (username, password, role) =>
    dispatch(registerAction(username, password, role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
