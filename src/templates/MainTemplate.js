import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalTyles from 'theme/GlobalStyle';
import { theme } from 'theme/Theme';

const MainTemplate = ({ children }) => (
  <>
    <GlobalTyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
