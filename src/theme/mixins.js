import { css } from 'styled-components';

export const iconBeforeElement = css`
  ::before {
    content: '';
    display: inline-block;
    margin-right: 4px;
    height: ${({ height }) => height && `${height}px`};
    width: ${({ width }) => width && `${width}px`};
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;
