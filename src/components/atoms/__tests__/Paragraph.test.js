import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { theme } from 'theme/Theme';
import Paragraph from '../Paragraph';

describe('Paragraph component', () => {
  afterEach(cleanup);
  it('render content', () => {
    const text = 'render content';
    const { getByText } = render(<Paragraph theme={theme}>{text}</Paragraph>);
    expect(getByText(/render content/i)).toBeInTheDocument();
  });
  it('render text-align with center prop', () => {
    const text = 'render content';
    const { getByTestId } = render(
      <Paragraph center theme={theme}>
        {text}
      </Paragraph>,
    );
    const paragraph = getByTestId(/paragraph/i);
    expect(paragraph).toHaveStyleRule('text-align', 'center');
  });
  it('render font-weight with bold prop', () => {
    const text = 'render content';
    const { getByTestId } = render(
      <Paragraph bold theme={theme}>
        {text}
      </Paragraph>,
    );
    const paragraph = getByTestId(/paragraph/i);
    expect(paragraph).toHaveStyleRule('font-weight', `${600}`);
  });
});
