import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled.form``;

const StyledFeildForm = styled.p``;

const FormContainer = ({ handleChange, handleBlur, handleSubmit, values }) => (
  <>
    <Heading>Register</Heading>
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
      </StyledFeildForm>
      <StyledFeildForm>
        <Label htmlFor="role">Register as</Label>
        <select
          id="role"
          name="role"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.role}
        >
          <option value="employee">Kandydat</option>
          <option value="employer">Pracodawaca</option>
        </select>
      </StyledFeildForm>
      <Button type="submit">Register</Button>
    </StyledForm>
  </>
);

FormContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormContainer;
