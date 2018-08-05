import React from 'react';
import { storiesOf } from '@storybook/react';

import ExampleComponent from '../ExampleComponent';

storiesOf('ExampleComponent', module)
  .add('Variant 1', () => (
    <ExampleComponent text="Hue hue hue" />
  ))
  .add('Variant 2 (no text)', () => (
    <ExampleComponent text="" />
  ));
