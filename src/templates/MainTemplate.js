import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/Theme';
import { useMobileView } from 'helpers/useMobileView';

const StyledMain = styled.main`
  height: 100vh;
  overflow: hidden;
`;

const MainTemplate = ({ children }) => {
  useMobileView();
  return (
    <StyledMain>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledMain>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
