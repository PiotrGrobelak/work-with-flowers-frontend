import React from 'react';
// import PropTypes from 'prop-types';
// import TestCompoenent from 'components/molecules/testComponent';
import SearchContainer from 'components/organisms/SearchContainer/SearchContainer';
import OffersContainer from 'components/organisms/OffersContainer/OffersContainer';
import UserPageTemaplate from './UserPageTemplate';

const OffersTemplate = () => (
  <UserPageTemaplate>
    <SearchContainer />
    <OffersContainer />
    {/* <TestCompoenent /> */}
  </UserPageTemaplate>
);

export default OffersTemplate;
