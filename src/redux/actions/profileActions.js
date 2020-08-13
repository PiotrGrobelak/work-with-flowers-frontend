import axios from 'axios';
import { API } from 'API';
import { profileConstants } from 'redux/constants';

export const addNewOffer = (offerData) => async (dispatch) => {
  dispatch({ type: profileConstants.ADD_OFFER_REQUEST });
  try {
    const res = await axios.post(`${API}/api/user/offer`, offerData, {
      withCredentials: true,
    });
    const { message } = res.data;
    dispatch({
      type: profileConstants.ADD_OFFER_SUCCESS,
      payload: { message },
    });
  } catch (err) {
    const { message } = err.response.data;
    dispatch({
      type: profileConstants.ADD_OFFER_FAILURE,
      payload: { message },
    });
  }
};

export const getEmployerOffers = () => async (dispatch) => {
  dispatch({ type: profileConstants.GET_EMPLOYER_OFFERS_REQUEST });
  try {
    const res = await axios.get(`${API}/api/user/offers`, {
      withCredentials: true,
    });
    const {
      data: { offers },
    } = res;
    dispatch({
      type: profileConstants.GET_EMPLOYER_OFFERS_SUCCESS,
      payload: {
        offers,
      },
    });
  } catch (err) {
    dispatch({ type: profileConstants.GET_EMPLOYER_OFFERS_FAILURE }, err);
  }
};
