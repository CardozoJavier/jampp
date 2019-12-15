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
};

const ToggleSwitch = ({ color, disabled }) => {
  const defaultClassName = classesName[color].defaultClassName;
  const optionalClassName = classesName[color].optionalClassName;
  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
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
