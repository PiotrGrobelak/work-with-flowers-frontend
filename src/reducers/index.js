import {
  FETCH_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
  CLEAR_MESSAGE,
} from 'actions';

const initialState = {
  offers: [],
  isAuthenticated: false,
  user: {
    username: '',
    role: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case REGISTER_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.data.isAuthenticated,
        user: action.payload.data.user,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.data.isAuthenticated,
        user: action.payload.data.user,
        message: {},
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
      };
    }
    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: {},
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
