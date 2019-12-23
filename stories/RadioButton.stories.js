import React from 'react';
import '../src/main.css';
import { RadioButton } from '../src/Components';
import { RadioButtonGroup } from '../src/Components/RadioButton';

export default {
  title: 'RadioButton',
};

export const Radio = () => (
  <RadioButtonGroup type="normal-right-label" name="group1" defaultValue="radio2">
    <RadioButton text="Option" id="radio1" value="option 1" />
    <RadioButton text="Option" id="radio2" value="option 2" />
    <RadioButton text="Disabled option" id="radio3" value="option 3" disabled />
  </RadioButtonGroup>
);

