import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import { theme } from '../src/theme/Theme';

addDecorator(StoryRouter());
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
