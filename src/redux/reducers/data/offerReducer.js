import { offerConstants, uiConstants } from 'redux/constants';

const initialState = {
  offers: [],
  currentOffer: {},
};

export const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case offerConstants.GET_ALL_OFFERS_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
      };
    }
    case offerConstants.GET_OFFERS_BY_TYPE_SUCCESS: {
      return {
        ...state,
        offers: action.payload.offers,
      };
    }
    case offerConstants.GET_OFFERS_BY_TYPE_FAILURE: {
      return {
        ...state,
        offers: [],
      };
    }
    case offerConstants.GET_OFFER_BY_ID_SUCCESS: {
      return {
        ...state,
        currentOffer: action.payload.currentOffer,
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
