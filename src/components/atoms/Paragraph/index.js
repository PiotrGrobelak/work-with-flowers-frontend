import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './index.styled';

const Paragraph = ({ children, center, bold, ...props }) => (
  <StyledParagraph
    data-testid="paragraph"
    center={center}
    bold={bold}
    {...props}
  >
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  center: PropTypes.bool,
  bold: PropTypes.bool,
};

Paragraph.defaultProps = {
  center: false,
  bold: false,
};

export default Paragraph;
