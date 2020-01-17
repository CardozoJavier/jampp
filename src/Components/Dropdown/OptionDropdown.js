import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct, useEventListener, getUniqueId } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import dropdownProps from './dropdownProps';
import { UniqueOption } from '../UniqueOption';

/**
 * OptionDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @param {String} notIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {Boolean} wide - (Optional) If true, dropdown's width will be 100%;
 * @return {React Component} A view for button and dropdown of unique option selectable.
 */
const OptionDropdown = ({ type, text, children, leftIcon, onChange, notIcon, wide, disabled }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);

  const [textButton, setTextButton] = useState(text);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  const onSelect = (id, label) => {
    setTextButton(label);
    handleClick();
  };

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getUniqueId();
  const [, setClick] = useState();
  const dropdownButton = document.getElementById(dropdownId) || {};

  const eventHandler = useCallback(
    (e) => {
      setClick(e);
      
      if (e.target.id !== dropdownButton.id) {
        setChevron(dropdownProps.chevron.defaultClassName);
        setClassName(defaultClassName);
      }
    },
    [dropdownButton, setClick]
  );
  
  useEventListener('click', eventHandler);

  return (
    <>
      <ButtonDropdownContainer wide={wide} className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick} id={dropdownId}>
        {leftIcon &&
          <IconGenerator
            renderIcon={leftIcon}
            props={{}}
            disabled={disabled}
          />
        }
        <ButtonInput children={textButton} />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            className: bemDestruct(chevron),
          }}
          disabled={disabled}
        />
      </ButtonDropdownContainer>
      <OptionList
        type="unique-option"
        OptionItem={UniqueOption}
        children={children}
        className={className}
        onSelect={onSelect}
        onChange={onChange}
        notIcon={notIcon}
      />
    </>
  );
};

OptionDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.func,
  onChange: PropTypes.func,
  notIcon: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
};

OptionDropdown.defaultProps = {
  type: 'basic',
  leftIcon: () => null,
  onChange: () => null,
  notIcon: false,
  wide: false,
  disabled: false,
};

export default OptionDropdown;
