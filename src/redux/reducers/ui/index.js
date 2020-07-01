import { uiConstants } from 'redux/constants';

const initialState = {
  open: false,
  isMobileView: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.TOGGLE_MOBILE_NAVIGATION: {
      return {
        ...state,
        open: !state.open,
      };
    }
    case uiConstants.IS_MOBILE_VIEW: {
      return {
        ...state,
        isMobileView: action.isMobileView,
      };
    }
    default:
      return state;
  }
};
