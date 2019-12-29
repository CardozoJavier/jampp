import React from 'react';

import { SwitchGroup } from '../src/Components/Switch';
import { Button } from '../src/Components';

export default {
  title: 'Switch',
};

/**
 * SwitchGroup component should be used with
 * @prop {string} type - It`s used to styling component.
 * @prop {array} children - They're the options to be display.
 * @prop {function} onChange - Callback to trigger on onChange event. It receive the id option in first argument .
 * 
 *  Option component should be used with
 *  @prop {string} label - It's a text to be display inside button.
 *  @prop {id} id - It's an unique ID to identifier each option in SwitchGroup.
 */
export const Switch = () => (
  <>
    <SwitchGroup type="button" onChange={(id) => alert(id + ' is selected')}>
      <Option label="Choice" id="option1" />
      <Option label="Choice" id="option2" />
      <Option label="Choice" id="option3" />
    </SwitchGroup>

    <SwitchGroup type="button" disabled={true}>
      <Option label="Choice" id="option1" />
      <Option label="Choice" id="option2" />
      <Option label="Choice" id="option3" />
    </SwitchGroup>

    <Button type='option-default-medium' id="option1">
      <strong>Button</strong> Text
    </Button>
  </>
);