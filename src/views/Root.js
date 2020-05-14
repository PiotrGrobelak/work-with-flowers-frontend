import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import TestComponents from 'components/molecules/testComponent';
import MainTemplate from 'templates/MainTemplate';
import PrivateRoute from 'privativeRoute';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <TestComponents />
          <PrivateRoute exact path="/" component={TestComponents} authhed={`"is work"`} />
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
