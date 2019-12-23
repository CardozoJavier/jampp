import React from 'react';
import {
  Radio,
  TextContainer,
  InputTypeRadio,
  RadioButtonLabel,
  RadioButtonSuffix,
  RadioButtonContainer,
  InputTypeRadioContainer,
} from './styles';
import { bemDestruct } from '../../utils';

const RadioButton = ({ id, name, text = '', value, onChange, checked, suffix, disabled }) => (
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
    <TextContainer>
      <RadioButtonLabel
        htmlFor={id}
        checked={checked}
        disabled={disabled}
        className={bemDestruct('input label--default', disabled)}
      >
        {text}
      </RadioButtonLabel>
      {suffix && <RadioButtonSuffix>{suffix}</RadioButtonSuffix>}
    </TextContainer>
  </RadioButtonContainer>
);

export default RadioButton;