import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'redux/actions/sessionActions';
import { toggleMobileNavigation as toggleMobileNavigationAction } from 'redux/actions/uiActions';
import { useWindowSize } from 'helpers/useWindowSize';
import { theme as view } from 'theme/Theme';
import NavigationList from 'components/molecules/NaviagtionList';
import NavigationLinks from 'components/molecules/NaviagtionLinks';
import ButtonIcon from 'components/atoms/ButtonIcon';
import LogoIcon from 'assets/icons/Logo.svg';
import HamburgerIcon from 'assets/icons/hamburger-menu.svg';
import CloseIcon from 'assets/icons/close.svg';

const StyledNaviagtion = styled.nav`
  position: relative;
  display: flex;
  height: ${({ theme }) => theme.navHeight}rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 5px -3px ${({ theme }) => theme.colors.secondaryBlack};
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
  height: 5rem;
  width: 5rem;
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
  const [isMobileView, setMobileView] = useState(false);
  const windowWidth = useWindowSize();

  useEffect(() => {
    if (windowWidth.width < view.responsive.md.slice(0, 3)) {
      return setMobileView(true);
    }
    return setMobileView(false);
  }, [windowWidth.width]);

  const renderNavigationLinks = (
    <>
      <NavigationLinks
        isAuthenticated={isAuthenticated}
        isMobileView={isMobileView}
        toggleMobileNavigation={toggleMobileNavigation}
        logout={logout}
        routes={routes}
        role={role}
        id={id}
        username={username}
      />
    </>
  );

  function renderNavigationList() {
    if (isMobileView) {
      return (
        <>
          <StyledMenuButton
            aria-label="Otwórz lub zamknij menu"
            type="button"
            onClick={() => toggleMobileNavigation()}
            icon={open ? CloseIcon : HamburgerIcon}
          />
          <NavigationList isMobileView={isMobileView} open={open}>
            {renderNavigationLinks}
          </NavigationList>
        </>
      );
    }
    return <NavigationList>{renderNavigationLinks}</NavigationList>;
  }

  return (
    <StyledNaviagtion>
      <StyledLogoLink aria-label="Idz do strony głównej" to="/" />
      {renderNavigationList()}
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
