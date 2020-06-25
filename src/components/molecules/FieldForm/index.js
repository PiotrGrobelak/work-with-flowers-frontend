import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledFieldForm = styled.p`
  margin: 0.8rem;
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  ${({ as }) =>
    as &&
    css`
      padding: 0;
      min-height: 15rem;
      max-height: 55rem;
      width: 100%;
      max-width: 25rem;
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
