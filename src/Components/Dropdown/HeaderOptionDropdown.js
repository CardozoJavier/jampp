import React, { useState } from 'react';
import { HeaderOptionDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import dropdownProps from './dropdownProps';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import { UniqueOption } from '../UniqueOption';
import { ButtonInput } from '../Button/styles';

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
