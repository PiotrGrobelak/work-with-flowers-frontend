import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const isAuthenticate = () => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const res = await axios.get('/api/user/authenticated');
    console.log(res);
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        res,
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_FAILURE,
      payload: {
        res: err,
      },
      err,
    });
  }
};

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
