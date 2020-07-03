import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';

export const StyledOfferForm = styled.form`
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
    margin: 0;
    height: 100%;
    width: 100%;
    max-width: 140rem;
    max-height: 75rem;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const StyledRequirements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin: 1rem 3rem 3rem;
  width: 160px;
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
    margin: auto 0 2rem 0;
  }
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0.2rem auto;
`;
