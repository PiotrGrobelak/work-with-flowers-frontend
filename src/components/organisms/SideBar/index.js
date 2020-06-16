import React from 'react';
import styled from 'styled-components';
import Link from 'components/atoms/Link';

const StyledAside = styled.aside`
  grid-column: 1/1;
  grid-row: 1 / span 2;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 1px 4px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 999;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  color: white;
`;

const SideBar = () => (
  <StyledAside>
    <StyledList>
      <li>
        <Link to="/">Dodaj ofertę</Link>
      </li>
      <li>
        <Link to="/">Twój Profil</Link>
      </li>
    </StyledList>
  </StyledAside>
);

export default SideBar;
