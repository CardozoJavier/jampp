import React, { useState } from 'react';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, AvatarIcon } from '../UI/Icons';


import { palette } from '../styles';
const { gray } = palette;
const classesName = {
  normal: {
    defaultClassName: "dropdown button--default-right__closed",
    optionalClassName: "dropdown button--default-right__opened",
  },
  chevron: {
    defaultClassName: 'chevron chevron--default__closed',
    optionalClassName: 'chevron chevron--default__opened',
  },
};

const Dropdown = ({ iconDropdown, avatar, label, children, type = 'normal', disabled }) => {
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
        <IconGenerator
           renderIcon={AvatarIcon}
           props={{
             src: avatar,
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
            className: bemDestruct(chevron),
          }}
        />
      </ButtonDropdownContainer>
      <MultipleOptionList children={children} className={className} />
    </>
  );
};

export default Dropdown;
