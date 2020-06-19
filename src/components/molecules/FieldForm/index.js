import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledFieldForm = styled.p`
  margin: 8px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  ${({ as }) =>
    as &&
    css`
      padding: 0;
      min-height: 150px;
      max-height: 550px;
      width: 100%;
      max-width: 250px;
      list-style: none;
    `}
`;

const FielForm = ({ children, as }) => (
  <StyledFieldForm as={as}>{children}</StyledFieldForm>
);

FielForm.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

FielForm.defaultProps = {
  as: '',
};

export default FielForm;
