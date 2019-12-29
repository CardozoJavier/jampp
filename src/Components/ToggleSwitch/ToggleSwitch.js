import React, { useState } from 'react';
import { ToggleSwitchContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import ToggleCircleIcon from '../UI/Icons/ToggleCircleIcon';
import { IconGenerator } from '../UI/Icons';

const classesName = {
  green: {
    defaultClassName: 'toggle switch--green-default__off',
    optionalClassName: 'toggle switch--green-default__on'
  },
  blue: {
    defaultClassName: 'toggle switch--blue-default__off',
    optionalClassName: 'toggle switch--blue-default__on'
  },
  red: {
    defaultClassName: 'toggle switch--red-default__off',
    optionalClassName: 'toggle switch--red-default__on'
  },
  yellow: {
    defaultClassName: 'toggle switch--yellow-default__off',
    optionalClassName: 'toggle switch--yellow-default__on'
  },
};

const ToggleSwitch = ({ color = 'green', disabled, onChange }) => {
  const { defaultClassName, optionalClassName } = classesName[color];
  const [className, setClassName] = useState(defaultClassName);
  const [status, setStatus] = useState(false);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    onChange && onChange(!status);
    setStatus(!status);
    setClassName(toggleToClassName);
  };

  return (
    <ToggleSwitchContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick} disabled={disabled}>
      <IconGenerator
        renderIcon={ToggleCircleIcon}
        props={{
          position: 'relative',
          right: '2px',
          top: '1px',
          width: '24px',
          height: '24px',
          className: bemDestruct(className, disabled),
        }}
      />
    </ToggleSwitchContainer>
  );
};

export default ToggleSwitch;
