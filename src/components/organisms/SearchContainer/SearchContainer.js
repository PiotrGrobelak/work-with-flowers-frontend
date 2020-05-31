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
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 6px 1px 2px 1px rgba(0, 0, 0, 0.4);
`;

const StyledList = styled.ul`
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

const StyledButton = styled(Button)`
  padding-left: 20px;
  width: 160px;
  text-align: left;
  border: 3px solid ${({ theme }) => theme.colors.primaryWhite};
`;

const SearchContainer = () => (
  <StyledWrapper>
    <StyledButton secondary>Miasto</StyledButton>
    <StyledList>
      <StyledItem>
        <ButtonIcon icon={FloristIcon} />
        <span>Florysta</span>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={CourierIcon} />
        <span>Kurier</span>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={GardenerIcon} />
        <span>Ogród</span>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={PracticeIcon} />
        <span>Praktyki</span>
      </StyledItem>
      <StyledItem>
        <ButtonIcon icon={ConservatorIcon} />
        <span>Konserwator</span>
      </StyledItem>
    </StyledList>
    <h2 style={{ margin: '0 0 0 50px', color: 'white' }}>SearchContainer</h2>
  </StyledWrapper>
);

export default SearchContainer;
