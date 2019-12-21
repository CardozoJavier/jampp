import React, { useState } from 'react';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import dropdownProps from './dropdownProps';

import { palette } from '../styles';
const { gray } = palette;

const MultipleOptionDropdown = ({ text, children, type = 'basic', leftIcon, disabled }) => {
  const defaultClassName = dropdownProps[type].defaultClassName;
  const optionalClassName = dropdownProps[type].optionalClassName;

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
      <ButtonDropdownContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick}>
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
