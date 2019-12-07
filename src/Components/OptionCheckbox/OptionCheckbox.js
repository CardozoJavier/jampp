import React, { useState } from 'react';
import { OptionCheckboxContainer } from './styles';
import { Label } from '../InputField/styles';
import { bemDestruct, settingClassName } from '../../utils';
import { IconGenerator, CheckIcon } from '../UI/Icons';
import { palette } from '../styles';

const { action } = palette;

const OptionCheckbox = ({ children }) => {
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
    array.map((input) => (
      <OptionCheckboxContainer
        key={input.value}
        className={bemDestruct(input.className)}
        onClick={(e) => handleCheck(e, input.value)}
      >
        <Label>{ input.label }</Label>
        <IconGenerator
          renderIcon={CheckIcon}
          props={{
            right: '10px',
            fill: action,
            width: '14px',
            height: '10px',
            className: bemDestruct(input.className),
          }}
        />
      </OptionCheckboxContainer>
    ))
  );
};

export default OptionCheckbox;
