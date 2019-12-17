import React from 'react';

import { SwitchGroup, SwitchButton } from '../src/Components/Switch';
import { OptionList, Button } from '../src/Components';
import { OptionButtonContainer } from '../src/Components/Button/styles';

export default {
  title: 'Switch',
};

export const Switch = () => (
  <>
    <SwitchGroup OptionItem={SwitchButton} type="button">
      <Option label="Choice" id="option1" type="left" />
      <Option label="Choice" id="option2" type="middle" />
      <Option label="Choice" id="option3" type="right" />
    </SwitchGroup>

    <SwitchGroup OptionItem={SwitchButton} type="button" disabled={true}>
      <Option label="Choice" id="option1" type="left" />
      <Option label="Choice" id="option2" type="middle" />
      <Option label="Choice" id="option3" type="right" />
    </SwitchGroup>

    <Button type='option-default-medium'>
      <strong>Button</strong> Text
    </Button>
  </>
);