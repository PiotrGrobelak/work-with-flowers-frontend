import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  ${({ direction }) => (direction === 'left' ? 'left: 5%' : 'right: 5%')};
  ${({ direction }) => (direction === 'left' ? 'bottom: 20%' : 'bottom: 10%')};
  max-height: ${({ height }) => `${height}rem`};
  height: 100%;
  max-width: ${({ width }) => `${width}rem`};
  width: 100%;
  object-fit: contain;
`;

export default Image;
