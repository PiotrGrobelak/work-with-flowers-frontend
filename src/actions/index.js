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

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUST';
export const FETCH_SUCCESS = 'FETCH_SUCCSS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export const authenticate = () => async (dispatch) => {
  dispatch({ type: AUTH_REQUEST });
  try {
    const res = await axios.get('/api/user/authenticated');
    const { isAuthenticated, user } = res.data;
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        isAuthenticated,
        user,
      },
    });
  } catch (err) {
    dispatch({
      type: AUTH_FAILURE,
      payload: {
        res: err,
      },
      err,
    });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post('/api/user/login', userData);
    const { isAuthenticated, user } = res.data;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        isAuthenticated,
        user,
      },
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: {
        message: {
          msgBody: err.response.data,
          msgError: true,
        },
      },
    });
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const res = await axios.post('/api/user/register', userData);
    const { message } = res.data;
    dispatch({ type: REGISTER_SUCCESS, payload: { message } });
  } catch (err) {
    const { message } = err.response.data;
    dispatch({ type: REGISTER_FAILURE, payload: { message } });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  try {
    const res = await axios.get('/api/user/logout');
    const { isAuthenticated, success, user } = res.data;
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: {
        isAuthenticated,
        success,
        user,
      },
    });
  } catch (err) {
    dispatch({ type: LOGOUT_FAILURE, err });
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
};

export const clearMessage = (dispatch) => {
  return dispatch({ type: CLEAR_MESSAGE });
};
