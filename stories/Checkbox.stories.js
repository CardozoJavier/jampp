import React from 'react';
import '../src/main.css';

import {
  OptionGroup,
} from '../src/Components/Checkbox/styles';

import { Checkbox } from '../src/Components';

export default {
  title: 'Checkbox',
};

export const Options = () => (
  <>
    <OptionGroup>
      <Checkbox 
        label="Top option"
        defaultClassName="checkbox basic--default-top"
        optionalClassName="checkbox basic--default-top__selected"
      />

      <Checkbox 
        label="Option"
        defaultClassName="checkbox basic--default-middle"
        optionalClassName="checkbox basic--default-middle__selected"
      />

      <Checkbox 
        label="Bottom option"
        defaultClassName="checkbox basic--default-bottom"
        optionalClassName="checkbox basic--default-bottom__selected"
      />
    </OptionGroup>
  </>
);
