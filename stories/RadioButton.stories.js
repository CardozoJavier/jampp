import React from 'react';
import '../src/main.css';
import { RadioButton } from '../src/Components';
import { RadioButtonGroup } from '../src/Components/RadioButton';

export default {
  title: 'RadioButton',
};

/**
 * RadioButtonGroup component should be called with
 * @prop {Node} children - (Required) Array of radio buttons to be displayed.
 * @prop {String} name - (Required) String to handle radiobuttons into a group.
 * @prop {String} defaultValue - (Optional)  It's to check a default radio button. It should match with RadioButton id.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the radio button id in first argument.
 * 
 *  RadioButton component should be called with
 *  @prop {String} id - (Required) It's an unique ID to identifier each radiobutton in group.
 *  @prop {String} text - (Optional) Text to be displayed next to radio button.
 *  @prop {String} suffix - (Optional) Text to be displayed below of radio button.
 *  @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 *
 */
export const Radio = () => (
  <RadioButtonGroup type="normal-right-label" name="group1" defaultValue="radio2" onChange={e => console.log(e)}>
    <RadioButton text="Option" id="radio1" />
    <RadioButton text="Option" id="radio2" />
    <RadioButton text="Option" suffix="Text line to go here" id="radio3" />
    <RadioButton text="Disabled option" id="radio4" disabled />
  </RadioButtonGroup>
);

