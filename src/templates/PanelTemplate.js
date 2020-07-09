import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { scrollBar } from 'theme/mixins';

const StyledPanel = styled.div`
  position: relative;
  /* display: grid; */
  height: calc(100vh - 63px);
  /* grid-template-columns: 20rem 6rem 1fr; */
  /* grid-template-rows: 3rem 1fr; */
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  overflow-y: scroll;
  ${scrollBar};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    display: grid;
    grid-template-columns: 15rem 3rem 1fr;
  }
  @media (min-width: ${({ theme }) => theme.responsive.xl}) {
    grid-template-columns: 20rem 6rem 1fr;
    grid-template-rows: 3rem 1fr;
    overflow-y: hidden;
  }
`;

const PanelTemplate = ({ children }) => <StyledPanel>{children}</StyledPanel>;

PanelTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PanelTemplate;
