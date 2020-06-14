import { css } from 'styled-components';

export const iconBeforeElement = css`
  ::before {
    content: '';
    display: inline-block;
    margin-right: 4px;
    height: 14px;
    width: 14px;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;
