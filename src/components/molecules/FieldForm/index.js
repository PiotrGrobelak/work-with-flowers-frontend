import React from 'react';
import PropTypes from 'prop-types';
import { StyledFieldForm } from './index.styled';

const FieldForm = ({ children, as }) => (
  <StyledFieldForm as={as}>{children}</StyledFieldForm>
);

FieldForm.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
};

FieldForm.defaultProps = {
  as: '',
};

export default FieldForm;
