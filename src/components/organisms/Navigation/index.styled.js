import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon';
import LogoIcon from 'assets/icons/Logo.svg';

export const StyledNavigation = styled.nav`
  position: relative;
  display: flex;
  height: ${({ theme }) => theme.navHeight}rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 5px -3px ${({ theme }) => theme.colors.secondaryBlack};
`;

export const StyledLogoLink = styled(NavLink)`
  display: block;
  height: 6rem;
  width: 100%;
  max-width: 34rem;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
`;

export const StyledMenuButton = styled(ButtonIcon)`
  height: 5rem;
  width: 5rem;
  border-radius: 0;
  box-shadow: none;
  border: none;
`;
