import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/organisms/Naviagtion/Naviagtion';
import TestCompoenent from 'components/molecules/testComponent';

const UserPageTemaplate = ({ children }) => (
  <>
    <Navigation />
    {children}
    <TestCompoenent />
  </>
);

UserPageTemaplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserPageTemaplate;
