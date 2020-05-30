import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'actions';
import Button from 'components/atoms/Button/Button';
import LogoIcon from 'assets/icons/Logo.svg';

const StyledNaviagtion = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
`;

const StyledLinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const StyledLinkItem = styled.li`
  border-left: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
`;

const StyledLinkButton = styled(Button)`
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGrey};
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
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease-in-out, background-color 0.3s ease-in-out;
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGrey};
    background-color: ${({ theme }) => theme.colors.secondaryGrey};
  }
`;

const Navigation = ({ user, isAuthenticated, logout }) => {
  const { _id, username, role } = user;
  const guestLinks = (
    <>
      <StyledLinkItem>
        <StyledLinkButton primary="true" as={NavLink} to={routes.login}>
          Zaloguj
        </StyledLinkButton>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLinkButton primary="true" as={NavLink} to={routes.register}>
          Zarejestruj
        </StyledLinkButton>
      </StyledLinkItem>
    </>
  );

  const userLinks = (
    <>
      <StyledLinkItem>
        <StyledLinkButton
          primary="true"
          as={NavLink}
          to={role === 'employer' ? `${role}/${_id}` : `${role}/${_id}`}
        >
          {username}
        </StyledLinkButton>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLinkButton primary="true" onClick={() => logout()} as={NavLink} to={routes.logout}>
          Wyloguj
        </StyledLinkButton>
      </StyledLinkItem>
    </>
  );

  return (
    <StyledNaviagtion>
      <StyledLogoLink to="/" />
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
    _id: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
