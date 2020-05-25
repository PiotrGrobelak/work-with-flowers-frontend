import React from 'react';
import PropTypes from 'prop-types';

const EmployeePage = ({ history }) => (
  <>
    <div>EmployeePage</div>
    <button type="button" onClick={() => history.goBack()}>
      Back
    </button>
  </>
);

EmployeePage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default EmployeePage;
