import React from 'react';
import '../src/main.css';
import { Checkbox } from '../src/Components';

export default {
  title: 'Checkbox',
};

/**
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Optional) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} inverted - (Optional) If true, the checkbox is put on the left text.
 *  @prop {Boolean} left - (Optional) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} id - (Optional) It's an unique ID to identifier each checkbox.
 *  @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive two arguments: checkbox id and true/false value.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *  @prop {Boolean} checked - (Optional) It's determines if checkbox is checked or not by default.
 *  @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 */
export const Option = () => (
  <>
    <Checkbox id="opt1" label="Option" checked />
    <Checkbox id="opt2" label="Option" inverted onChange={(id, value) => console.log(id + ' is ' + value)} />
    <Checkbox id="opt3" label="Option" disabled />
  </>
);

