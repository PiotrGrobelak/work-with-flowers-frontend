import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import { StyledAside, StyledList, StyledLink } from './index.styled';

const SideBar = ({ id, logout }) => {
  return (
    <StyledAside>
      <StyledList>
        <li>
          <StyledLink to={`/employer/offer/${id}`}>Dodaj ofertę</StyledLink>
        </li>
        <li>
          <StyledLink to={`/employer/${id}`}>Twóje Oferty</StyledLink>
        </li>
        <li>
          <StyledLink onClick={() => logout()} to={routes.logout}>
            Wyloguj
          </StyledLink>
        </li>
      </StyledList>
    </StyledAside>
  );
};

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
  id: PropTypes.string,
};

SideBar.defaultProps = {
  id: '',
};

export default SideBar;
