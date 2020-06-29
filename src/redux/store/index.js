import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import setAuthorization from 'utils/setAuthorization';

// , compose

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

// const store = createStore(rootReducer, applyMiddleware(thunk));

const token = localStorage.getItem('token');
if (token) {
  setAuthorization(store);
}

export { store };
