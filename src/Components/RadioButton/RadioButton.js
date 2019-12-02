import React, { useState } from 'react';
import { RadioButtonContainer } from './styles';
import { Label } from '../InputField/styles';
import { bemDestruct } from '../../utils';
import { IconGenerator, CheckIcon } from '../UI/Icons';
import { palette } from '../styles';

const { action } = palette;

/**
 * Define className for each radio button that can be in top, middle, or bottom position
 */
const getPosition = (array, index) => {
  const isTop = index === 0;
  const isBottom = (array.length - 1) === index;
  const className = 'radiobutton basic--default';

  if (isTop) {
    return `${className}-top`;
  } else if (isBottom) {
    return `${className}-bottom`;
  } else {
    return `${className}-middle`;
  }
}

/**
 * Children is parsed for setting initial className to each radio button
 */
const settingClassName = (children, currentValue) => {
  const inputsArray = children.map(({ props: { label, value } }, index) => {
    const className = currentValue === value ? `${getPosition(children, index)}__selected` : `${getPosition(children, index)}`;
    return {
      label,
      value,
      className,
    };
  });

  return inputsArray;
}

const RadioButton = ({ children }) => {
  const childrenParsed = settingClassName(children);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When a radio button is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, currentValue) => {
    const inputsArray = settingClassName(children, currentValue);
    setArray(inputsArray);
  }


  return (
    array.map((input) => (
      <RadioButtonContainer
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
      </RadioButtonContainer>
    ))
  );
};

export default RadioButton;
