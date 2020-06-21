import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import store from 'store';
import PrivativeRoute from 'hocs/PrivativeRoute';
import UnPrivativeRoute from 'hocs/UnPrivativeRoute';
import MainTemplate from 'templates/MainTemplate';
import Offers from './Offers';
import DetailsPage from './DetailsPage';
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
            <UnPrivativeRoute
              exact
              path={routes.register}
              component={RegisterPage}
            />
            <UnPrivativeRoute exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} component={Offers} />
            <Route exact path={routes.offers} component={Offers} />
            <Route exact path={routes.offer} component={DetailsPage} />
            <PrivativeRoute
              exact
              path={routes.employee}
              component={EmployeePage}
            />
            <PrivativeRoute
              exact
              path={routes.employer}
              component={EmployerPage}
            />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
