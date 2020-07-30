import React from 'react';
import { LoadingContainer, LoadingWrapper, Circle } from './index.styled';

const Loading = () => (
  <LoadingContainer role="status">
    <LoadingWrapper>
      <Circle />
      <Circle />
      <Circle />
    </LoadingWrapper>
  </LoadingContainer>
);

export default Loading;
