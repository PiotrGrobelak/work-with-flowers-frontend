import styled, { css } from 'styled-components';
import { iconBeforeElement } from 'theme/mixins';
import Link from 'components/atoms/Link';

export const StyledLinkItem = styled.li`
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

export const StyledLink = styled(Link)`
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
