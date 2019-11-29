import React, { useState } from 'react';
import { DropdownInput, DropdownModal } from './styles';
import { AvatarIcon } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator } from '../UI/Icons';
import { palette } from '../styles';
const { gray } = palette;

const Dropdown = ({ iconDropdown, optionDropdown, defaultClassName, optionalClassName, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);  
  }

  return (
    <DropdownInput onClick={handleClick}>
      <IconGenerator
        renderIcon={AvatarIcon}
        props={{
          src: optionDropdown,
          width: '40px',
          height: '40px',
          borderRadius: '100%',
        }}
      />
      <IconGenerator
        renderIcon={iconDropdown}
        props={{
          position: 'unset',
          fill: gray.g4,
          width: '24px',
          height: '24px',
          margin: '0 5px',
        }}
      />
      <DropdownModal className={bemDestruct(className, disabled)} />
    </DropdownInput>
  );
};

export default Dropdown;
