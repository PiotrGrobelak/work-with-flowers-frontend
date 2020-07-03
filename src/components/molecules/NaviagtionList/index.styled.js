import styled, { keyframes } from 'styled-components';

const animateBackgroundColor = ({ theme: { colors } }) => {
  return keyframes`
    0% {
      background-color: transparent;
    }
    30%{
      background-color: transparent;
    }
    100%{
      background-color: ${colors.secondaryBlack};
    }
  `;
};

export const StyledDesktopList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

export const StyledMobileWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.navHeight}rem;
  right: 0;
  margin: 0;
  height: calc(100vh - ${({ theme }) => theme.navHeight}rem);
  width: 100%;
  transform: ${({ isOpenMobileNavigation }) =>
    isOpenMobileNavigation ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  background-color: transparent;
  animation: ${({ isOpenMobileNavigation }) =>
      isOpenMobileNavigation && animateBackgroundColor}
    1s both;
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

export const StyledMobileList = styled.ul`
  display: flex;
  margin: 0 0 0 20%;
  padding: 5rem 0 0;
  height: calc(99vh - ${({ theme }) => theme.navHeight}rem);
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  list-style: none;
  overflow-y: scroll;
  :before {
    content: attr(data-header);
    margin-bottom: 3rem;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
  }
`;
