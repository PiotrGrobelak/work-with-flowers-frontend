import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'actions';
import Link from 'components/atoms/Link';
import LogoIcon from 'assets/icons/Logo.svg';

const StyledNaviagtion = styled.nav`
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primaryBlue};
`;

const StyledLinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const StyledLinkItem = styled.li`
  border-left: 2px solid ${({ theme }) => theme.colors.primaryBlue};
`;

const StyledLink = styled(Link)`
  padding: 10px;
  height: 60px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  }
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  height: 60px;
  min-width: 340px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border-right: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease-in-out, background-color 0.3s ease-in-out;
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBlue};
    background-color: ${({ theme }) => theme.colors.secondaryGrey};
  }
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
        <StyledLink to={role === 'employer' ? `${role}/${id}` : `${role}/${id}`}>
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
      <h1 aria-label="Work with Flowers">
        <StyledLogoLink to="/" />
      </h1>
      <StyledLinksList>{isAuthenticated ? userLinks : guestLinks}</StyledLinksList>
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
    _id: PropTypes.string.isRequired,
  }),
};

Navigation.defaultProps = {
  user: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
