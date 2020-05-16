import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from 'routes';
import { logout as logoutAction } from 'actions';
import Button from 'components/atoms/Button/Button';

const StyledNaviagtion = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

const StyledLinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const StyledLinkItem = styled.li``;

const StyledLinkButton = styled(Button)`
  text-decoration: none;
`;

const StyledLogoLink = styled(NavLink)`
  margin: 1rem;
  text-decoration: none;
`;

const Navigation = ({ isAuthenticated, logout }) => {
  const guestLinks = (
    <>
      <StyledLinkItem>
        <StyledLinkButton as={NavLink} to={routes.login}>
          Zaloguj
        </StyledLinkButton>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLinkButton as={NavLink} to={routes.register}>
          Zarejestruj
        </StyledLinkButton>
      </StyledLinkItem>
    </>
  );

  const userLinks = (
    <StyledLinkItem>
      <StyledLinkButton
        onClick={() => logout()}
        as={NavLink}
        to={routes.logout}
      >
        Wyloguj
      </StyledLinkButton>
    </StyledLinkItem>
  );

  return (
    <StyledNaviagtion>
      <StyledLogoLink to="/">Logo</StyledLogoLink>
      <StyledLinksList>
        {isAuthenticated ? userLinks : guestLinks}
      </StyledLinksList>
    </StyledNaviagtion>
  );
};

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated });

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutAction());
  },
});

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
