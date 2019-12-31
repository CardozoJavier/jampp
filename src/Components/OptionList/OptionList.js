import React, { useState } from 'react';
import { OptionCheckboxGroup, MenuTitle } from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import optionListProps from './optionListProps';


/**
 * OptionList component should be called with
 * @param {Array} children - (Required) The options to be displayed.
 * @param {String} type - (Required) It's defines the classes for button styles.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @param {String} menuTitle - (Optional) It's the title in dropdown opened.
 * @param {Function} OptionItem - (Required) It's each option component styled to be displayed into list.
 * @return {React Component} A view in which one option can be selected.
 */
const OptionList = ({ children, type, className, menuTitle, OptionItem }) => {
  const { defaultClassName } = optionListProps[type];
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
