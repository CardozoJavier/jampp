import React, { useState } from 'react';
import { OptionCheckboxGroup, OptionLabel } from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import { CheckIcon, IconGenerator } from '../UI/Icons';
import { palette } from '../styles';
import optionListProps from './optionListProps';

const { white } = palette;

const OptionList = ({ children, type, disabled, className, OptionItem }) => {
  const { defaultClassName, optionalClassName, OptionContainer, iconProps, iconClassName } = optionListProps[type];
  const childrenParsed = settingClassName(children, -1, defaultClassName);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, id) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
  }

  return (
    <OptionCheckboxGroup className={bemDestruct(className)}>
      {array.map((input) => (
        <OptionContainer
          onClick={(e) => handleCheck(e, input.id, defaultClassName)}
          className={bemDestruct(input.className, disabled)}
          disabled={disabled}
          key={input.id}
        >
          <OptionLabel>{ input.label }</OptionLabel>
          <IconGenerator
            renderIcon={CheckIcon}
            props={{
              right: '10px',
              fill: white,
              width: '14px',
              height: '10px',
              className: bemDestruct(input.className),
            }}
          />
        </OptionContainer>
      ))}
    </OptionCheckboxGroup>
  );
};

export default OptionList;
