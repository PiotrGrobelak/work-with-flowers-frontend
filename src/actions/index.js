import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getAllOffers = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('/api/offers')
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
