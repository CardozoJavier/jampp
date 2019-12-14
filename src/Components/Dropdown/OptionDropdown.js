import React, { useState } from 'react';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { palette } from '../styles';
import { OptionList } from '../OptionList';
import { UniqueOption } from '../UniqueOption';

const { gray } = palette;
const classesName = {
  chevron: {
    defaultClassName: 'chevron chevron--default__closed',
    optionalClassName: 'chevron chevron--default__opened',
  },
  basic: {
    defaultClassName: "dropdown button--basic-right__closed",
    optionalClassName: "dropdown button--basic-right__opened",
  },
  solid: {
    defaultClassName: "dropdown button--solid-right__closed",
    optionalClassName: "dropdown button--solid-right__opened",
  },
  noBorder: {
    defaultClassName: "dropdown button--noBorder-right__closed",
    optionalClassName: "dropdown button--noBorder-right__opened",
  },
  noBorderLink: {
    defaultClassName: "dropdown button--noBorderLink-left__closed",
    optionalClassName: "dropdown button--noBorderLink-left__opened",
  },
  noBorderPurple: {
    defaultClassName: "dropdown button--noBorderPurple-left__closed",
    optionalClassName: "dropdown button--noBorderPurple-left__opened",
  },
};

const OptionDropdown = ({ text, children, type = 'normal', leftIcon, disabled }) => {
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
      <ButtonDropdownContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick}>
        {leftIcon &&
            <IconGenerator
              renderIcon={leftIcon}
              props={{
                position: 'unset',
                left: '10px',
                fill: gray.g4,
                width: '16px',
                height: '16px',
                className: bemDestruct(className, disabled),
              }}
              disabled={disabled}
            />
          }
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
          disabled={disabled}
        />
      </ButtonDropdownContainer>
      <OptionList OptionItem={UniqueOption} children={children} className={className} />
    </>
  );
};

export default OptionDropdown;
