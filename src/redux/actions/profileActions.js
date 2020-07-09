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
