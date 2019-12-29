import React from 'react';

import { SwitchGroup } from '../src/Components/Switch';
import { Button } from '../src/Components';

export default {
  title: 'Switch',
};

/**
 * SwitchGroup component should be used with
 * @prop {array} children - (Required) They're the options to be display.
 * @prop {string} type - (Optional) It's for use a different option component. 'options' is default value.
 * @prop {function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @prop {boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * 
 *  Option component should be used with
 *  @prop {string} label - (Optional) It's a text to be display inside button.
 *  @prop {id} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 */
export const Switch = () => (
  <>
    <SwitchGroup onChange={(id) => console.log(id + ' is selected')}>
      <Option label="Choice" id="option1" />
      <Option label="Choice" id="option2" />
      <Option label="Choice" id="option3" />
    </SwitchGroup>

    <SwitchGroup disabled={true}>
      <Option label="Choice" id="option1" />
      <Option label="Choice" id="option2" />
      <Option label="Choice" id="option3" />
    </SwitchGroup>

    <SwitchGroup type="button">
      <Button type='option-default-medium' id="option1">
        <strong>Button</strong> Text
      </Button>
      <Button type='option-default-medium' id="option2">
        <strong>Button</strong> Text
      </Button>
    </SwitchGroup>
  </>
);