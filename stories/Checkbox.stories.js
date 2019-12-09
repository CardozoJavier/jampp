import React from 'react';
import '../src/main.css';
import { Checkbox } from '../src/Components';
import { palette } from '../src/Components/styles';

export default {
  title: 'Checkbox',
};

export const Option = () => (
  <>
    <Checkbox type="normal" label="Option" right />
    <Checkbox type="normal" label="Option" left />
    <Checkbox type="normal" label="Option" right disabled />
  </>
);

