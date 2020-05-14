import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Offers from './Offers';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.register} component={RegisterPage} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} render={() => <Redirect to="/offers" />} />
            <Route exact path={routes.offers} component={Offers} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
