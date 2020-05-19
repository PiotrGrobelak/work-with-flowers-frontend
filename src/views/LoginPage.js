import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import FormContainer from 'components/organisms/FormContainer/FormContainer';
import { login as loginAction } from 'actions';

const LoginPage = ({ login, location, history, isAuthenticated }) => {
  const timerID = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      timerID.current = setTimeout(() => {
        history.push('/offers');
      }, 1000);
    }
    return () => {
      clearTimeout(timerID.current);
    };
  }, [isAuthenticated, history, timerID]);
  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password, resetForm }) => {
          login(username, password);
          resetForm(username, password);
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });

const mapDispatchToProps = (dispatch) => ({
  login: (username, password, role) =>
    dispatch(loginAction(username, password, role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
