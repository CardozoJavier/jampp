import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from './styles';
import buttonProps from './buttonProps';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName } from '../../utils';

/**
 * Button component should be called with
 * @param {String} type - (Required) Define button classes for styling.
 * @param {String} label - (Optional) Text to be display inside button.
 * @param {Node} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {Boolean} disabled - (Optional) Disable component if is true.
 * @param {Function} onClick - (Optional) Callback to trigger on onClick event.
 * @param {Boolean} fixed - (Optional) Disabled move up transform on hover.
 * @param {String} fontSize - (Optional) It's the font size for text button. Default value depend on button type.
 * @return {React Component} A view for button.
 */
const Button = ({ type, label, children, icon, disabled, onClick, fixed, fontSize, ...props }) => {
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
      {...props}
    >
      <ButtonInput children={label || children} fontSize={fontSize} />
      {icon &&
        <IconGenerator
          renderIcon={icon}
          props={{
            ...iconProps,
            className: bemDestruct(iconClassName, disabled),
          }}
        />
      }
    </ButtonContainer>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.func,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  fixed: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  children: null,
  icon: null,
  disabled: false,
  onClick: () => null,
  fixed: false,
};

export default React.memo(Button);
