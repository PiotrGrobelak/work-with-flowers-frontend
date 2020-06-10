import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 35px;
  height: 35px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70% 70%;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border: 3px solid transparent;
  border-radius: 50%;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
  :hover {
    border: 3px solid ${({ theme }) => theme.colors.secondaryBlue};
    box-shadow: 1px 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default ButtonIcon;
