import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from './UserPageTemplate';

const AuthTemplate = ({ children }) => <UserPageTemplate>AuthTemplate:{children}</UserPageTemplate>;

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;
