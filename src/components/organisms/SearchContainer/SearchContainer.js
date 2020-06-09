import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Button from 'components/atoms/Button/Button';
import FloristIcon from 'assets/icons/Florist.svg';
import CourierIcon from 'assets/icons/Courier.svg';
import GardenerIcon from 'assets/icons/Gardener.svg';
import PracticeIcon from 'assets/icons/Practice.svg';
import ConservatorIcon from 'assets/icons/Conservator.svg';
import ArrowIcon from 'assets/icons/Arrow.svg';

const StyledWrapper = styled.div`
  padding-left: 30px;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const StyledList = styled.ul`
  margin: 0;
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledItem = styled.li`
  display: flex;
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
  width: 180px;
  text-align: left;
  background-image: url(${ArrowIcon});
  background-repeat: no-repeat;
  background-position: 115% 50%;
  background-size: 40% 40%;
  border: 2px solid ${({ theme }) => theme.colors.primaryWhite};
`;

const SearchContainer = () => (
  <StyledWrapper>
    <StyledButton secondary>Miasto</StyledButton>
    <StyledList>
      <StyledItem>
        <ButtonIcon icon={FloristIcon} />
        <StyledItemInfo>Florysta</StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={CourierIcon} />
        <StyledItemInfo>Kurier</StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={GardenerIcon} />
        <StyledItemInfo>Ogród</StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={PracticeIcon} />
        <StyledItemInfo>Praktyki</StyledItemInfo>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={ConservatorIcon} />
        <StyledItemInfo>Konserwator</StyledItemInfo>
      </StyledItem>
    </StyledList>
  </StyledWrapper>
);

export default SearchContainer;
