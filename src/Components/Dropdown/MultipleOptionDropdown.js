import React, { useState } from 'react';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import dropdownProps from './dropdownProps';

/**
 * MultipleOptionDropdown component should be called with
 * @param {String} type - (Required) Define dropdown classes for styling.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Array} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 */
const MultipleOptionDropdown = ({ text, children, type = 'basic', leftIcon, disabled }) => {
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
      <MultipleOptionList children={children} className={className} />
    </>
  );
};

export default MultipleOptionDropdown;
