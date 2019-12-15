import React, { useState } from 'react';
import { SwitchGroupContainer } from './styles';
import { bemDestruct, settingClassName } from '../../utils';

const SwitchGroup = ({ children, className, OptionItem, disabled }) => {
  const childrenParsed = settingClassName(children);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, currentValue) => {
    const inputsArray = settingClassName(children, currentValue);
    setArray(inputsArray);
  }

  return (
    <SwitchGroupContainer className={bemDestruct(className)}>
      {array.map((input) => (
        <OptionItem
          key={input.value}
          label={input.label}
          value={input.value}
          color={input.color}
          className={input.className}
          handleCheck={handleCheck}
          disabled={disabled}
        />
      ))}
    </SwitchGroupContainer>
  );
};

export default SwitchGroup;
