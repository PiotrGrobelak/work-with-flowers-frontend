import styled from 'styled-components';

export const StyledWrapper = styled.div`
  /* display: none; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 500px;
  background-color: tomato;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;
