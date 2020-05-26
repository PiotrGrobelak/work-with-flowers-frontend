import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'actions';
import Button from 'components/atoms/Button/Button';

const StyledNaviagtion = styled.nav`
  height: 80px;
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
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGrey};
  }
`;

const StyledLogoLink = styled(NavLink)`
  height: 80px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  text-decoration: none;
`;

const Navigation = ({ user, isAuthenticated, logout }) => {
  const { _id, username, role } = user;
  const guestLinks = (
    <>
      <StyledLinkItem>
        <StyledLinkButton primary as={NavLink} to={routes.login}>
          Zaloguj
        </StyledLinkButton>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLinkButton primary as={NavLink} to={routes.register}>
          Zarejestruj
        </StyledLinkButton>
      </StyledLinkItem>
    </>
  );

  const userLinks = (
    <>
      <StyledLinkItem>
        <StyledLinkButton
          primary
          as={NavLink}
          to={role === 'employer' ? `${role}/${_id}` : `${role}/${_id}`}
        >
          {username}
        </StyledLinkButton>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLinkButton primary onClick={() => logout()} as={NavLink} to={routes.logout}>
          Wyloguj
        </StyledLinkButton>
      </StyledLinkItem>
    </>
  );

  return (
    <StyledNaviagtion>
      <StyledLogoLink to="/">Logo</StyledLogoLink>
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
