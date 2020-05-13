import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isAuthenticate } from 'actions';

const PrivateRoute = ({ component: Component, authed, authenticate, ...rest }) => {
  useEffect(async () => {
    await authenticate();
  }, [authenticate]);
  return (
    <Route
      {...rest}
      render={(props) => (authed ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  authed: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {};

const mapStateToProps = (state) => {
  console.log(state);
  return { state };
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(isAuthenticate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
