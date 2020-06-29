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
