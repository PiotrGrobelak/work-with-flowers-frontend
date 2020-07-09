import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = css`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, whiteText }) =>
    whiteText ? theme.colors.primaryWhite : theme.colors.primaryBlack};
  text-decoration: none;
  cursor: pointer;
`;

export const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`
  ${styles}
`;

export const Anchor = styled.a`
  ${styles}
  display: inline-block;
  width: 100%;
  line-height: 3rem;
`;
