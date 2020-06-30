import { uiConstants } from 'redux/constants';

const initialState = {
  open: false,
  isMobile: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.TOGGLE_MOBILE_NAVIGATION: {
      return {
        open: !state.open,
      };
    }
    default:
      return state;
  }
};
