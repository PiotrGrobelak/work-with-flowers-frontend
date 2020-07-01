import { uiConstants } from 'redux/constants';

const initialState = {
  isOpenMobileNavigation: false,
  isOpenSearchBar: false,
  isMobileView: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiConstants.TOGGLE_MOBILE_NAVIGATION: {
      return {
        ...state,
        isOpenMobileNavigation: !state.isOpenMobileNavigation,
      };
    }
    case uiConstants.IS_MOBILE_VIEW: {
      return {
        ...state,
        isMobileView: action.isMobileView,
      };
    }
    case uiConstants.TOGGLE_SEARCH_BAR: {
      return {
        ...state,
        isOpenSearchBar: !state.isOpenSearchBar,
      };
    }
    default:
      return state;
  }
};
