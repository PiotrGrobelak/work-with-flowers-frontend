import { css } from 'styled-components';

export const iconBeforeElement = css`
  ::before {
    content: '';
    display: inline-block;
    margin-right: 0.4rem;
    height: ${({ height }) => height && `${height}px`};
    width: ${({ width }) => width && `${width}px`};
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

export const scrollBar = css`
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.thirdaryBlue};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondaryBlue};
  }
`;
