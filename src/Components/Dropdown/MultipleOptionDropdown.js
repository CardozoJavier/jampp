import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { bemDestruct, getClassName, useEventListener, getUniqueId } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import dropdownProps from './dropdownProps';

/**
 * MultipleOptionDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for button and dropdown of multiple options.
 */
const MultipleOptionDropdown = ({ type = 'basic', text, children, leftIcon, disabled }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getUniqueId();
  const listId = getUniqueId();
  const [, setClick] = useState();
  let dropdownButton;
  let dropdownList; 
    
  useEffect(() => {
    dropdownButton = document.getElementById(dropdownId) || {};
    dropdownList = document.getElementById(listId) || { contains: () => null };
  });

  const eventHandler = useCallback(
    (e) => {
      setClick(e);

      if(e.target.id !== dropdownButton.id && !dropdownList.contains(e.target)) {
        setChevron(dropdownProps.chevron.defaultClassName);
        setClassName(defaultClassName);
      }
    },
    [dropdownButton, dropdownList, setClick]
  );
  
  useEventListener('click', eventHandler);

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick} id={dropdownId}>
        {leftIcon &&
          <IconGenerator
            renderIcon={leftIcon}
            props={{
              pointerEvents: 'none',
            }}
            disabled={disabled}
          />
        }
        <ButtonInput children={text} />
        <DownChevronIcon
          props={{
            width: '16px',
            height: '16px',
            margin: '0 5px',
            className: bemDestruct(chevron),
            pointerEvents: 'none',
            disabled,
          }}
        />
      </ButtonDropdownContainer>
      <MultipleOptionList children={children} className={className} listId={listId} />
    </>
  );
};

MultipleOptionDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.func,
  disabled: PropTypes.bool,
};

MultipleOptionDropdown.defaultProps = {
  leftIcon: () => null,
  disabled: false,
};

export default MultipleOptionDropdown;
