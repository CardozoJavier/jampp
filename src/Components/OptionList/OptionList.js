import React, { useState } from 'react';
import { OptionCheckboxGroup, MenuTitle } from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import { CheckIcon, IconGenerator } from '../UI/Icons';
import { palette } from '../styles';
import optionListProps from './optionListProps';

const { white } = palette;

const OptionList = ({ children, type, disabled, className, menuTitle, OptionItem }) => {
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
    <OptionCheckboxGroup className={bemDestruct(className, disabled)}>
      {menuTitle && <MenuTitle>{menuTitle}</MenuTitle>}
      {array.map((input) => (
        <OptionItem
          className={input.className}
          handleCheck={handleCheck}
          label={input.label}
          color={input.color}
          key={input.id}
          id={input.id}
        />
      ))}
    </OptionCheckboxGroup>
  );
};

export default OptionList;
