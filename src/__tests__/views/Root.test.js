import React from 'react';
import { render } from '@testing-library/react';
import Root from 'views/Root';

describe('Root component', () => {
  it('render Application', () => {
    render(<Root />);
  });
});
