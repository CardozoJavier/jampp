import React, { useState } from 'react';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { palette } from '../styles';
import { OptionList } from '../OptionList';
import dropdownProps from './dropdownProps';
import { UniqueOption } from '../UniqueOption';

const { gray } = palette;

const OptionDropdown = ({ text, children, type = 'basic', leftIcon, disabled }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick}>
        {leftIcon &&
            <IconGenerator
              renderIcon={leftIcon}
              props={{}}
              disabled={disabled}
            />
          }
        <ButtonInput children={text} />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            className: bemDestruct(chevron),
          }}
          disabled={disabled}
        />
      </ButtonDropdownContainer>
      <OptionList type="unique-option" OptionItem={UniqueOption} children={children} className={className} />
    </>
  );
};

export default OptionDropdown;
