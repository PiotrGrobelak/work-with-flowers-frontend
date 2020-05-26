import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ErrorMessage } from 'formik';
import { routes } from 'routes';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';
import Message from 'components/molecules/Message/Message';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 500px; */
`;

const StyledFeildForm = styled.p``;

const FormContainer = ({ handleChange, handleBlur, handleSubmit, values, pathname, message }) => {
  return (
    <>
      <Heading>{pathname === routes.register ? 'Rejestracja' : 'Logowanie'}</Heading>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFeildForm>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <ErrorMessage name="username" render={(msg) => msg} />
        </StyledFeildForm>
        <StyledFeildForm>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <ErrorMessage name="password" render={(msg) => msg} />
        </StyledFeildForm>
        {pathname === routes.register && (
          <StyledFeildForm>
            <Label htmlFor="role">Register as</Label>
            <select
              id="role"
              name="role"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
            >
              <option value="" disabled hidden>
                Choose here
              </option>
              <option value="employee">Kandydat</option>
              <option value="employer">Pracodawaca</option>
            </select>
            <ErrorMessage name="role" render={(msg) => msg} />
          </StyledFeildForm>
        )}

        <Button type="submit">{pathname === routes.register ? 'Zarejestruj' : 'Zaloguj'}</Button>
      </StyledForm>
      {message.msgBody && <Message message={message.msgBody} />}
      <Button as={NavLink} to={pathname === routes.register ? '/login' : '/register'}>
        {pathname === routes.register ? 'Zaloguj' : 'Zarejestruj'}
      </Button>
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
