import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPanel = styled.div`
  display: grid;
  height: calc(100vh - 63px);
  grid-template-columns: 240px 200px 1fr;
  grid-template-rows: 30px 1fr;
`;

const PanelTemplate = ({ children }) => <StyledPanel>{children}</StyledPanel>;

PanelTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PanelTemplate;
