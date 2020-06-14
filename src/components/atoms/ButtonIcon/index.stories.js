import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from '.';
import Icon from '../../../assets/icons/Courier.svg';

storiesOf('Button Icon', module).add('with Icon', () => <ButtonIcon icon={Icon} />);
