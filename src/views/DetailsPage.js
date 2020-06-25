import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { getOfferById as getOfferByIdAction } from 'actions';

const DetailsPage = ({ match: { params }, currentOffer, getOfferById }) => {
  const history = useHistory();

  useEffect(() => {
    getOfferById(params.id);
  }, [getOfferById, params]);
  return (
    <>
      <DetailsTemplate
        about={currentOffer.about}
        city={currentOffer.city}
        companyName={currentOffer.companyName}
        date={currentOffer.date}
        description={currentOffer.description}
        title={currentOffer.title}
        requirements={currentOffer.requirements}
        adress={currentOffer.adress}
        email={currentOffer.email}
        type={currentOffer.type}
        history={history}
      />
    </>
  );
};

DetailsPage.propTypes = {
  getOfferById: PropTypes.func.isRequired,
  currentOffer: PropTypes.shape({
    about: PropTypes.string,
    city: PropTypes.string,
    adress: PropTypes.string,
    email: PropTypes.string,
    companyName: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    requirements: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

DetailsPage.defaultProps = {
  currentOffer: {},
};

const mapStateToProps = ({ currentOffer }) => ({
  currentOffer,
});

const mapDispatchToProps = (dispatch) => ({
  getOfferById: (offerId) => dispatch(getOfferByIdAction(offerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
