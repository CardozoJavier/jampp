import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct, useEventListener, getUniqueId } from '../../utils';
import { IconGenerator, DownChevronIcon, EllipseIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import dropdownProps from './dropdownProps';
import { StatusLabelOption } from '../StatusLabelOption';
import { StatusLabel } from '../Label';

/**
 * StatusLabelDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for button and dropdown of unique status label selectable.
 */
const StatusLabelDropdown = ({ text, children, type = 'basic', leftIcon, onChange, disabled }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);

  const [optionButton, setOptionButton] = useState(text);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  const onSelect = (id, label) => {
    const props = {
      text: label,
      color: id,
    };
    setOptionButton(<StatusLabel {...props} key={id} icon={EllipseIcon} />);
    handleClick();
  };

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getUniqueId();
  const [, setClick] = useState();
  const dropdownButton = document.getElementById(dropdownId) || {};
    
  const eventHandler = useCallback(
    (e) => {
      setClick(e);

      if(e.target.id !== dropdownButton.id) {
        setChevron(dropdownProps.chevron.defaultClassName);
        setClassName(defaultClassName);
      }
    },
    [dropdownButton, setClick]
  );
  
  useEventListener('click', eventHandler);

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick} id={dropdownId}>
        {leftIcon &&
          <IconGenerator
            renderIcon={leftIcon}
            props={{}}
            disabled={disabled}
          />
        }
        <ButtonInput>{optionButton}</ButtonInput>
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            className: bemDestruct(chevron),
          }}
          disabled={disabled}
        />
      </ButtonDropdownContainer>
      <OptionList type="status-option" OptionItem={StatusLabelOption} children={children} className={className} onSelect={onSelect} onChange={onChange} />
    </>
  );
};

StatusLabelDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

StatusLabelDropdown.defaultProps = {
  type: 'basic',
  leftIcon: () => null,
  onChange: () => null,
  disabled: false,
};

export default StatusLabelDropdown;
