import React from 'react';
import { StyledButtonIcon } from './index.styled';

const ButtonIcon = ({ ...props }) => {
  return <StyledButtonIcon type="button" data-testid="buttonIcon" {...props} />;
};

export default ButtonIcon;
