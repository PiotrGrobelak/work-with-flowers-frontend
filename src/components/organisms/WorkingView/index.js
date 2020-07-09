import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import GearIcon from 'assets/icons/gear.svg';
import { StyledWrapper, StyledImage } from './index.styled';

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
