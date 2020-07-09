import styled, { keyframes } from 'styled-components';

const rotateImage = keyframes`
 0% {transform: rotate(0deg) }
 100% {transform: rotate(360deg)}
`;

export const StyledWrapper = styled.div`
  display: flex;
  height: calc(100vh - 63px);
  grid-column: 3 / 3;
  grid-row: 2/2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  margin: 4rem 0;
  height: 12rem;
  width: 12rem;
  animation: ${rotateImage} 10s linear infinite;
`;
