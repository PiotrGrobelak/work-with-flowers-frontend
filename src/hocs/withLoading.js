import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/molecules/Loading';

const withLoading = (Component) => ({ isLoading, ...props }) => {
  if (isLoading) {
    return <Loading />;
  }
  return <Component {...props} />;
};
withLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default withLoading;
