import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
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

const Navigation = () => (
  <StyledNaviagtion>
    <StyledLogoLink to="/">Logo</StyledLogoLink>
    <StyledLinksList>
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
    </StyledLinksList>
  </StyledNaviagtion>
);

export default Navigation;
