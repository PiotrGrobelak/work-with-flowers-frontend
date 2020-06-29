import { profileConstants } from 'redux/constants';

const initialState = {
  message: {},
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
    default:
      return state;
  }
};
