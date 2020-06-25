import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import AuthForm from 'components/molecules/AuthForm';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Link from 'components/atoms/Link';

const StyledHeader = styled.header`
  padding: 2rem 0;
  width: 32rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledSpan = styled.span`
  padding-bottom: 0.8rem;
  border-bottom: 2px solid transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
    `}
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: none;
  color: ${({ theme }) => theme.colors.secondaryBlue};
  :hover {
    text-decoration: underline;
  }
  ${({ home }) =>
    home &&
    css`
      margin: 1rem;
      padding: 1rem;
      width: 28rem;
      text-align: center;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryGrey};
    `}
`;

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
    <Paragraph>
      Nie masz jeszcze konta?{' '}
      <StyledLink to="/register">Zarejestruj</StyledLink>
    </Paragraph>
  );

  const toLogin = (
    <Paragraph>
      Masz już konto? <StyledLink to="/login">Zaloguj</StyledLink>
    </Paragraph>
  );

  return (
    <>
      <Heading as="h2">Zacznij już dziś</Heading>
      <StyledHeader>
        <StyledSpan active={pathname === routes.register}>
          Rejestracja
        </StyledSpan>
        <StyledSpan active={pathname === routes.login}>Logowanie</StyledSpan>
      </StyledHeader>
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
