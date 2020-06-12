import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '.';

storiesOf('Link', module)
  .add('Anchor', () => <Link href="example-link.com">Anchor</Link>)
  .add('Navlink', () => <Link to="/">NavLink</Link>);
