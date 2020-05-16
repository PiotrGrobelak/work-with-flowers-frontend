import {
  FETCH_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
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
      console.log(action.payload.message);

      return {
        ...state,
        message: action.payload.message,
      };
    }
    case REGISTER_FAILURE: {
      console.log(action.payload.message);
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
    case AUTH_SUCCESS: {
      console.log(action.payload.user);
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
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
