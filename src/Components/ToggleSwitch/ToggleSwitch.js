import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

/**
 * ToggleSwitch component can be called with
 * @param {String} color - (Optional) Used for setting the active color on switch. Can be 'green' (default), 'blue', 'red', 'yellow'.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive one argument (true or false).
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for toggle switch.
 */ 
const ToggleSwitch = ({ color, disabled, onChange }) => {
  const { defaultClassName, optionalClassName } = classesName[color];
  const [className, setClassName] = useState(defaultClassName);
  const [status, setStatus] = useState(false);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    onChange(!status);
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

ToggleSwitch.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

ToggleSwitch.defaultProps = {
  color: 'green',
  disabled: false,
  onChange: () => null,
};

export default ToggleSwitch;
