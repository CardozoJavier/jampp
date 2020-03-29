import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HeaderOptionDropdownContainer } from './styles';
import { getClassName, bemDestruct, useEventListener, getReferencedId } from '../../utils';
import dropdownProps from './dropdownProps';
import { DownChevronIcon, EllipseIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import { ButtonInput } from '../Button/styles';

/**
 * HeaderOptionDropdown component should be called with
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} menuTitle - (Required) It's the title in dropdown opened.
 * @param {Node} children - (Required) They're the options to be display.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {String} defaultValue - (Optional) It's the default option selected. Should be the Option id.
 * @return {React Component} A view for button and dropdown of unique option selectable.
 */
const HeaderOptionDropdown = ({ text, type = 'basic', menuTitle, children, onChange, disabled, defaultValue }) => {
  const { defaultClassName, optionalClassName, typeList } = dropdownProps[type];
  const chevronDefaultClassName = dropdownProps.chevron.defaultClassName;
  const chevronOptionalClassName = dropdownProps.chevron.optionalClassName;

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(chevronDefaultClassName);
  const [optionSelected, setOptionSelected] = useState(defaultValue);

  const [textButton, setTextButton] = useState(text);

  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, chevronDefaultClassName, chevronOptionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  const onSelect = useCallback((id, label, color, flat, textType) => {
    const props = {
      text: label,
      color,
    };
    const buttonText = textType === 'status-label'
    ? <StatusLabel {...props} key={id} icon={flat ? null : EllipseIcon} />
    : label;
    // Avoid error with race condition when state is updated.
    setTimeout(() => setTextButton(buttonText), 0);
    setOptionSelected(id);
    onChange(id, label);
  }, [children]);

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getReferencedId();
  const [, setClick] = useState();
  let dropdownButton;

  useEffect(() => {
    dropdownButton = document.getElementById(dropdownId) || {};
  },[]);

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

  useEffect(() => {
    setTextButton(text);
  }, [text]);

  useEffect(() => {
    if (defaultValue) {
      setOptionSelected(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <HeaderOptionDropdownContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick} id={dropdownId}>
        <ButtonInput children={textButton} />
        <DownChevronIcon
          props={{
            className: bemDestruct(chevron),
            width: '16px',
            height: '16px',
            margin: '0 5px',
            pointerEvents: 'none',
            disabled,
          }}
        />
      </HeaderOptionDropdownContainer>
      <OptionList
        menuTitle={menuTitle}
        type={typeList}
        children={children}
        className={className}
        onSelect={onSelect}
        optionSelected={optionSelected}
      />
    </>
  );
};

HeaderOptionDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  menuTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

HeaderOptionDropdown.defaultProps = {
  disabled: false,
  onChange: () => null,
  defaultValue: '',
};

export default HeaderOptionDropdown;
