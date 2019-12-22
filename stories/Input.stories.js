import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
} from '../src/Components/UI/Icons';

import {
  InputControlled,
  InputField,
} from '../src/Components/InputField';
export default {
  title: 'Input'
};

export const Basic = () => (
  <InputField placeholder="Text" type="basic-medium" />
);

export const WithIcon = () => (
  <InputField placeholder="Text" type="icon-small-left" icon={SearchIcon} />
);

export const InputWithLabel = () => (
  <InputField placeholder="Text" label="Label" id="id1" type="basic-medium" />
);

export const WithBoldPlaceholder = () => (
  <InputControlled label="Text" boldPlaceholder="Text" placeholder="text" type="controlled-medium" id="input1" />
);

export const WithErrorMessage = () => (
  <>
    <InputField
      errorMessage="Warning here"
      placeholder="Input value"
      label="Label"
      id="input1" 
      type="error-message-medium"
    />

    <InputField
      placeholder="Input value"
      label="Label"
      id="input2" 
      type="error-message-medium"
      disabled={true}
    />
  </>
);