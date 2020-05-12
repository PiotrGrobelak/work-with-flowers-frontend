import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getAllOffers = () => async (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  try {
    const res = await axios.get('/api/offers');
    const {
      data: { offers },
    } = res;
    dispatch({
      type: FETCH_SUCCESS,
      payload: {
        offers,
      },
    });
  } catch (err) {
    dispatch({ type: FETCH_FAILURE }, err);
  }
  // return axios
  //   .get('/api/offers')
  //   .then(({ data: { offers } }) => {
  //     dispatch({
  //       type: FETCH_SUCCESS,
  //       payload: {
  //         offers,
  //       },
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     dispatch({ type: FETCH_FAILURE }, err);
  //   });
};
