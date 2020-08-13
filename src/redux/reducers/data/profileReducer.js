import { profileConstants, uiConstants } from 'redux/constants';

const initialState = {
  message: {},
  isLoading: false,
  employerOffers: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileConstants.ADD_OFFER_SUCCESS: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case profileConstants.ADD_OFFER_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case profileConstants.GET_EMPLOYER_OFFERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case profileConstants.GET_EMPLOYER_OFFERS_SUCCESS: {
      return {
        ...state,
        employerOffers: action.payload.offers,
        isLoading: false,
      };
    }
    case profileConstants.GET_EMPLOYER_OFFERS_FAILURE: {
      return {
        ...state,
        employerOffers: [],
        isLoading: false,
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
