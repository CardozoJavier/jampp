import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from './styles';
import buttonProps from './buttonProps';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';

/**
 * Button component should be called with
 * @param {String} label - (Optional) Text to be display inside button.
 * @param {Object} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {String} type - (Required) Define button classes for styling.
 * @param {Boolean} disabled - (Optional) Disable component if is true.
 * @param {Function} onClick - (Optional) Callback to trigger on onClick event.
 * @param {Function} onClickIcon - (Optional) Callback to trigger on icon onClick event.
 * @param {Boolean} fixed - (Optional) Disabled move up transform on hover.
 * @return {React Component} A view for button.
 */
const Button = ({ label, children, icon, type, disabled, onClick, onClickIcon, fixed }) => {
  const { defaultClassName, optionalClassName, ButtonContainer, iconProps, iconClassName } = buttonProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    onClick && onClick();
    setClassName(toggleToClassName);
  };

  return (
    <ButtonContainer
      onClick={disabled ? null : handleClick}
      className={bemDestruct(className, disabled)}
      disabled={disabled}
      fixed={fixed}
    >
      <ButtonInput children={label || children} />
      {icon &&
        <IconGenerator
          renderIcon={icon}
          props={{
            ...iconProps,
            className: bemDestruct(iconClassName, disabled),
            onClick: onClickIcon
          }}
        />
      }
    </ButtonContainer>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.func,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onClickIcon: PropTypes.func,
  fixed: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  children: null,
  disabled: false,
  onClick: () => null,
  onClickIcon: () => null,
  fixed: false,
};

export default Button;
