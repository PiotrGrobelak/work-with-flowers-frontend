import { combineReducers } from 'redux';
import { sessionReducer } from './data/sessionReducer';
import { offerReducer } from './data/offerReducer';
import { profileReducer } from './data/profileReducer';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  sessionReducer,
  offerReducer,
  profileReducer,
  uiReducer,
});

export default rootReducer;
