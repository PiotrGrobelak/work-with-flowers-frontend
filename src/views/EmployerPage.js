import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import PanelTemplate from 'templates/PanelTemplate';
import SideBar from 'components/organisms/SideBar';
import NewOfferContainer from 'components/organisms/NewOfferContainer';
import WorkingView from 'components/organisms/WorkingView';
import { logout as logoutAction } from 'redux/actions/sessionActions';
import { addNewOffer as addNewOfferAction } from 'redux/actions/profileActions';
import { clearMessage as clearMessageAction } from 'redux/actions/uiActions';

const EmployerPage = ({
  match,
  user,
  logout,
  addNewOffer,
  clearMessage,
  message,
  isMobileView,
}) => {
  const { _id: id } = user;
  return (
    <UserPageTemplate>
      <PanelTemplate>
        {!isMobileView && <SideBar id={id} logout={logout} />}
        {match.url === `/employer/${id}` && (
          <WorkingView greetings="Twoje oferty" />
        )}
        {match.url === `/employer/offer/${id}` && (
          <NewOfferContainer
            addNewOffer={addNewOffer}
            clearMessage={clearMessage}
            message={message}
          />
        )}
      </PanelTemplate>
    </UserPageTemplate>
  );
};

EmployerPage.propTypes = {
  isMobileView: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string,
  }),
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  addNewOffer: PropTypes.func.isRequired,
  clearMessage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
};

EmployerPage.defaultProps = {
  user: {
    _id: '',
  },
  message: {},
};

const mapStateToProps = (state) => {
  const { user } = state.sessionReducer;
  const { message } = state.profileReducer;
  const { isMobileView } = state.uiReducer;
  return { user, message, isMobileView };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
  addNewOffer: (offerData) => dispatch(addNewOfferAction(offerData)),
  clearMessage: () => dispatch(clearMessageAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployerPage);
