import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authenticate as authenticateAction } from 'actions';

const PrivateRoute = ({
  component: Component,
  role,
  authenticate,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticate() && (role === 'employee' || 'employer') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  authenticate: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user: { role } }) => {
  return { role };
};

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticateAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
