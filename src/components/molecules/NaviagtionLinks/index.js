import React from 'react';
import PropTypes from 'prop-types';
import AvatarIcon from 'assets/icons/Avatar.svg';
import LoginIcon from 'assets/icons/login.svg';
import LogoutIcon from 'assets/icons/logout.svg';
import RegisterIcon from 'assets/icons/register.svg';
import AddOfferIcon from 'assets/icons/add-list.svg';
import OffersIcon from 'assets/icons/list.svg';
import { StyledLinkItem, StyledLink } from './index.styled';

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
      {isMobileView && (
        <StyledLinkItem>
          <StyledLink
            icon={OffersIcon}
            height={24}
            width={24}
            to={routes.offers}
            onClick={() => toggleMobileNavigation()}
          >
            Oferty
          </StyledLink>
        </StyledLinkItem>
      )}
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
      {isMobileView && (
        <>
          <StyledLinkItem>
            <StyledLink
              icon={AddOfferIcon}
              height={24}
              width={24}
              to={`/employer/offer/${id}`}
              onClick={() => toggleMobileNavigation()}
            >
              Dodaj ofertę
            </StyledLink>
          </StyledLinkItem>
          <StyledLinkItem>
            <StyledLink
              icon={OffersIcon}
              height={24}
              width={24}
              onClick={() => {
                toggleMobileNavigation();
              }}
              to={`/employer/${id}`}
            >
              Twóje Oferty
            </StyledLink>
          </StyledLinkItem>
        </>
      )}
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
    offers: PropTypes.string,
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
