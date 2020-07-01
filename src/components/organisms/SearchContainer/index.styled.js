import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ArrowIcon from 'assets/icons/Arrow.svg';
import ButtonIcon from 'components/atoms/ButtonIcon';

export const StyledWrapper = styled.div`
  position: relative;
  padding: 0.5rem 0 1rem;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  box-shadow: 0px 3px 5px -3px ${({ theme }) => theme.colors.secondaryBlack};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding: 0.5rem 0 0 3rem;
    height: 7rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledDesktopList = styled.ul`
  margin: 0;
  padding-left: 2rem;
  min-width: 40rem;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const StyledSearchWrapper = styled.div`
  position: absolute;
  top: -${({ theme }) => theme.navHeight}rem;
  right: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  transform: ${({ isOpenSearchBar }) =>
    isOpenSearchBar ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;

export const StyledMobileList = styled.ul`
  display: flex;
  margin: 0;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 5px;
  list-style: none;
  :before {
    content: attr(data-header);
    margin-bottom: 3rem;
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: bold;
  }
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    align-items: flex-start;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0;
  height: 3rem;
  max-width: 12rem;
  width: 100%;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryWhite};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    padding-left: 2rem;
    height: 4rem;
    max-width: 18rem;
    text-align: left;
    background-image: url(${ArrowIcon});
    background-repeat: no-repeat;
    background-position: 115% 50%;
    background-size: 40% 40%;
    border: 2px solid ${({ theme }) => theme.colors.primaryWhite};
  }
`;

export const StyledMenuButton = styled(ButtonIcon)`
  margin: auto 0 auto auto;
  height: 5rem;
  width: 5rem;
  border-radius: 0;
  box-shadow: none;
  border: none;
`;
