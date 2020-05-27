import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ErrorMessage } from 'formik';
import { routes } from 'routes';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Select from 'components/atoms/Select/Select';
import Button from 'components/atoms/Button/Button';
import Message from 'components/molecules/Message/Message';
import SelectIcon from 'assets/icons/select.svg';

const StyledForm = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFeildForm = styled.p`
  margin: 8px;
  width: 240px;
  display: flex;
  flex-direction: column;
`;

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

const StyledButton = styled(Button)`
  margin: 20px 0 10px 0;
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

const FormContainer = ({ handleChange, handleBlur, handleSubmit, values, pathname, message }) => {
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
      <StyledForm onSubmit={handleSubmit}>
        <StyledFeildForm>
          <Label htmlFor="username">Nazwa Użytkownika</Label>
          <Input
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <ErrorMessage name="username">{(msg) => <Message message={msg} />}</ErrorMessage>
        </StyledFeildForm>
        <StyledFeildForm>
          <Label htmlFor="password">Twoje Hasło</Label>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <ErrorMessage name="password">{(msg) => <Message message={msg} />}</ErrorMessage>
        </StyledFeildForm>
        {pathname === routes.register && (
          <StyledFeildForm>
            <Label htmlFor="role">Rejestrujesz się jako?</Label>
            <Select
              id="role"
              name="role"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
              icon={SelectIcon}
            >
              <option value="" disabled hidden>
                Kandydat/Pracodawaca
              </option>
              <option value="employee">Kandydat</option>
              <option value="employer">Pracodawaca</option>
            </Select>
            <ErrorMessage name="role">{(msg) => <Message message={msg} />}</ErrorMessage>
          </StyledFeildForm>
        )}
        <StyledButton secondary type="submit">
          {pathname === routes.register ? 'Zarejestruj' : 'Zaloguj'}
        </StyledButton>
        {message.msgBody === 'UnAuthorized' ? (
          <Message big message="Błędny login lub hasło" />
        ) : (
          <Message big message={message.msgBody} />
        )}
      </StyledForm>
      {pathname === routes.register ? toLogin : toRegister}
      <StyledLink home="true" to="/">
        Strona Główna
      </StyledLink>
    </>
  );
};

FormContainer.propTypes = {
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

FormContainer.defaultProps = {
  message: {},
};

export default FormContainer;
