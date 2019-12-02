import React from 'react';
import '../src/main.css';
import { RadioButton } from '../src/Components';
import { RadioButtonGroup, Option } from '../src/Components/RadioButton/styles';

export default {
  title: 'Radio button',
};

export const OneOption = () => (
  <RadioButtonGroup>
    <RadioButton>
      <Option label="Option 1" value="value1" />
      <Option label="Option 2" value="value2" />
      <Option label="Option 3" value="value3" />
      <Option label="Option 4" value="value4" />
    </RadioButton>
  </RadioButtonGroup>
);
