import { FETCH_SUCCESS } from 'actions';

const rootReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      console.log(action.payload.data);

      return {
        ...state[action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
