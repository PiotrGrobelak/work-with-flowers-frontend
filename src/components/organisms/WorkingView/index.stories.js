import React from 'react';
import { storiesOf } from '@storybook/react';
import WorkingView from '.';

storiesOf('WorkingView', module)
  .add('Default view', () => <WorkingView />)
  .add('With greetings from props', () => <WorkingView greetings="Greeting from props" />);
