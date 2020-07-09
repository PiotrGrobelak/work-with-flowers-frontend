import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from '.';

storiesOf('Paragraph', module).add('Defaul paragraph', () => <Paragraph>Some paragraph</Paragraph>);
