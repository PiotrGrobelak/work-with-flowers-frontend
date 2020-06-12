import React from 'react';
import { storiesOf } from '@storybook/react';
import withFormik from 'storybook-formik';
import AuthForm from '.';

const values = {
  username: 'Mike',
  password: 'xxyv',
};

const pathname = '/register';

storiesOf('AuthForm', module)
  .addDecorator(withFormik)
  .add('Login Form', () => <AuthForm values={values} />)
  .add('Register Form', () => <AuthForm pathname={pathname} values={values} />);
