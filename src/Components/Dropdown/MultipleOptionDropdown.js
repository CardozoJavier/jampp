import React, { useState } from 'react';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';

import { palette } from '../styles';
const { gray } = palette;

const triggerAction = () => setTimeout(() => alert('You clicked me!'), 1000);

const MultipleOptionDropdown = ({ label, children, defaultClassName, optionalClassName, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState('chevron chevron--default__closed');
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, 'chevron chevron--default__closed', 'chevron chevron--default__opened');

  const handleClick = () => {
    // triggerAction();
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(className)} onClick={handleClick}>
        <ButtonInput
          children={label || children}
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
      <MultipleOptionList className={className} options={modalOptions} />
    </>
  );
};

export default MultipleOptionDropdown;

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
