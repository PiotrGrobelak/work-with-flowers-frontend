import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  getOffersByType as getOffersByTypeAction,
  getAllOffers as getAllOffersAction,
} from 'actions';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Button from 'components/atoms/Button';
import WorldIcon from 'assets/icons/World.svg';
import FloristIcon from 'assets/icons/Florist.svg';
import CourierIcon from 'assets/icons/Courier.svg';
import GardenerIcon from 'assets/icons/Gardener.svg';
import PracticeIcon from 'assets/icons/Practice.svg';
import ConservatorIcon from 'assets/icons/Conservator.svg';
import ArrowIcon from 'assets/icons/Arrow.svg';

const StyledWrapper = styled.div`
  padding: 5px 0 0 30px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const StyledList = styled.ul`
  margin: 0;
  padding-left: 10px;
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledItem = styled.li`
  display: flex;
  width: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledItemInfo = styled.span`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

const StyledButton = styled(Button)`
  padding-left: 20px;
  height: 40px;
  max-width: 180px;
  width: 100%;
  text-align: left;
  background-image: url(${ArrowIcon});
  background-repeat: no-repeat;
  background-position: 115% 50%;
  background-size: 40% 40%;
  border: 2px solid ${({ theme }) => theme.colors.primaryWhite};
`;

const SearchContainer = ({ getOffersByType, getAllOffers }) => {
  function onSelectType({ target: { value } }) {
    if (value === 'all') {
      getAllOffers();
    } else {
      getOffersByType(value);
    }
  }
  return (
    <StyledWrapper>
      <StyledButton>Miasto</StyledButton>
      <StyledList>
        <StyledItem>
          <ButtonIcon value="all" icon={WorldIcon} onClick={(e) => onSelectType(e)} />
          <StyledItemInfo>Wszystkie</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon value="florist" icon={FloristIcon} onClick={(e) => onSelectType(e)} />
          <StyledItemInfo>Florysta</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon value="courier" icon={CourierIcon} onClick={(e) => onSelectType(e)} />
          <StyledItemInfo>Kurier</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon value="gardener" icon={GardenerIcon} onClick={(e) => onSelectType(e)} />
          <StyledItemInfo>Ogród</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon value="apprentice" icon={PracticeIcon} onClick={(e) => onSelectType(e)} />
          <StyledItemInfo>Praktyki</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon value="conservator" icon={ConservatorIcon} onClick={(e) => onSelectType(e)} />
          <StyledItemInfo>Serwisant</StyledItemInfo>
        </StyledItem>
      </StyledList>
    </StyledWrapper>
  );
};

SearchContainer.propTypes = {
  getOffersByType: PropTypes.func.isRequired,
  getAllOffers: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getOffersByType: (type) => dispatch(getOffersByTypeAction(type)),
  getAllOffers: () => dispatch(getAllOffersAction()),
});

export default connect(null, mapDispatchToProps)(SearchContainer);
