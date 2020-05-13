import { FETCH_SUCCESS, AUTH_SUCCESS, AUTH_FAILURE } from 'actions';

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return {
        ...state,
        some: 'sssssssssssssss',
      };
    }
    case AUTH_FAILURE: {
      return {
        ...state,
        some: 'ssssssssssss',
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
