import {
  FETCH_SUCCESS,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_SUCCESS,
  GET_OFFERS_BY_TYPE_SUCCESS,
  GET_OFFERS_BY_TYPE_FAILURE,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_FAILURE,
  GET_OFFER_BY_ID_SUCCESS,
  GET_OFFER_BY_ID_FAILURE,
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
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
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
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
        message: {},
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
        currentOffer: {},
      };
    }
    case GET_OFFERS_BY_TYPE_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
      };
    }
    case GET_OFFERS_BY_TYPE_FAILURE: {
      return {
        ...state,
        offers: [],
      };
    }
    case ADD_OFFER_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case ADD_OFFER_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case GET_OFFER_BY_ID_SUCCESS: {
      return {
        ...state,
        currentOffer: action.payload.currentOffer,
      };
    }
    case GET_OFFER_BY_ID_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
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
