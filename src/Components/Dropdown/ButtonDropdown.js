import React, { useState } from 'react';
import ModalCheckbox from '../ModalCheckbox';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';

import { palette } from '../styles';
const { gray } = palette;

const triggerAction = () => setTimeout(() => alert('You clicked me!'), 1000);

const Button = ({ label, children, defaultClassName, optionalClassName, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    // triggerAction();
    setClassName(toggleToClassName);
  };

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(className)} onClick={handleClick}>
        <ButtonInput
          children={label || children}
          className={bemDestruct(className, disabled)}
          onClick={handleClick}
        />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            position: 'relative',
            right: '5px',
            fill: gray.g4,
            width: '16px',
            height: '16px',
            className: bemDestruct(className),
          }}
        />
      </ButtonDropdownContainer>
      <ModalCheckbox className={className} options={modalOptions} />
    </>
  );
};

export default Button;

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
