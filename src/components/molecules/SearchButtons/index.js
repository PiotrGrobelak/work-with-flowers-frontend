import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon';
import WorldIcon from 'assets/icons/World.svg';
import FloristIcon from 'assets/icons/Florist.svg';
import CourierIcon from 'assets/icons/Courier.svg';
import GardenerIcon from 'assets/icons/Gardener.svg';
import PracticeIcon from 'assets/icons/Practice.svg';
import ConservatorIcon from 'assets/icons/Conservator.svg';
import { StyledItem, StyledItemInfo } from './index.styled';

const SearchButtons = ({
  history,
  selectWorkType,
  toggleSearchBar,
  isMobileView,
}) => (
  <>
    <StyledItem>
      <ButtonIcon
        aria-label="set all offers request"
        value="all"
        icon={WorldIcon}
        onClick={(e) => {
          selectWorkType(e);
          history.push('/');
          isMobileView && toggleSearchBar();
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
          isMobileView && toggleSearchBar();
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
          isMobileView && toggleSearchBar();
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
          isMobileView && toggleSearchBar();
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
          isMobileView && toggleSearchBar();
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
          isMobileView && toggleSearchBar();
        }}
      />
      <StyledItemInfo>Serwisant</StyledItemInfo>
    </StyledItem>
  </>
);

SearchButtons.propTypes = {
  toggleSearchBar: PropTypes.func.isRequired,
  selectWorkType: PropTypes.func.isRequired,
  isMobileView: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SearchButtons;
