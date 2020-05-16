import {
  FETCH_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from 'actions';

const initialState = {
  offers: [],
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        userID: action.payload,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        // userID: action.payload,
        isAuthenticated: action.payload.data.isAuthenticated,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
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
