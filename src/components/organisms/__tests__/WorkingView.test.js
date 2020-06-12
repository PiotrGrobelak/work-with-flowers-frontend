import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/Theme';
import WorkingView from '../WorkingView';

const renderWorkingView = () =>
  render(
    <ThemeProvider theme={theme}>
      <WorkingView />
    </ThemeProvider>,
  );

describe('WorkingView component', () => {
  afterEach(cleanup);
  it('render WorkingView structure', () => {
    const { getByTestId } = renderWorkingView();
    expect(getByTestId(/working-view/i)).toBeInTheDocument();
  });
  it('render default greetings', () => {
    const { getByText } = renderWorkingView();
    expect(getByText(/witaj/i)).toBeInTheDocument();
  });
  it('render coming greetings', () => {
    const { getByText, rerender } = renderWorkingView();
    rerender(
      <ThemeProvider theme={theme}>
        <WorkingView greetings="hello" />
      </ThemeProvider>,
    );
    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});
