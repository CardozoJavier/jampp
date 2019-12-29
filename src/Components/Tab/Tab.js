import React from 'react';
import { TabContainer, TabText, InputContainer, InputRadio, TabButton } from './styles';
import { bemDestruct } from '../../utils';
import { IconGenerator } from '../UI/Icons';

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