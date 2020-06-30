import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/atoms/Link';
import { iconBeforeElement } from 'theme/mixins';
import AvatarIcon from 'assets/icons/Avatar.svg';
import LoginIcon from 'assets/icons/login.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import RegisterIcon from 'assets/icons/register.svg';

const StyledLinkItem = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  :nth-of-type(1) {
    border-top: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  }
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    position: relative;
    border-bottom: none;
    :nth-of-type(1) {
      border-top: none;
    }
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
      transition: transform 0.25s ease-in-out,
        background-color 0.25s ease-in-out;
    }
    :hover {
      ::before {
        transform: translateY(0%);
        background-color: ${({ theme }) => theme.colors.thirdaryBlue};
      }
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  padding: 1rem;
  height: 6rem;
  width: 100%;
  min-width: 12rem;
  justify-content: flex-start;
  align-items: center;
  ${({ icon }) =>
    icon &&
    css`
      ${iconBeforeElement};
    `}
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    justify-content: center;
  }
`;

const NavigationLinks = ({
  isAuthenticated,
  isMobileView,
  toggleMobileNavigation,
  logout,
  routes,
  role,
  id,
  username,
}) => {
  const guestLinks = (
    <>
      <StyledLinkItem>
        <StyledLink
          icon={isMobileView ? LoginIcon : undefined}
          height={24}
          width={24}
          onClick={() => isMobileView && toggleMobileNavigation()}
          to={routes.login}
        >
          Zaloguj
        </StyledLink>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLink
          icon={isMobileView ? RegisterIcon : undefined}
          height={24}
          width={24}
          onClick={() => isMobileView && toggleMobileNavigation()}
          to={routes.register}
        >
          Zarejestruj
        </StyledLink>
      </StyledLinkItem>
    </>
  );

  const userLinks = (
    <>
      <StyledLinkItem>
        <StyledLink
          icon={AvatarIcon}
          height={isMobileView ? 24 : 34}
          width={isMobileView ? 24 : 34}
          to={role === 'employer' ? `/${role}/${id}` : `/${role}/${id}`}
          onClick={() => isMobileView && toggleMobileNavigation()}
        >
          {username}
        </StyledLink>
      </StyledLinkItem>
      <StyledLinkItem>
        <StyledLink
          icon={isMobileView ? LogoutIcon : undefined}
          height={24}
          width={24}
          onClick={() => {
            logout();
            isMobileView && toggleMobileNavigation();
          }}
          to={routes.logout}
        >
          Wyloguj
        </StyledLink>
      </StyledLinkItem>
    </>
  );
  return <>{isAuthenticated ? userLinks : guestLinks}</>;
};

NavigationLinks.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isMobileView: PropTypes.bool.isRequired,
  toggleMobileNavigation: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  routes: PropTypes.shape({
    login: PropTypes.string.isRequired,
    logout: PropTypes.string.isRequired,
    register: PropTypes.string.isRequired,
  }).isRequired,
  username: PropTypes.string,
  role: PropTypes.string,
  id: PropTypes.string,
};

NavigationLinks.defaultProps = {
  username: '',
  role: '',
  id: '',
};

export default NavigationLinks;
