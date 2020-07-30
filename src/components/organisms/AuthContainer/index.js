import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import AuthForm from 'components/molecules/AuthForm';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { StyledInnerWrapper, StyledSpan, StyledLink } from './index.styled';

const AuthContainer = ({
  handleChange,
  handleBlur,
  handleSubmit,
  values,
  pathname,
  message,
  isSubmitting,
}) => {
  const toRegister = (
    <Paragraph center>
      Nie masz jeszcze konta?
      <StyledLink to="/register">Zarejestruj</StyledLink>
    </Paragraph>
  );

  const toLogin = (
    <Paragraph center>
      Masz już konto? <StyledLink to="/login">Zaloguj</StyledLink>
    </Paragraph>
  );

  return (
    <>
      <header>
        <Heading as="h2">Zacznij już dziś</Heading>
        <StyledInnerWrapper>
          <StyledSpan active={pathname === routes.register}>
            Rejestracja
          </StyledSpan>
          <StyledSpan active={pathname === routes.login}>Logowanie</StyledSpan>
        </StyledInnerWrapper>
      </header>
      <AuthForm
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={message}
        values={values}
        pathname={pathname}
        isSubmitting={isSubmitting}
      />
      {pathname === routes.register ? toLogin : toRegister}
      <StyledLink home="true" to="/">
        Strona Główna
      </StyledLink>
    </>
  );
};

AuthContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  values: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
  pathname: PropTypes.string.isRequired,
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
};

AuthContainer.defaultProps = {
  message: {},
};

export default AuthContainer;
