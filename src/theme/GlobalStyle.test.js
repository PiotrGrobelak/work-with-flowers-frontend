import React from 'react';
import { cleanup, render } from '@testing-library/react';
import GlobalStyle from './GlobalStyle';

afterEach(cleanup);

describe('GlobalStyles', () => {
  test('render GlobalStyles has box-sizing set', () => {
    const { container } = render(<GlobalStyle />);
    expect(container).toHaveStyle('box-sizing: border-box');
  });
});
