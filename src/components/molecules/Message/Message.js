import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Message = ({ message }) => <Paragraph>{message}</Paragraph>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
