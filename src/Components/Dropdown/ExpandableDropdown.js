import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import { DownChevronIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import dropdownProps from './dropdownProps';
import { UniqueOption } from '../UniqueOption';


/**
 * ExpandableDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {String} defaultValue - (Optional) It's the default option selected. Should be the Option id.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @return {React Component} A view for button and expandable dropdown of unique option selectable.
 */
const ExpandableDropdown = ({ type = 'basic', text, children, disabled, defaultValue, onChange }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);
  const [optionSelected, setOptionSelected] = useState(defaultValue);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  const onSelect = useCallback((id, label) => {
    setOptionSelected(id);
    onChange(id, label);
  }, [children]);

  useEffect(() => {
    if (defaultValue) {
      setOptionSelected(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick}>
        <ButtonInput children={text} />
        <DownChevronIcon
          props={{
            className: bemDestruct(chevron),
            width: '16px',
            height: '16px',
            margin: '0 5px',
            pointerEvents: 'none',
            disabled,
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
        optionSelected={optionSelected}
      />
    </>
  );
};

ExpandableDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

ExpandableDropdown.defaultProps = {
  disabled: false,
  onChange: () => null,
  defaultValue: '',
};

export default ExpandableDropdown;
