import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Offers from './Offers';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import EmployeePage from './EmployeePage';
import EmployerPage from './EmployerPage';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.register} component={RegisterPage} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} component={Offers} />
            <Route exact path={routes.offers} component={Offers} />
            <Route exact path={routes.employee} component={EmployeePage} />
            <Route exact path={routes.employer} component={EmployerPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
