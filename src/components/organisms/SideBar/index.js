import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { routes } from 'routes';
import Link from 'components/atoms/Link';

const StyledAside = styled.aside`
  padding-top: 10rem;
  grid-column: 1/1;
  grid-row: 1 / span 2;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 999;
`;

const StyledList = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 1.2rem 0;
  padding: 1.5rem 1rem;
  width: 160px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primaryWhite};
  border: 2px solid white;
  border-left: 0;
  border-radius: 0 15px 15px 0;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
  }
`;

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
