import React from 'react';
import '../src/main.css';
import { Checkbox } from '../src/Components';
import { palette } from '../src/Components/styles';

export default {
  title: 'Checkbox',
};

/**
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *  @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 */
export const Option = () => (
  <>
    <Checkbox type="normal" label="Option" right />
    <Checkbox type="normal" label="Option" left />
    <Checkbox type="normal" label="Option" right disabled />
  </>
);

