import React from 'react';
import { RadioButtonContainer, RadioButtonLabel, RadioButtonSubLabel, InputTypeRadioContainer, InputTypeRadio, Radio } from './styles';
import { bemDestruct } from '../../utils';

const RadioButton = ({ id, name, text, value, onChange, checked, subLabel, disabled }) => (
  <RadioButtonContainer>
    <InputTypeRadioContainer disabled={disabled}>
      <InputTypeRadio
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={e => onChange(id, value, e)}
      />
      <Radio className={bemDestruct('input radio--visible', disabled)} />
    </InputTypeRadioContainer>
    <RadioButtonLabel
      htmlFor={id}
      checked={checked}
      disabled={disabled}
      className={bemDestruct('input label--default', disabled)}
    >
      {text}
    </RadioButtonLabel>
    {subLabel && <RadioButtonSubLabel>{subLabel}</RadioButtonSubLabel>}
  </RadioButtonContainer>
);

export default RadioButton;