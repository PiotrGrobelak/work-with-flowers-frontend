import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  width: 7.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-bottom: 0;
    width: 7.4rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledItemInfo = styled.span`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryBlack};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryWhite};
  }
`;
