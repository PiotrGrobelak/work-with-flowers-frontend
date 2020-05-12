import { FETCH_SUCCESS } from 'actions';

const rootReducer = (state = [], action) => {
  switch (action.type) {
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
