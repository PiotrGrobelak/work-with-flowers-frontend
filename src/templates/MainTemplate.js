import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/Theme';

const StyledMain = styled.main`
  height: 100%;
  overflow-x: hidden;
  @media (min-width: ${theme.responsive.md}) {
    max-height: 100vh;
  }
`;

const MainTemplate = ({ children }) => (
  <StyledMain>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledMain>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
