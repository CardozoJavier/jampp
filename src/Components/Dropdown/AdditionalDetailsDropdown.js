import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer, ChildrenContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import { DownChevronIcon } from '../UI/Icons';
import dropdownProps from './dropdownProps';

/**
 * AdditionalDetailsDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {String} notIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {Boolean} wide - (Optional) If true, dropdown's width will be 100%;
 * @return {React Component} A view for button and dropdown of unique option selectable.
 */
const AdditionalDetailsDropdown = ({ type = 'basic', text, children, wide, disabled }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);

  const [display, setDisplay] = useState(false);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
    setDisplay(!display);
  };

  return (
    <>
      <ButtonDropdownContainer wide={wide} className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick}>
        <ButtonInput children={text} />
        <DownChevronIcon
          props={{
            className: bemDestruct(chevron),
            width: '16px',
            height: '16px',
            margin: '0 5px',
            disabled,
          }}
          disabled={disabled}
        />
      </ButtonDropdownContainer>
      <ChildrenContainer className={bemDestruct(className)}>{ children }</ChildrenContainer>
    </>
  );
};

AdditionalDetailsDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.func,
  onChange: PropTypes.func,
  notIcon: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
};

AdditionalDetailsDropdown.defaultProps = {
  leftIcon: () => null,
  onChange: () => null,
  notIcon: false,
  wide: false,
  disabled: false,
};

export default AdditionalDetailsDropdown;
