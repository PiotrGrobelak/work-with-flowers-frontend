import React from 'react';
import { storiesOf } from '@storybook/react';
import OfferCard from '.';

const offer = {
  type: 'florist',
  _id: '4343',
};

storiesOf('OfferCard', module).add('Card', () => <OfferCard offer={offer} />);
