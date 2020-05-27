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
  margin-top: 150px;
  padding-bottom: 25px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
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
