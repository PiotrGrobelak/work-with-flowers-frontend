import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = css`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, whiteText }) =>
    whiteText ? theme.colors.primaryWhite : theme.colors.primaryBlack};
  text-decoration: none;
`;

const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to, href } = props;
  if (to) {
    return <StyledNavLink to={to} data-testid="navLink" {...props} />;
  }
  return <Anchor href={href} data-testid="anchor" {...props} />;
};

Link.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
};

Link.defaultProps = {
  to: null,
  href: null,
};

export default Link;
