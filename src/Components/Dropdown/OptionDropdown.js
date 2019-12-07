import React, { useState } from 'react';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionCheckboxGroup, Option } from '../OptionCheckbox/styles';
import { OptionCheckbox } from '../OptionCheckbox';
import { palette } from '../styles';

const { gray } = palette;

const OptionDropdown = ({ label, children, defaultClassName, optionalClassName, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState('chevron chevron--default__closed');
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, 'chevron chevron--default__closed', 'chevron chevron--default__opened');

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  }

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(className)} onClick={handleClick}>
        <ButtonInput
          children={label || children}
          className={bemDestruct(className, disabled)}
        />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            position: 'relative',
            right: '20px',
            fill: gray.g4,
            width: '16px',
            height: '16px',
            className: bemDestruct(chevron),
          }}
        />
      </ButtonDropdownContainer>
      
      <OptionCheckboxGroup className={bemDestruct(className)}>
        <OptionCheckbox>
          <Option label="Option 1" value="value1" />
          <Option label="Option 2" value="value2" />
          <Option label="Option 3" value="value3" />
          <Option label="Option 4" value="value4" />
        </OptionCheckbox>
      </OptionCheckboxGroup>
    </>
  );
};

export default OptionDropdown;
