import React from 'react';
import PropTypes from 'prop-types';

const AuthTemplate = ({ children }) => <div>AuthTemplate:{children}</div>;

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;
