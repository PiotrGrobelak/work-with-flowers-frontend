import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import PanelTemplate from 'templates/PanelTemplate';
import SideBar from 'components/organisms/SideBar';
import NewOfferContainer from 'components/organisms/NewOfferContainer';
import EmployerOffers from 'components/organisms/EmployerOffers';
import WorkingView from 'components/organisms/WorkingView';
// import ModalWindow from 'components/molecules/ModalWindow';
import { logout as logoutAction } from 'redux/actions/sessionActions';
import {
  addNewOffer as addNewOfferAction,
  getEmployerOffers as getEmployerOffersAction,
} from 'redux/actions/profileActions';
import { clearMessage as clearMessageAction } from 'redux/actions/uiActions';

const EmployerPage = ({
  match,
  user,
  logout,
  addNewOffer,
  clearMessage,
  message,
  isMobileView,
  getEmployerOffers,
  employerOffers,
}) => {
  const { _id: id } = user;
  return (
    <UserPageTemplate>
      <PanelTemplate>
        {!isMobileView && <SideBar id={id} logout={logout} />}
        {match.url === `/employer/${id}` && (
          <WorkingView greetings="Witaj w profilu użytkownika" />
        )}
        {match.url === `/employer/offer/${id}` && (
          <NewOfferContainer
            addNewOffer={addNewOffer}
            clearMessage={clearMessage}
            message={message}
          />
        )}
        {match.url === `/employer/offers/${id}` && (
          <EmployerOffers
            getEmployerOffers={getEmployerOffers}
            employerOffers={employerOffers}
          />
        )}
        {/* <ModalWindow /> */}
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
  getEmployerOffers: PropTypes.func.isRequired,
  clearMessage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  message: PropTypes.shape({
    msgBody: PropTypes.string,
    msgError: PropTypes.bool,
  }),
  employerOffers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

EmployerPage.defaultProps = {
  user: {
    _id: '',
  },
  message: {},
};

const mapStateToProps = (state) => {
  const { user } = state.sessionReducer;
  const { message, employerOffers } = state.profileReducer;
  const { isMobileView } = state.uiReducer;
  return { user, message, employerOffers, isMobileView };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
  addNewOffer: (offerData) => dispatch(addNewOfferAction(offerData)),
  getEmployerOffers: () => dispatch(getEmployerOffersAction()),
  clearMessage: () => dispatch(clearMessageAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployerPage);
