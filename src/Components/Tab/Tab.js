import React from 'react';
import PropTypes from 'prop-types';
import { TabContainer, TabText, InputContainer, InputRadio, TabButton } from './styles';
import { bemDestruct } from '../../utils';
import { IconGenerator } from '../UI/Icons';

/**
 * Tab component should be called with
 * @param {String} id - (Required) It's an unique ID to identifier each tab in TabGroup.
 * @param {String} name - (Required) String to handle radiobuttons into a group.
 * @param {String} text - (Required) It's the name of tab.
 * @param {Boolean} checked - (Required) Indicate if tab is selected or not.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Boolean} disabled - (Optional) Disable component if is true.
 * @return {React Component} A view for an individual tab.
 */
const Tab = ({ id, name, text, checked, onChange, icon, disabled }) => (
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

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.func,
  disabled: PropTypes.bool,
};

Tab.defaultProps = {
  onChange: () => null,
  icon: () => null,
  disabled: false,
};

export default Tab;