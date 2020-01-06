import React from 'react';

import { SwitchGroup } from '../src/Components/Switch';
import { Option } from '../src/Components/OptionList/styles';
import { Button } from '../src/Components';

export default {
  title: 'Switch',
};

/**
 * SwitchGroup component should be used with
 * @prop {Node} children - (Required) They're the options to be display.
 * @prop {String} type - (Optional) It's for use a different option component. 'options' is default value.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * 
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 */
export const Group = () => (
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
  </>
);

/**
 * SwitchGroup component should be used with
 * @prop {Node} children - (Required) They're the options to be display.
 * @prop {String} type - (Optional) It's for use a different option component. 'options' is default value.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * 
 *  Button component should be used with
 *  @prop {String} label - (Required) Text to be display inside button.
 *  @prop {String} type - (Required) Define button classes for styling.
 *  @prop {Boolean} fixed - (Optional) Disabled move up transform on hover.
 *  @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 *  @prop {Function} icon - (Optional) Function that returns an svg icon.
 *  @prop {Function} onClick - (Optional) Callback to trigger on onClick event.
 *  @prop {Node} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 */
export const WithBoldText = () => (
  <SwitchGroup type="button">
    <Button type='option-default-medium' id="option1">
      <strong>Button</strong> Text
    </Button>
    <Button type='option-default-medium' id="option2">
      <strong>Button</strong> Text
    </Button>
  </SwitchGroup>
);