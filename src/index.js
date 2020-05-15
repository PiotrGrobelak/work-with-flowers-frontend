import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { authenticate } from 'actions';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import store from 'store';
import * as serviceWorker from './serviceWorker';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(authenticate());
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
