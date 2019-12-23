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
  <div style={{ width: '250px' }}>
    <InputField placeholder="Text" type="basic-medium" />
  </div>
);

export const WithIcon = () => (
  <div style={{ width: '250px' }}>
    <InputField placeholder="Text" type="icon-small-left" icon={SearchIcon} />
  </div>
);

export const InputWithLabel = () => (
  <div style={{ width: '250px' }}>
    <InputField placeholder="Text" label="Label" id="id1" type="basic-medium" />
  </div>
);

export const WithBoldPlaceholder = () => (
  <div style={{ width: '250px' }}>
    <InputControlled label="Text" boldPlaceholder="Text" placeholder="text" type="controlled-medium" id="input1" />
  </div>
);

export const WithErrorMessage = () => (
  <>
    <div style={{ width: '250px' }}>
      <InputField
        errorMessage="Warning here"
        placeholder="Input value"
        label="Label"
        id="input1" 
        type="error-message-medium"
        />
    </div>

    <div style={{ width: '250px' }}>
      <InputField
        placeholder="Input value"
        label="Label"
        id="input2" 
        type="error-message-medium"
        disabled={true}
      />
    </div>
  </>
);