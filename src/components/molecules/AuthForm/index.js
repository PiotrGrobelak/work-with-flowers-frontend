import React from 'react';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import FieldForm from 'components/molecules/FieldForm';
import Input from 'components/atoms/Input';
import Label from 'components/atoms/Label';
import Select from 'components/atoms/Select';
import Message from 'components/molecules/Message';
import SelectIcon from 'assets/icons/select.svg';
import { StyledForm, StyledButton } from './index.styled';

const FormContainer = ({
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  values,
  pathname,
  message,
}) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <FieldForm>
        <Label htmlFor="username">Nazwa Użytkownika</Label>
        <Input
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
        />
        <ErrorMessage name="username">
          {(msg) => <Message message={msg} />}
        </ErrorMessage>
      </FieldForm>
      <FieldForm>
        <Label htmlFor="password">Twoje Hasło</Label>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <ErrorMessage name="password">
          {(msg) => <Message message={msg} />}
        </ErrorMessage>
      </FieldForm>
      {pathname === routes.register && (
        <FieldForm>
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
            <option value="employer">Pracodawaca</option>
            <option value="employee">Kandydat</option>
          </Select>
          <ErrorMessage name="role">
            {(msg) => <Message message={msg} />}
          </ErrorMessage>
        </FieldForm>
      )}
      <StyledButton type="submit" disabled={isSubmitting}>
        {pathname === routes.register ? 'Zarejestruj' : 'Zaloguj'}
      </StyledButton>
      {message.msgBody === 'UnAuthorized' ? (
        <Message big message="Błędny login lub hasło" />
      ) : (
        <Message big message={message.msgBody} error={message.msgError} />
      )}
    </StyledForm>
  );
};

FormContainer.propTypes = {
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

FormContainer.defaultProps = {
  message: {},
};

export default FormContainer;
