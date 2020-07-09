import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink, Anchor } from './index.styled';

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
