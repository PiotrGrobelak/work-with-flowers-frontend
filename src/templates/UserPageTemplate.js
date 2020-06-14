import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/organisms/Navigation';

const UserPageTemaplate = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

UserPageTemaplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemaplate;
