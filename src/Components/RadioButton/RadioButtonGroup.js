import React, { useState } from 'react';
import { RadioButtonGroupContainer } from './styles';
import RadioButton from './RadioButton';

const RadioButtonGroup = ({ children, name, defaultValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleChange = (id, value, e) => {
    setSelectedOption(id);
    onChange && onChange(value, e);
  };

  return (
    <RadioButtonGroupContainer>
      {children.map(radio => (
        <RadioButton
          name={name}
          id={radio.props.id}
          key={radio.props.id}
          onChange={radio.props.disabled ? null : handleChange}
          text={radio.props.text}
          value={radio.props.value}
          disabled={radio.props.disabled}
          checked={selectedOption === radio.props.id}
        />
      ))}
    </RadioButtonGroupContainer>
  );
};

export default RadioButtonGroup;