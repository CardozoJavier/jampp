import React from 'react';

import { SwitchGroup, SwitchButton } from '../src/Components/Switch';
import { OptionList, Button } from '../src/Components';
import { OptionButtonContainer } from '../src/Components/Button/styles';

export default {
  title: 'Switch',
};

export const Switch = () => (
  <>
    <SwitchGroup OptionItem={SwitchButton} className="">
      <Option label="Choice" value="value1" type="left" />
      <Option label="Choice" value="value2" type="middle" />
      <Option label="Choice" value="value3" type="right" />
    </SwitchGroup>

    <SwitchGroup OptionItem={SwitchButton} className="" disabled={true}>
      <Option label="Choice" value="value1" type="left" />
      <Option label="Choice" value="value2" type="middle" />
      <Option label="Choice" value="value3" type="right" />
    </SwitchGroup>

    <OptionButtonContainer>
      <Button defaultClassName='button option--default-medium__selected' optionalClassName='button option--default-medium'>
        <strong>Button</strong> Text
      </Button>
    </OptionButtonContainer>
  </>
);