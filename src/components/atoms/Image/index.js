import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './index.styled';

const Image = ({ height, width, direction, ...props }) => (
  <StyledImage
    height={height}
    width={width}
    direction={direction}
    data-testid="image"
    {...props}
  />
);

Image.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  direction: PropTypes.string,
};

Image.defaultProps = {
  height: 0,
  width: 0,
  direction: '',
};
export default Image;
