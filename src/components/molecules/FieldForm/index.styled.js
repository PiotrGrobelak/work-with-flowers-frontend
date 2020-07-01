import styled, { css } from 'styled-components';

export const StyledFieldForm = styled.p`
  margin: 0.8rem;
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  ${({ as }) =>
    as &&
    css`
      padding: 0;
      min-height: 15rem;
      max-height: 55rem;
      width: 100%;
      max-width: 25rem;
      list-style: none;
    `}
`;
