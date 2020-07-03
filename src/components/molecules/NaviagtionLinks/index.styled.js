import styled, { css } from 'styled-components';
import { iconBeforeElement } from 'theme/mixins';
import Link from 'components/atoms/Link';

export const StyledLinkItem = styled.li`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    position: relative;
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
  margin-left: 1rem;
  padding: 1rem;
  height: 5rem;
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
    margin-left: 0;
    height: 6rem;
    justify-content: center;
  }
`;
