import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './index.styled';

const Heading = ({ children, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.string,
};

Heading.defaultProps = {
  children: '',
};

export default Heading;
