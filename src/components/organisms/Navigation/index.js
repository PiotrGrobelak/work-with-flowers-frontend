import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'redux/actions/sessionActions';
import { toggleMobileNavigation as toggleMobileNavigationAction } from 'redux/actions/uiActions';
import { useWindowSize } from 'helpers/useWindowSize';
import { iconBeforeElement } from 'theme/mixins';
import { theme as view } from 'theme/Theme';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Link from 'components/atoms/Link';
import LogoIcon from 'assets/icons/Logo.svg';
import AvatarIcon from 'assets/icons/Avatar.svg';
import HamburgerIcon from 'assets/icons/hamburger-menu.svg';
import CloseIcon from 'assets/icons/close.svg';

const animateBGC = ({ theme: { colors } }) => {
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

const StyledNaviagtion = styled.nav`
  position: relative;
  display: flex;
  height: ${({ theme }) => theme.navHeight}rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 5px -3px ${({ theme }) => theme.colors.secondaryBlack};
`;

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
  z-index: 900;
  background-color: transparent;
  animation: ${({ open }) => open && animateBGC} 1s both;
`;

const StyledMobileList = styled.ul`
  display: flex;
  margin: 0 0 0 25%;
  padding: 10rem 0 0;
  height: calc(100vh - ${({ theme }) => theme.navHeight}rem);
  width: 75%;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  list-style: none;
`;

const StyledLinkItem = styled.li`
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    position: relative;
    ::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -2;
      border-left: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
      transform: translateY(-100%);
      transition: transform 0.25s ease-in-out,
        background-color 0.25s ease-in-out;
    }
    :hover {
      ::before {
        transform: translateY(0%);
        background-color: ${({ theme }) => theme.colors.thirdaryBlue};
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 1rem;
  height: 6rem;
  min-width: 12rem;
  justify-content: center;
  align-items: center;
  ${({ icon }) =>
    icon &&
    css`
      ${iconBeforeElement};
    `}
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  height: 6rem;
  width: 100%;
  max-width: 34rem;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
`;

const StyledMenuButton = styled(ButtonIcon)`
  height: 6rem;
  width: 6rem;
  border-radius: 0;
  box-shadow: none;
  border: none;
`;

const Navigation = ({
  user,
  isAuthenticated,
  logout,
  toggleMobileNavigation,
  open,
}) => {
  const { _id: id, username, role } = user;
  const windowSize = useWindowSize();

  const guestLinks = (
    <>
      <StyledLinkItem>
        <StyledLink onClick={() => toggleMobileNavigation()} to={routes.login}>
          Zaloguj
        </StyledLink>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLink
          onClick={() => toggleMobileNavigation()}
          to={routes.register}
        >
          Zarejestruj
        </StyledLink>
      </StyledLinkItem>
    </>
  );

  const userLinks = (
    <>
      <StyledLinkItem>
        <StyledLink
          icon={AvatarIcon}
          height={34}
          width={34}
          to={role === 'employer' ? `/${role}/${id}` : `/${role}/${id}`}
          onClick={() => toggleMobileNavigation()}
        >
          {username}
        </StyledLink>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLink
          onClick={() => {
            logout();
            toggleMobileNavigation();
          }}
          to={routes.logout}
        >
          Wyloguj
        </StyledLink>
      </StyledLinkItem>
    </>
  );

  function renderNavigation() {
    if (windowSize.width < view.responsive.md.slice(0, 3)) {
      return (
        <>
          <StyledMenuButton
            style={{ zIndex: '999' }}
            type="button"
            onClick={() => toggleMobileNavigation()}
            icon={open ? CloseIcon : HamburgerIcon}
          />
          <StyledMobileWrapper open={open}>
            <StyledMobileList>
              {isAuthenticated ? userLinks : guestLinks}
            </StyledMobileList>
          </StyledMobileWrapper>
        </>
      );
    }
    return (
      <StyledDesktopList>
        {isAuthenticated ? userLinks : guestLinks}
      </StyledDesktopList>
    );
  }

  return (
    <StyledNaviagtion>
      <StyledLogoLink aria-label="Go to main page" to="/" />
      {renderNavigation()}
    </StyledNaviagtion>
  );
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.sessionReducer;
  const { user } = state.sessionReducer;
  const { open } = state.uiReducer;
  return {
    isAuthenticated,
    user,
    open,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
  toggleMobileNavigation: () => dispatch(toggleMobileNavigationAction),
});

Navigation.propTypes = {
  toggleMobileNavigation: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    _id: PropTypes.string,
  }),
};

Navigation.defaultProps = {
  user: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
