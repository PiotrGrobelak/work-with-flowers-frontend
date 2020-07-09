import axios from 'axios';
import { API } from 'API';
import { offerConstants } from 'redux/constants';

export const getAllOffers = () => async (dispatch) => {
  dispatch({ type: offerConstants.GET_ALL_OFFERS_REQUEST });
  try {
    const res = await axios.get(`${API}/api/offers`);
    const {
      data: { offers },
    } = res;
    dispatch({
      type: offerConstants.GET_ALL_OFFERS_SUCCESS,
      payload: {
        offers,
      },
    });
  } catch (err) {
    dispatch({ type: offerConstants.GET_ALL_OFFERS_FAILURE }, err);
  }
};

export const getOffersByType = (type) => async (dispatch) => {
  dispatch({ type: offerConstants.GET_OFFERS_BY_TYPE_REQUEST });
  try {
    const res = await axios.get(`${API}/api/offers/type?type=${type}`, type);
    const {
      data: { offers },
    } = res;
    dispatch({
      type: offerConstants.GET_OFFERS_BY_TYPE_SUCCESS,
      payload: {
        offers,
      },
    });
  } catch (err) {
    dispatch({ type: offerConstants.GET_OFFERS_BY_TYPE_FAILURE }, err);
  }
};

export const getOfferById = (offerId) => async (dispatch) => {
  dispatch({ type: offerConstants.GET_OFFER_BY_ID_REQUEST });
  try {
    const res = await axios.get(`${API}/api/offer/${offerId}`);
    const { currentOffer } = res.data;
    dispatch({
      type: offerConstants.GET_OFFER_BY_ID_SUCCESS,
      payload: { currentOffer },
    });
  } catch (err) {
    const { message } = err.response.data;
    dispatch({
      type: offerConstants.GET_OFFER_BY_ID_FAILURE,
      payload: { message },
    });
  }
};
