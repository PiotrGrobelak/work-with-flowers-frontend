import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPanel = styled.div`
  display: grid;
  height: calc(100vh - 63px);
  grid-template-columns: 220px 80px 1fr;
  grid-template-rows: 30px 1fr;
  background-color: ${({ theme }) => theme.colors.primaryGrey};
`;

const PanelTemplate = ({ children }) => <StyledPanel>{children}</StyledPanel>;

PanelTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PanelTemplate;
