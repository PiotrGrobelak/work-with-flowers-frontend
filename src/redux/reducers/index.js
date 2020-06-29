import { combineReducers } from 'redux';
import { sessionReducer } from './data/sessionReducer';
import { offerReducer } from './data/offerReducer';
import { profileReducer } from './data/profileReducer';

const rootReducer = combineReducers({
  sessionReducer,
  offerReducer,
  profileReducer,
});

export default rootReducer;
