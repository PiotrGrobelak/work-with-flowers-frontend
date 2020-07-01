import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';

export const StyledOfferForm = styled.form`
  padding: 1rem;
  height: 100%;
  max-height: 75rem;
  width: 100%;
  max-width: 140rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
`;

export const StyledRequirements = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin: auto 0 2rem 0;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0.2rem auto;
`;
