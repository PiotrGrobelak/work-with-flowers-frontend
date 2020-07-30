import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation';
import Image from 'components/atoms/Image';
import FirstTemplateImage from 'assets/image/art_thinking.svg';
import SecondTemplateImage from 'assets/image/farm_girl.svg';

const StyledWrapper = styled.main`
  position: relative;
  display: flex;
  margin: 0 0.5rem;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    height: calc(100vh - 63px);
    align-items: center;
    overflow-y: hidden;
  }
`;

const StyledAuthCard = styled.div`
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  max-width: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  @media (min-width: ${({ theme }) => theme.responsive.md}) {
    margin: 5rem 0 0;
    padding: 2.5rem 1rem;
    border-radius: 5px;
    box-shadow: 0px 3px 10px -2px ${({ theme }) => theme.colors.secondaryBlack};
    z-index: 1;
  }
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
          width={50}
          height={50}
        />
        <Image
          direction="right"
          src={SecondTemplateImage}
          alt="praca jako ogrodnik"
          width={50}
          height={50}
        />
      </StyledWrapper>
    </>
  );
};

AuthTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthTemplate;
