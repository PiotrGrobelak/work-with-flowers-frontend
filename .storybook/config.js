import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import StoryRouter from 'storybook-react-router';
import GlobalStyle from '../src/theme/GlobalStyle';
import { theme } from '../src/theme/Theme';
import store from '../src/store';

addDecorator(StoryRouter());
addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {story()}
    </ThemeProvider>
  </Provider>
));
