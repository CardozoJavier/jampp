import React, { useState } from 'react';
import { OptionCheckboxGroup } from './styles';
import { bemDestruct, settingClassName } from '../../utils';

const OptionList = ({ children, className, OptionItem }) => {
  const childrenParsed = settingClassName(children);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, currentValue) => {
    console.log({ e, currentValue, className });
    const inputsArray = settingClassName(children, currentValue);
    setArray(inputsArray);
  }

  return (
    <OptionCheckboxGroup className={bemDestruct(className)}>
      {array.map((input) => (
        <OptionItem
          label={input.label}
          value={input.value}
          color={input.color}
          className={input.className}
          handleCheck={handleCheck}
        />
      ))}
    </OptionCheckboxGroup>
  );
};

export default OptionList;
