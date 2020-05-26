import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from 'components/organisms/Naviagtion/Naviagtion';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAuthCard = styled.div`
  margin-top: 200px;
  padding: 50px;
  border: 1px solid black;
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      <StyledWrapper>
        <StyledAuthCard>{children}</StyledAuthCard>
      </StyledWrapper>
    </>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;
