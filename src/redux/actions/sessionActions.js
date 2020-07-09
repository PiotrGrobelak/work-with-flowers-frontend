import axios from 'axios';
import { API } from 'API';
import { sessionConstants } from 'redux/constants';

export const authenticate = () => async (dispatch) => {
  dispatch({ type: sessionConstants.AUTH_REQUEST });
  try {
    const res = await axios.get(`${API}/api/user/authenticated`, {
      withCredentials: true,
    });
    const { isAuthenticated, user } = res.data;
    localStorage.setItem('token', isAuthenticated);
    dispatch({
      type: sessionConstants.AUTH_SUCCESS,
      payload: {
        isAuthenticated,
        user,
      },
    });
  } catch (err) {
    localStorage.removeItem('token');
    dispatch({
      type: sessionConstants.AUTH_FAILURE,
      payload: {
        res: err,
      },
      err,
    });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: sessionConstants.LOGIN_REQUEST });
  try {
    const res = await axios.post(`${API}/api/user/login`, userData, {
      withCredentials: true,
    });
    const { isAuthenticated, user } = res.data;
    localStorage.setItem('token', isAuthenticated);
    dispatch({
      type: sessionConstants.LOGIN_SUCCESS,
      payload: {
        isAuthenticated,
        user,
      },
    });
  } catch (err) {
    dispatch({
      type: sessionConstants.LOGIN_FAILURE,
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
  dispatch({ type: sessionConstants.REGISTER_REQUEST });
  try {
    const res = await axios.post(`${API}/api/user/register`, userData);
    const { message } = res.data;
    dispatch({ type: sessionConstants.REGISTER_SUCCESS, payload: { message } });
  } catch (err) {
    const { message } = err.response.data;
    dispatch({ type: sessionConstants.REGISTER_FAILURE, payload: { message } });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: sessionConstants.LOGOUT_REQUEST });
  try {
    const res = await axios.get(`${API}/api/user/logout`, {
      withCredentials: true,
    });
    const { isAuthenticated, success, user } = res.data;
    localStorage.removeItem('token');
    dispatch({
      type: sessionConstants.LOGOUT_SUCCESS,
      payload: {
        isAuthenticated,
        success,
        user,
      },
    });
  } catch (err) {
    dispatch({ type: sessionConstants.LOGOUT_FAILURE, err });
  }
};
