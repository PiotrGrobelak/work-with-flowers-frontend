import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import GearIcon from 'assets/icons/gear.svg';

const rotateImage = keyframes`
 0% {transform: rotate(0deg) }
 100% {transform: rotate(360deg)}
`;

const StyledWrapper = styled.div`
  display: flex;
  height: calc(100vh - 63px);
  grid-column: 3 / 3;
  grid-row: 2/2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  margin: 4rem 0;
  height: 12rem;
  width: 12rem;
  animation: ${rotateImage} 10s linear infinite;
`;

const WorkingView = ({ greetings }) => {
  const history = useHistory();
  return (
    <StyledWrapper data-testid="working-view">
      <Heading>{greetings}</Heading>
      <StyledImage src={GearIcon} alt="Strona w budowie" />
      <Paragraph style={{ marginBottom: '8rem' }}>Strona w budowie</Paragraph>
      <Button onClick={() => history.goBack()}>Powrót</Button>
    </StyledWrapper>
  );
};

WorkingView.propTypes = {
  greetings: PropTypes.string,
};

WorkingView.defaultProps = {
  greetings: 'Witaj użytkowniku',
};

export default WorkingView;
