import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Button from 'components/atoms/Button/Button';
import TestComponents from 'components/molecules/testComponent';

function Root() {
  return (
    <Provider store={store}>
      <h1>Hello App</h1>
      <Button>Click me</Button>
      <TestComponents />
    </Provider>
  );
}

export default Root;
