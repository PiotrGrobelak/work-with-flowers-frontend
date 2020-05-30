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

const StyledWrapper = styled.div`
  padding-left: 30px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
`;

const StyledList = styled.ul`
  min-width: 400px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledItem = styled.li``;

const StyledButton = styled(Button)`
  padding-left: 20px;
  width: 160px;
  text-align: left;
  border: 2px solid white;
`;

const SearchContainer = () => (
  <StyledWrapper>
    <StyledButton secondary>Miasto</StyledButton>
    <StyledList>
      <StyledItem>
        <ButtonIcon icon={FloristIcon} />
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={CourierIcon} />
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={GardenerIcon} />
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={PracticeIcon} />
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={ConservatorIcon} />
      </StyledItem>
    </StyledList>
    <h2 style={{ margin: '0 0 0 50px', color: 'white' }}>SearchContainer</h2>
  </StyledWrapper>
);

export default SearchContainer;
