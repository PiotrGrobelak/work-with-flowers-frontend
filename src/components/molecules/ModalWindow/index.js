import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import { StyledWrapper } from './index.styled';

const ModalWindow = ({ confirm = true, cancel = true }) => (
  <StyledWrapper>
    <Paragraph>Modal Box</Paragraph>
    {confirm && <Button danger>Usuń</Button>}
    {cancel && <Button>Anuluj</Button>}
  </StyledWrapper>
);

ModalWindow.propTypes = {
  confirm: PropTypes.bool,
  cancel: PropTypes.bool,
};

ModalWindow.defaultProps = {
  confirm: false,
  cancel: false,
};

export default ModalWindow;
