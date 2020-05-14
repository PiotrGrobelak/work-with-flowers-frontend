import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';

const StyledForm = styled.form``;

const StyledFeildForm = styled.p``;

const FormContainer = () => (
  <>
    <Heading>Register</Heading>
    <StyledForm>
      <StyledFeildForm>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" name="username" placeholder="Username" />
      </StyledFeildForm>
      <StyledFeildForm>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" name="password" placeholder="Password" />
      </StyledFeildForm>
      <StyledFeildForm>
        <Label htmlFor="role">Register as</Label>
        <select id="role" name="userrole">
          <option value="employee">Kandydat</option>
          <option value="employer">Pracodawaca</option>
        </select>
      </StyledFeildForm>
      <Button type="submit">Register</Button>
    </StyledForm>
  </>
);

export default FormContainer;
