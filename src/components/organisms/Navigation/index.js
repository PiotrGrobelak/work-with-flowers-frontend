import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'actions';
import { iconBeforeElement } from 'theme/mixins';
import Link from 'components/atoms/Link';
import LogoIcon from 'assets/icons/Logo.svg';
import AvatarIcon from 'assets/icons/Avatar.svg';

const StyledNaviagtion = styled.nav`
  position: relative;
  display: flex;
  height: ${({ theme }) => theme.navHeight}rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 5px -3px ${({ theme }) => theme.colors.secondaryBlack};
`;

const StyledLinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const StyledLinkItem = styled.li`
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
    transition: transform 0.25s ease-in-out, background-color 0.25s ease-in-out;
  }
  :hover {
    ::before {
      transform: translateY(0%);
      background-color: ${({ theme }) => theme.colors.thirdaryBlue};
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

const Navigation = ({ user, isAuthenticated, logout }) => {
  const { _id: id, username, role } = user;

  const guestLinks = (
    <>
      <StyledLinkItem>
        <StyledLink to={routes.login}>Zaloguj</StyledLink>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLink to={routes.register}>Zarejestruj</StyledLink>
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
        >
          {username}
        </StyledLink>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLink onClick={() => logout()} to={routes.logout}>
          Wyloguj
        </StyledLink>
      </StyledLinkItem>
    </>
  );

  return (
    <StyledNaviagtion>
      <StyledLogoLink aria-label="Go to main page" to="/" />
      <StyledLinksList>
        {isAuthenticated ? userLinks : guestLinks}
      </StyledLinksList>
    </StyledNaviagtion>
  );
};

const mapStateToProps = ({ isAuthenticated, user }) => ({
  isAuthenticated,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
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
