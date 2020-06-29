import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectWorkType as selectWorkTypeAction } from 'redux/actions/uiActions';
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
  position: relative;
  padding: 0.5rem 0 0 3rem;
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-top: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 5px -3px ${({ theme }) => theme.colors.secondaryBlack};
`;

const StyledList = styled.ul`
  margin: 0;
  padding-left: 2rem;
  min-width: 40rem;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledItem = styled.li`
  display: flex;
  width: 7.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledItemInfo = styled.span`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

const StyledButton = styled(Button)`
  padding-left: 2rem;
  height: 4rem;
  max-width: 18rem;
  width: 100%;
  text-align: left;
  background-image: url(${ArrowIcon});
  background-repeat: no-repeat;
  background-position: 115% 50%;
  background-size: 40% 40%;
  border: 2px solid ${({ theme }) => theme.colors.primaryWhite};
`;

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
