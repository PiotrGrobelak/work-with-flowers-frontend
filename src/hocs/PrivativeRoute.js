import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, role, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && (role === 'employee' || 'employer') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

const mapStateToProps = ({ isAuthenticated, user: { role } }) => {
  return { isAuthenticated, role };
};

export default connect(mapStateToProps)(PrivateRoute);
