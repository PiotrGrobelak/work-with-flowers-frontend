import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import AuthTemplate from 'templates/AuthTemplate';
import AuthContainer from 'components/organisms/AuthContainer';
import { register as registerAction } from 'redux/actions/sessionActions';
import { clearMessage as clearMessageAction } from 'redux/actions/uiActions';

const RegisterPage = ({ message, clearMessage, register, location }) => {
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
        onSubmit={(values, { resetForm, setSubmitting }) => {
          register(values);
          setTimeout(() => {
            setSubmitting(false);
            resetForm(values);
            clearMessage();
          }, 2000);
        }}
      >
        {(props) => {
          return (
            <AuthContainer
              pathname={location.pathname}
              message={message}
              {...props}
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

const mapStateToProps = (state) => {
  const { message } = state.sessionReducer;
  return {
    message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  register: (userData) => dispatch(registerAction(userData)),
  clearMessage: () => dispatch(clearMessageAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
