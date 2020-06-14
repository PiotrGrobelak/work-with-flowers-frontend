import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';

const StyledMessage = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme, big }) => (big ? theme.fontSizes.sm : theme.fontSizes.xxs)};
  color: ${({ theme }) => theme.colors.primaryRed};
  letter-spacing: 0.7px;
`;

const Message = ({ message }) => <StyledMessage as="span">{message}</StyledMessage>;

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: '',
};

export default Message;
