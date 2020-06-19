import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import PanelTemplate from 'templates/PanelTemplate';
import SideBar from 'components/organisms/SideBar';
import NewOfferContainer from 'components/organisms/NewOfferContainer';

const EmployerPage = () => {
  return (
    <UserPageTemplate>
      <PanelTemplate>
        <SideBar />
        <NewOfferContainer />
      </PanelTemplate>
    </UserPageTemplate>
  );
};

export default EmployerPage;
