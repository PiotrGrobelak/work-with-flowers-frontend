import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

withProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.sessionReducer;
  return { isAuthenticated };
};

export default connect(mapStateToProps)(withProtectedRoute);
