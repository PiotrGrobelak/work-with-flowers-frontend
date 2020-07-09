import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Image from '../Image';

describe('Image component', () => {
  afterEach(cleanup);
  it('render source by src', () => {
    const src = './exampleIamge.png';
    const { getByTestId } = render(<Image theme={theme} src={src} />);
    const img = getByTestId(/image/i);
    expect(img).toHaveAttribute('src', src);
    expect(img).toBeInTheDocument();
  });
  it('render alt attribute', () => {
    const alt = 'example alt';
    const { getByAltText } = render(<Image theme={theme} alt={alt} />);
    expect(getByAltText(alt)).toBeInTheDocument();
  });
  it('render with left prop direction', () => {
    const left = 'left';
    const { getByTestId } = render(<Image theme={theme} direction="left" />);
    const img = getByTestId(/image/i);
    expect(img).toHaveAttribute('direction', left);
    expect(img).toHaveStyleRule('left', '5%', {
      media: `(min-width: ${theme.responsive.md})`,
    });
  });
  it('render with right prop direction', () => {
    const right = 'right';
    const { getByTestId } = render(<Image theme={theme} direction="right" />);
    const img = getByTestId(/image/i);
    expect(img).toHaveAttribute('direction', right);
    expect(img).toHaveStyleRule('right', '5%', {
      media: `(min-width: ${theme.responsive.md})`,
    });
  });
  it('render with heigh and width prop', () => {
    const maxH = 2;
    const maxW = 3;
    const { getByTestId } = render(
      <Image theme={theme} height={maxH} width={maxW} />,
    );
    const img = getByTestId(/image/i);
    expect(img).toHaveAttribute('height', `${maxH}`);
    expect(img).toHaveAttribute('width', `${maxW}`);
    expect(img).toHaveStyleRule('max-height', '2rem', {
      media: `(min-width: ${theme.responsive.md})`,
    });
    expect(img).toHaveStyleRule('max-width', '3rem', {
      media: `(min-width: ${theme.responsive.md})`,
    });
  });
});
