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

/**
 * RadioButton component should be called with
 * @param {String} id - (Required) It's an unique ID to identifier each radiobutton in group.
 * @param {Boolean} checked - (Required) Indicate if tab is selected or not.
 * @param {String} name - (Required) Name of radiobuttons group necesary to handle check states.
 * @param {String} text - (Optional) Text to be displayed next to radio button.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the radio button id in first argument.
 * @param {String} suffix - (Optional) Text to be displayed below of radio button.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 */
const RadioButton = ({ id, name, text = '', onChange, checked, suffix, disabled }) => (
  <RadioButtonContainer>
    <InputTypeRadioContainer disabled={disabled}>
      <InputTypeRadio
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange(id)}
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