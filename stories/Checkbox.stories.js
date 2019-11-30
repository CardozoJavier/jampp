import React from 'react';
import '../src/main.css';

import {
  OptionGroup,
} from '../src/Components/Checkbox/styles';
import {
  CheckIcon,
} from '../src/Components/UI/Icons';
import { palette } from '../src/Components/styles';

import { Checkbox } from '../src/Components';

export default {
  title: 'Checkbox',
};

const { white, action } = palette;

export const Options = () => (
  <>
    <OptionGroup>
      <Checkbox 
        label="Top option"
        Icon={CheckIcon}
        iconProps={{
          right: '10px',
          fill: action,
          width: '14px',
          height: '10px',
        }}
        defaultClassName="checkbox basic--default-top"
        optionalClassName="checkbox basic--default-top__selected"
      />

      <Checkbox 
        label="Option"
        Icon={CheckIcon}
        iconProps={{
          right: '10px',
          fill: action,
          width: '14px',
          height: '10px',
        }}
        defaultClassName="checkbox basic--default-middle"
        optionalClassName="checkbox basic--default-middle__selected"
      />

      <Checkbox 
        label="Bottom option"
        Icon={CheckIcon}
        iconProps={{
          right: '10px',
          fill: action,
          width: '14px',
          height: '10px',
        }}
        defaultClassName="checkbox basic--default-bottom"
        optionalClassName="checkbox basic--default-bottom__selected"
      />
    </OptionGroup>

    <OptionGroup>
      <Checkbox
        label="Option"
        Icon={CheckIcon}
        iconProps={{
          right: '13px',
          top: '5px',
          fill: white,
          width: '9px',
          height: '7px',
        }}
        defaultClassName="checkbox basic--filled-top"
        optionalClassName="checkbox basic--filled-top__selected"
      />

      <Checkbox
        label="Option"
        Icon={CheckIcon}
        iconProps={{
          right: '13px',
          top: '5px',
          fill: white,
          width: '9px',
          height: '7px',
        }}
        defaultClassName="checkbox basic--filled-middle"
        optionalClassName="checkbox basic--filled-middle__selected"
      />

      <Checkbox
        label="Bottom option"
        Icon={CheckIcon}
        iconProps={{
          right: '13px',
          top: '5px',
          fill: white,
          width: '9px',
          height: '7px',
        }}
        defaultClassName="checkbox basic--filled-bottom"
        optionalClassName="checkbox basic--filled-bottom__selected"
      />
    </OptionGroup>
  </>
);
