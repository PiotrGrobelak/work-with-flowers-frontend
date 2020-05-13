import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import TestComponents from 'components/molecules/testComponent';
import PrivateRoute from 'privativeRoute';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TestComponents />
        <PrivateRoute exact path="/" component={TestComponents} authhed={`"is work"`} />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
