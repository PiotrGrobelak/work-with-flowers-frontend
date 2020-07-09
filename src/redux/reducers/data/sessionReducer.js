import { sessionConstants, uiConstants } from 'redux/constants';

export const initialState = {
  isAuthenticated: false,
  user: {
    username: '',
    role: '',
  },
  message: {},
};
export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionConstants.AUTH_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    }
    case sessionConstants.AUTH_FAILURE: {
      return {
        ...state,
      };
    }
    case sessionConstants.REGISTER_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case sessionConstants.REGISTER_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case sessionConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    }
    case sessionConstants.LOGIN_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case sessionConstants.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        message: {},
      };
    }
    case uiConstants.CLEAR_MESSAGE: {
      return {
        ...state,
        message: {},
      };
    }
    default:
      return state;
  }
};
