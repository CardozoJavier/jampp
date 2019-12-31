import React, { useState } from 'react';
import { HeaderOptionDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import dropdownProps from './dropdownProps';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import { UniqueOption } from '../UniqueOption';
import { ButtonInput } from '../Button/styles';

/**
 * HeaderOptionDropdown component should be called with
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} menuTitle - (Required) It's the title in dropdown opened.
 * @param {Array} children - (Required) They're the options to be display.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for button and dropdown of unique option selectable.
 */
const HeaderOptionDropdown = ({ children, text, type, menuTitle, disabled, }) => {
  const { defaultClassName, optionalClassName } = dropdownProps[type];
  const chevronDefaultClassName = dropdownProps.chevron.defaultClassName;
  const chevronOptionalClassName = dropdownProps.chevron.optionalClassName;

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(chevronDefaultClassName);

  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, chevronDefaultClassName, chevronOptionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  return (
    <>
      <HeaderOptionDropdownContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick}>
        <ButtonInput children={text} />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            className: bemDestruct(chevron),
          }}
        />
      </HeaderOptionDropdownContainer>
      <OptionList menuTitle={menuTitle} type="header-unique-option" OptionItem={UniqueOption} children={children} className={className} />
    </>
  );
};

export default HeaderOptionDropdown;
