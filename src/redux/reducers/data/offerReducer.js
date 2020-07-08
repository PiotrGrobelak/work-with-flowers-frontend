import { offerConstants, uiConstants } from 'redux/constants';

const initialState = {
  isLoading: false,
  offers: [],
  currentOffer: {},
};

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case offerConstants.GET_ALL_OFFERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case offerConstants.GET_ALL_OFFERS_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
        isLoading: false,
      };
    }
    case offerConstants.GET_OFFERS_BY_TYPE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case offerConstants.GET_OFFERS_BY_TYPE_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
        isLoading: false,
      };
    }
    case offerConstants.GET_OFFERS_BY_TYPE_FAILURE: {
      return {
        ...state,
        offers: [],
      };
    }
    case offerConstants.GET_OFFER_BY_ID_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case offerConstants.GET_OFFER_BY_ID_SUCCESS: {
      return {
        ...state,
        currentOffer: action.payload.currentOffer,
        isLoading: false,
      };
    }
    case offerConstants.GET_OFFER_BY_ID_FAILURE: {
      return {
        ...state,
        message: action.payload.message,
      };
    }
    case uiConstants.CLEAR_CURRENT_OFFER: {
      return {
        ...state,
        currentOffer: {},
      };
    }
    default:
      return state;
  }
};
