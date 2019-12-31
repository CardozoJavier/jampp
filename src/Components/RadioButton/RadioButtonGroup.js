import React, { useState } from 'react';
import { RadioButtonGroupContainer } from './styles';
import RadioButton from './RadioButton';

/**
 * RadioButtonGroup component should be called with
 * @param {Array} children - (Required) Array of radio buttons to be displayed.
 * @param {String} name - (Required) String to handle radiobuttons into a group.
 * @param {String} defaultValue - (Optional)  It's to check a default radio button. It should match with RadioButton id.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the radio button id in first argument.
 * @return {React Component} A view for radio buttons group.
 */
const RadioButtonGroup = ({ children, name, defaultValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (id) => {
    setSelectedOption(id);
    onChange && onChange(id);
  };

  return (
    <RadioButtonGroupContainer>
      {children.map(radio => (
        <RadioButton
          name={name}
          id={radio.props.id}
          key={radio.props.id}
          onChange={radio.props.disabled ? () => null : handleChange}
          text={radio.props.text}
          suffix={radio.props.suffix}
          disabled={radio.props.disabled}
          checked={selectedOption === radio.props.id}
        />
      ))}
    </RadioButtonGroupContainer>
  );
};

export default RadioButtonGroup;