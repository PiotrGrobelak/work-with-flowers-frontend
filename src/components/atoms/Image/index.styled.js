import styled from 'styled-components';

export const StyledImage = styled.img`
  display: none;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    display: block;
    position: absolute;
    ${({ direction }) => (direction === 'left' ? 'left: 5%' : 'right: 5%')};
    ${({ direction }) =>
      direction === 'left' ? 'bottom: 20%' : 'bottom: 10%'};
    max-height: ${({ height }) => `${height}rem`};
    height: 100%;
    max-width: ${({ width }) => `${width}rem`};
    width: 100%;
    object-fit: contain;
  }
`;
