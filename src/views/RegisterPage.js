import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import AuthContainer from 'components/organisms/AuthContainer/AuthContainer';
import { register as registerAction, clearMessage as clearMessageAction } from 'actions';

const RegisterPage = ({ message, clearMessage, register, location }) => {
  const timerID = useRef(null);

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
        initialValues={{ username: '', password: '', role: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Uzupełnij nazwę użytkownika';
          }
          if (!values.password) {
            errors.password = 'Uzupelnij Swoje hasło';
          }
          if (!values.role) {
            errors.role = 'Zaznacz odpowiednie pole';
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
            <AuthContainer
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
  clearMessage: PropTypes.func.isRequired,
};

RegisterPage.defaultProps = {
  message: {},
};

const mapStateToProps = ({ message }) => ({ message });

const mapDispatchToProps = (dispatch) => ({
  register: (userData) => dispatch(registerAction(userData)),
  clearMessage: () => dispatch(clearMessageAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
