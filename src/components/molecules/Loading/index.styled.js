import styled, { keyframes } from 'styled-components';

const scale = keyframes`
 to {
   transform: translate3d(0, -1.8rem, 0);
 }
`;

export const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

export const LoadingWrapper = styled.div`
  height: 20rem;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

export const Circle = styled.span`
  display: inline-block;
  margin: 0 0.6rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  box-shadow: 0px 3px 10px -3px ${({ theme }) => theme.colors.secondaryBlack};
  transform: translate3d(0);
  animation: ${scale} 0.6s infinite alternate;
  :nth-child(2) {
    background-color: ${({ theme }) => theme.colors.thirdaryBlue};
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    background-color: ${({ theme }) => theme.colors.secondaryBlue};
    animation-delay: 0.4s;
  }
`;
