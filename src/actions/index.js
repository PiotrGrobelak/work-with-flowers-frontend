import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUST';
export const FETCH_SUCCESS = 'FETCH_SUCCSS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const register = (username, password, role) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post('/api/user/register', {
      username,
      password,
      role,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAILURE }, err);
    });
};

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post('/api/user/login', {
      username,
      password,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: LOGIN_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE }, err);
    });
};

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
  // try {
  //   const res = await axios.get('/api/offers');
  //   const {
  //     data: { offers },
  //   } = res;
  //   dispatch({
  //     type: FETCH_SUCCESS,
  //     payload: {
  //       offers,
  //     },
  //   });
  // } catch (err) {
  //   dispatch({ type: FETCH_FAILURE }, err);
  // }
  return axios
    .get('/api/offers')
    .then(({ data: { offers } }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          offers,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE }, err);
    });
};
