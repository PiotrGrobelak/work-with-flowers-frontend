import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = css`
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.primaryBlack};
  text-decoration: none;
  padding: 10px;
  height: 60px;
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryGrey};
  }
`;

const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to } = props;
  if (to) {
    return <StyledNavLink {...props} />;
  }
  return <Anchor />;
};

Link.propTypes = {
  to: PropTypes.string,
};

Link.defaultProps = {
  to: null,
};

export default Link;
