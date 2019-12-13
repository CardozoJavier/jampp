import React, { useState } from 'react';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';

import { palette } from '../styles';
const { gray } = palette;
const classesName = {
  solid: {
    defaultClassName: "dropdown button--solid-right__closed",
    optionalClassName: "dropdown button--solid-right__opened",
  },
  basic: {
    defaultClassName: 'dropdown button--basic-right__closed',
    optionalClassName: 'dropdown button--basic-right__opened',
  },
  chevron: {
    defaultClassName: 'chevron chevron--default__closed',
    optionalClassName: 'chevron chevron--default__opened',
  },
  noBorder: {
    defaultClassName: 'dropdown button--noBorder-right__closed',
    optionalClassName: 'dropdown button--noBorder-right__opened',
  },
  noBorderLink: {
    defaultClassName: 'dropdown button--noBorderLink-left__closed',
    optionalClassName: 'dropdown button--noBorderLink-left__opened',
  },
};

const MultipleOptionDropdown = ({ text, children, type = 'normal', disabled }) => {
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
          children={text}
          className={bemDestruct(className, disabled)}
        />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            position: 'unset',
            margin: '0 5px',
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


