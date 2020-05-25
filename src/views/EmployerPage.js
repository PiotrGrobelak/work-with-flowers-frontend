import React from 'react';
import PropTypes from 'prop-types';

const EmployerPage = ({ history }) => (
  <>
    <div>EmployerPage</div>{' '}
    <button type="button" onClick={() => history.goBack()}>
      Back
    </button>
  </>
);

EmployerPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default EmployerPage;
