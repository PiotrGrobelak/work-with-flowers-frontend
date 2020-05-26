import styled, { css } from 'styled-components';

const Button = styled.button`
  ${({ primary }) =>
    primary &&
    css`
      height: 80px;
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      cursor: pointer;
      letter-spacing: 0.7px;
      color: ${({ theme }) => theme.colors.priamryBlack};
    `}
`;

export default Button;
