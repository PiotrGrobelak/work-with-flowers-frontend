import React, { useRef, useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import FormContainer from 'components/organisms/FormContainer/FormContainer';
import { login as loginAction, clearMessage as clearMessageAction } from 'actions';

const LoginPage = ({ message, clearMessage, login, location, history, isAuthenticated }) => {
  const timerID = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      timerID.current = setTimeout(() => {
        history.push('/offers');
      }, 200);
    }
    return () => {
      clearTimeout(timerID.current);
    };
  }, [isAuthenticated, history, message]);

  useEffect(() => {
    if (message.msgBody) {
      timerID.current = setTimeout(() => {
        clearMessage();
      }, 3000);
    }
    return () => {
      clearTimeout(timerID.current);
    };
  }, [clearMessage, message]);

  return (
    <AuthTemplate>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Uzupełnij nazwę użytkownika';
          }
          if (!values.password) {
            errors.password = 'Uzupelnij swoje hasło';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          login(values);
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

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
  clearMessage: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  message: {},
};

const mapStateToProps = ({ isAuthenticated, message }) => ({
  isAuthenticated,
  message,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(loginAction(userData)),
  clearMessage: () => dispatch(clearMessageAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
