import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

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

const StyledDesktopList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const StyledMobileWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.navHeight}rem;
  right: 0;
  margin: 0;
  height: calc(100vh - ${({ theme }) => theme.navHeight}rem);
  width: 100%;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  background-color: transparent;
  animation: ${({ open }) => open && animateBackgroundColor} 1s both;
  z-index: 999;
`;

const StyledMobileList = styled.ul`
  display: flex;
  margin: 0 0 0 25%;
  padding: 5rem 0 0;
  height: calc(99vh - ${({ theme }) => theme.navHeight}rem);
  width: 75%;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-left-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  list-style: none;
  :before {
    content: attr(data-header);
    margin-bottom: 3rem;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
  }
`;

export const DesktopList = ({ children }) => (
  <StyledDesktopList>{children}</StyledDesktopList>
);

export const MobileList = ({ children, open }) => (
  <StyledMobileWrapper open={open}>
    <StyledMobileList data-header="Menu">{children}</StyledMobileList>
  </StyledMobileWrapper>
);

const NavigationList = ({ ...props }) => {
  const { isMobileView } = props;
  if (isMobileView) {
    return <MobileList {...props} />;
  }
  return <DesktopList {...props} />;
};

export default NavigationList;

DesktopList.propTypes = {
  children: PropTypes.element.isRequired,
};

MobileList.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
};

NavigationList.propTypes = {
  isMobileView: PropTypes.bool,
};

NavigationList.defaultProps = {
  isMobileView: false,
};
