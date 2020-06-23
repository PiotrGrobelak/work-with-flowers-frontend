import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import PanelTemplate from 'templates/PanelTemplate';
import SideBar from 'components/organisms/SideBar';
import NewOfferContainer from 'components/organisms/NewOfferContainer';
import WorkingView from 'components/organisms/WorkingView';

const EmployerPage = ({ match, user }) => {
  const { _id: id } = user;
  return (
    <UserPageTemplate>
      <PanelTemplate>
        <SideBar id={id} />
        {match.url === `/employer/${id}` && (
          <WorkingView greetings="Twoje oferty" />
        )}
        {match.url === `/employer/offer/${id}` && <NewOfferContainer />}
      </PanelTemplate>
    </UserPageTemplate>
  );
};

EmployerPage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string,
  }),
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

EmployerPage.defaultProps = {
  user: {
    _id: '',
  },
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(EmployerPage);
