import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60% 60%;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border: 2px solid transparent;
  border-radius: 50%;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.3s ease-in-out, border 0.3s ease-in-out;
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.secondaryBlue};
    box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.1);
  }
`;

export default ButtonIcon;
