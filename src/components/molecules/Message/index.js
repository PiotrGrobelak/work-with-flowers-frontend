import React from 'react';
import PropTypes from 'prop-types';
import { StyledMessage } from './index.styled';

const Message = ({ message, error }) => {
  return (
    <StyledMessage bold error={error} as="span">
      {message}
    </StyledMessage>
  );
};

Message.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  error: PropTypes.bool,
};

Message.defaultProps = {
  message: '',
  error: true,
};

export default Message;
