import React from 'react';
import { TabContainer, TabText, InputContainer, InputRadio, TabButton } from './styles';
import { bemDestruct } from '../../utils';
import { IconGenerator } from '../UI/Icons';

/**
 * Tab component should be called with
 * @param {String} text - (Required) It's the name of tab.
 * @param {String} id - (Required) It's an unique ID to identifier each tab in TabGroup.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {String} name - (Required) String to handle radiobuttons into a group.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @param {Boolean} checked - (Required) Indicate if tab is selected or not.
 */
const Tab = ({ id, name, text, onChange, icon, checked, disabled }) => (
  <TabContainer>
    <InputContainer disabled={disabled}>
      <InputRadio
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange(id)}
      />
      <TabButton role="button">
        <TabText
          htmlFor={id}
          checked={checked}
          disabled={disabled}
          ifIcon={!!icon}
          className={bemDestruct('input label--default', disabled)}
          >
          {text}
        </TabText>
      </TabButton>
      {icon &&
        <IconGenerator
          renderIcon={icon}
          props={{
            checked,
          }}
        />
      }
    </InputContainer>
  </TabContainer>
);

export default Tab;