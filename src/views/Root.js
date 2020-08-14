import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import { store } from 'redux/store';
import PrivativeRoute from 'hocs/withPrivativeRoute';
import ProtectedRoute from 'hocs/withProtectedRoute';
import MainTemplate from 'templates/MainTemplate';
import OffersPage from './OffersPage';
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
            <ProtectedRoute
              exact
              path={routes.register}
              component={RegisterPage}
            />
            <ProtectedRoute exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.home} component={OffersPage} />
            <Route exact path={routes.offers} component={OffersPage} />
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
            <PrivativeRoute
              exact
              path={routes.employerOffers}
              component={EmployerPage}
            />
            <PrivativeRoute
              exact
              path={routes.addOffer}
              component={EmployerPage}
            />
            <Route path="/*" component={LoginPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
