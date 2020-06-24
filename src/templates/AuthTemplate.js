import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation';
import Image from 'components/atoms/Image';
import FirstTemplateImage from 'assets/image/art_thinking.svg';
import SecondTemplateImage from 'assets/image/farm_girl.svg';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 5px;
  height: calc(100vh - 63px);
  justify-content: center;
  align-items: center;
`;

const StyledAuthCard = styled.div`
  margin-top: 50px;
  padding: 25px 10px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  border-radius: 5px;
  box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
  z-index: 1;
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <Navigation />
      <StyledWrapper>
        <StyledAuthCard>{children}</StyledAuthCard>
        <Image
          direction="left"
          src={FirstTemplateImage}
          alt="praca w kwiaciarni"
          width={500}
          height={500}
        />
        <Image
          direction="right"
          src={SecondTemplateImage}
          alt="praca jako ogrodnik"
          width={500}
          height={500}
        />
      </StyledWrapper>
    </>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;
