import React from 'react';
import SearchContainer from 'components/organisms/SearchContainer';
import OffersContainer from 'components/organisms/OffersContainer';
import UserPageTemaplate from './UserPageTemplate';

const OffersTemplate = () => (
  <UserPageTemaplate>
    <SearchContainer />
    <OffersContainer />
  </UserPageTemaplate>
);

export default OffersTemplate;
