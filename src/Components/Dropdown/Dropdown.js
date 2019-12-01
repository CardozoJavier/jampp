import React, { useState } from 'react';
import { DropdownInput } from './styles';
import ModalCheckbox from '../ModalCheckbox';
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
    <>
      <DropdownInput className={bemDestruct(className)} onClick={handleClick}>
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
            position: 'relative',
            fill: gray.g4,
            width: '24px',
            height: '24px',
            margin: '0 5px',
            className: bemDestruct(className)
          }}
        />
      </DropdownInput>
      <ModalCheckbox className={className} options={modalOptions} />
    </>
  );
};

export default Dropdown;

const modalOptions = [
  {
    label: 'Option 1',
    defaultClassName: 'dropdown modal--filled-top',
    optionalClassName: 'dropdown modal--filled-top__selected',
  },
  {
    label: 'Option 2',
    defaultClassName: 'dropdown modal--filled-middle',
    optionalClassName: 'dropdown modal--filled-middle__selected',
  },
  {
    label: 'Option 2b',
    defaultClassName: 'dropdown modal--filled-middle',
    optionalClassName: 'dropdown modal--filled-middle__selected',
  },
  {
    label: 'Option 3',
    defaultClassName: 'dropdown modal--filled-bottom',
    optionalClassName: 'dropdown modal--filled-bottom__selected',
  },
];