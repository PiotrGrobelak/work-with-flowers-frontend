import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectWorkType as selectWorkTypeAction } from 'redux/actions/uiActions';
import ButtonIcon from 'components/atoms/ButtonIcon';
import WorldIcon from 'assets/icons/World.svg';
import FloristIcon from 'assets/icons/Florist.svg';
import CourierIcon from 'assets/icons/Courier.svg';
import GardenerIcon from 'assets/icons/Gardener.svg';
import PracticeIcon from 'assets/icons/Practice.svg';
import ConservatorIcon from 'assets/icons/Conservator.svg';
import {
  StyledWrapper,
  StyledList,
  StyledItem,
  StyledItemInfo,
  StyledButton,
} from './index.styled';

const SearchContainer = ({ selectWorkType }) => {
  const history = useHistory();
  return (
    <StyledWrapper>
      <StyledButton>Miasto</StyledButton>
      <StyledList>
        <StyledItem>
          <ButtonIcon
            aria-label="set all offers request"
            value="all"
            icon={WorldIcon}
            onClick={(e) => {
              selectWorkType(e);
              history.push('/');
            }}
          />
          <StyledItemInfo>Wszystkie</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon
            aria-label="set florist offers request"
            value="florist"
            icon={FloristIcon}
            onClick={(e) => {
              selectWorkType(e);
              history.push('/');
            }}
          />
          <StyledItemInfo>Florysta</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon
            aria-label="set courier offers request"
            value="courier"
            icon={CourierIcon}
            onClick={(e) => {
              selectWorkType(e);
              history.push('/');
            }}
          />
          <StyledItemInfo>Kurier</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon
            aria-label="set gardener offers request"
            value="gardener"
            icon={GardenerIcon}
            onClick={(e) => {
              selectWorkType(e);
              history.push('/');
            }}
          />
          <StyledItemInfo>Ogród</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon
            aria-label="set apprentice offers request"
            value="apprentice"
            icon={PracticeIcon}
            onClick={(e) => {
              selectWorkType(e);
              history.push('/');
            }}
          />
          <StyledItemInfo>Praktyki</StyledItemInfo>
        </StyledItem>
        <StyledItem>
          <ButtonIcon
            aria-label="set conservator offers request"
            value="conservator"
            icon={ConservatorIcon}
            onClick={(e) => {
              selectWorkType(e);
              history.push('/');
            }}
          />
          <StyledItemInfo>Serwisant</StyledItemInfo>
        </StyledItem>
      </StyledList>
    </StyledWrapper>
  );
};

SearchContainer.propTypes = {
  selectWorkType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  selectWorkType: (type) => dispatch(selectWorkTypeAction(type)),
});

export default connect(null, mapDispatchToProps)(SearchContainer);
