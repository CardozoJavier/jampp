import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
  DownChevronIcon,
} from '../src/Components/UI/Icons';

import {
  InputBasic,
  InputAccessory,
  InputLabel,
  InputControlled,
} from '../src/Components/InputField';
export default {
  title: 'Input'
};

export const Basic = () => (
  <>
    <InputBasic placeholder="Text" type="basic" />
    <InputBasic placeholder="Text" type="basic" disabled />
  </>
);

export const WithIcon = () => (
  <>
    <InputAccessory placeholder="Text" type="accessory-left" icon={SearchIcon} />
    <InputAccessory placeholder="Text" type="accessory-right" icon={DownChevronIcon} />
    <InputAccessory placeholder="Text" type="accessory-right" icon={DownChevronIcon} disabled />
  </>
);

export const InputWithLabel = () => (
  <>
    <InputLabel placeholder="Text" label="Text" id="input1" type="label-right" icon={DownChevronIcon} />
    <InputBasic placeholder="Text" label="Text" id="input2" type="basic" />
  </>
);

export const WithBoldPlaceholder = () => (
  <InputControlled label="Text" boldPlaceholder="Text" placeholder="text" type="controlled" id="input1" />
);