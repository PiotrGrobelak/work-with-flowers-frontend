import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDesktopList,
  StyledMobileWrapper,
  StyledMobileList,
} from './index.styled';

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
