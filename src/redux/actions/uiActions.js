import { uiConstants } from 'redux/constants';
import { getAllOffers, getOffersByType } from './offerActions';

export const clearMessage = (dispatch) => {
  return dispatch({ type: uiConstants.CLEAR_MESSAGE });
};

export const clearCurrentOffer = (dispatch) => {
  return dispatch({ type: uiConstants.CLEAR_CURRENT_OFFER });
};

export const selectWorkType = ({ target: { value } }) => (dispatch) => {
  if (value === 'all') {
    dispatch(getAllOffers());
  } else {
    dispatch(getOffersByType(value));
  }
};

export const toggleMobileNavigation = (dispatch) => {
  return dispatch({ type: uiConstants.TOGGLE_MOBILE_NAVIGATION });
};

export const toggleSearchBar = (dispatch) => {
  return dispatch({ type: uiConstants.TOGGLE_SEARCH_BAR });
};

export const toggleMobileView = (isMobileView) => (dispatch) => {
  return dispatch({ type: uiConstants.IS_MOBILE_VIEW, isMobileView });
};
