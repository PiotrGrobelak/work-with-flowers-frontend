import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOffers } from 'actions';

const TestCompoenents = (props) => {
  //   console.log(someData);

  useEffect(() => {
    console.log(props);
    props.getRequest();
  }, [props]);

  return <div>Some Data</div>;
};

TestCompoenents.propTypes = {
  getRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const someData = state;
  return { someData };
};

const mapDispatchToProps = (dispatch) => ({
  getRequest: () => dispatch(getAllOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestCompoenents);
