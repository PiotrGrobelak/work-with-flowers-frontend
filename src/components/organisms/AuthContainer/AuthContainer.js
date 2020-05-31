import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import FormContainer from 'components/molecules/FormContainer/FormContainer';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledHeader = styled.header`
  padding: 20px 0;
  width: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 8px;
  border-bottom: 2px solid transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
    `}
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryBlue};
  :hover {
    text-decoration: underline;
  }
  ${({ home }) =>
    home &&
    css`
      margin: 10px;
      padding: 10px;
      width: 280px;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-align: center;
      border-top: 1px solid ${({ theme }) => theme.colors.primaryGrey};
    `}
`;

const AuthContainer = ({ handleChange, handleBlur, handleSubmit, values, pathname, message }) => {
  const toRegister = (
    <Paragraph>
      Nie masz jeszcze konta? <StyledLink to="/register">Zarejestruj</StyledLink>
    </Paragraph>
  );

  const toLogin = (
    <Paragraph>
      Masz już konto? <StyledLink to="/login">Zaloguj</StyledLink>
    </Paragraph>
  );

  return (
    <>
      <Heading>Zacznij już dziś</Heading>
      <StyledHeader>
        <StyledHeading as="h2" active={pathname === routes.register}>
          Rejestracja
        </StyledHeading>
        <StyledHeading as="h2" active={pathname === routes.login}>
          Logowanie
        </StyledHeading>
      </StyledHeader>
      <FormContainer
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        message={message}
        values={values}
        pathname={pathname}
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
