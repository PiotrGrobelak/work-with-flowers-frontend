import React from 'react';
import styled from 'styled-components';

const StyledButtonIcon = styled.button`
  display: block;
  width: ${({ small }) => (small ? '2.4rem' : '3.5rem')};
  height: ${({ small }) => (small ? '2.4rem' : '3.5rem')};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70% 70%;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border: 2px solid transparent;
  border-radius: 50%;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
    :hover,
    :active {
      border: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
      box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.4);
    }
  }
`;

const ButtonIcon = ({ ...props }) => {
  return <StyledButtonIcon type="button" data-testid="buttonIcon" {...props} />;
};

export default ButtonIcon;
