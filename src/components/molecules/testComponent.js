import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllOffers } from 'actions';

const TestCompoenents = ({ offers, getRequest }) => {
  const [offerList, setOfferList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getList = useCallback(async () => {
    if (isLoading) {
      await getRequest();
      setOfferList(offers);
      setIsLoading(false);
    }
  }, [offers, getRequest, isLoading]);

  useEffect(() => {
    getList();
  }, [getList]);
  // console.log(offerList);
  return (
    <>
      <div>
        {offerList.map(({ _id: id, type, name, description, about }) => {
          return (
            <div key={id}>
              <div>{id}</div>
              <div>{type}</div>
              <div>{name}</div>
              <div>{description}</div>
              <div>{about}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

TestCompoenents.propTypes = {
  getRequest: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      about: PropTypes.string.isRequired,
    }),
  ),
};

TestCompoenents.defaultProps = {
  offers: [],
};

const mapStateToProps = ({ offers }) => {
  return { offers };
};

const mapDispatchToProps = (dispatch) => ({
  getRequest: () => dispatch(getAllOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestCompoenents);
