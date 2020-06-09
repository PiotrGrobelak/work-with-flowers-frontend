import React from 'react';
import SearchContainer from 'components/organisms/SearchContainer/SearchContainer';
import OffersContainer from 'components/organisms/OffersContainer/OffersContainer';
import UserPageTemaplate from './UserPageTemplate';

const OffersTemplate = () => (
  <UserPageTemaplate>
    <SearchContainer />
    <OffersContainer />
  </UserPageTemaplate>
);

export default OffersTemplate;
