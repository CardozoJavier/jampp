import React from 'react';

import { SwitchGroup } from '../src/Components/Switch';
import { Button } from '../src/Components';

export default {
  title: 'Switch',
};

export const Switch = () => (
  <>
    <SwitchGroup type="button">
      <Option label="Choice" id="option1" type="left" />
      <Option label="Choice" id="option2" type="middle" />
      <Option label="Choice" id="option3" type="right" />
    </SwitchGroup>

    <SwitchGroup type="button" disabled={true}>
      <Option label="Choice" id="option1" type="left" />
      <Option label="Choice" id="option2" type="middle" />
      <Option label="Choice" id="option3" type="right" />
    </SwitchGroup>

    <Button type='option-default-medium'>
      <strong>Button</strong> Text
    </Button>
  </>
);