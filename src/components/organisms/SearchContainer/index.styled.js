import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ArrowIcon from 'assets/icons/Arrow.svg';

export const StyledWrapper = styled.div`
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

export const StyledList = styled.ul`
  margin: 0;
  padding-left: 2rem;
  min-width: 40rem;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const StyledItem = styled.li`
  display: flex;
  width: 7.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledItemInfo = styled.span`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const StyledButton = styled(Button)`
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
