import React, { useState } from 'react';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';

import { palette } from '../styles';
const { gray } = palette;
const classesName = {
  normal: {
    defaultClassName: "dropdown button--gray-right__closed",
    optionalClassName: "dropdown button--gray-right__opened",
  },
  chevron: {
    defaultClassName: 'chevron chevron--default__closed',
    optionalClassName: 'chevron chevron--default__opened',
  },
};

const MultipleOptionDropdown = ({ label, children, type = 'normal', disabled }) => {
  const defaultClassName = classesName[type].defaultClassName;
  const optionalClassName = classesName[type].optionalClassName;

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(classesName.chevron.defaultClassName);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, classesName.chevron.defaultClassName, classesName.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(className)} onClick={handleClick}>
        <ButtonInput
          children={label}
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
      <MultipleOptionList children={children} className={className} />
    </>
  );
};

export default MultipleOptionDropdown;


