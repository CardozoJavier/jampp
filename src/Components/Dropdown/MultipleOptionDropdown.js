import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import MultipleOptionList from '../MultipleOptionList';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import {
  bemDestruct, getClassName, useEventListener, getReferencedId, getUniqueId,
} from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import dropdownProps from './dropdownProps';
import { typeFilter, isType } from './utils';

/**
 * MultipleOptionDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for button and dropdown of multiple options.
 */
const MultipleOptionDropdown = ({
  type = 'basic', text, children, leftIcon, disabled,
}) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];
  const childrenArray = children && !Array.isArray(children) ? [children] : children;
  const [options, setOptions] = useState(childrenArray);
  const [filterOptions, setFilterOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState({});

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);

  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);
  const isTypeSearch = isType('search', type);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  /**
   * Order options by selected
   */
  const sortingOptionSelected = useCallback((option) => {
    if (selectedOptions[option.props.id]) return -1;
    return 1;
  }, [selectedOptions]);

  /**
   * Filter dropdown options that matchs with input text value or options already selected
   */
  const onFilterHandler = useCallback((e) => {
    const { value } = e.target;
    const updateFilterOptions = options.filter((option) => {
      if (value.trim()) {
        const regex = new RegExp(`${typeFilter(type)}${value.toLowerCase()}`);
        return regex.test(option.props.label.toLowerCase()) || selectedOptions[option.props.id];
      }
      return option;
    }).sort(sortingOptionSelected);
    setFilterOptions(updateFilterOptions);
  }, [options, selectedOptions, sortingOptionSelected, type]);

  /**
   * When an option is selected, onSelect updates the options selected (necessary in filter function) and execute the original callback setted to checkbox
   */
  const onSelect = useCallback((option, status, originalCallback = () => null) => {
    const selectedOptionsHandler = (prev) => ({
      ...prev,
      [option]: status,
    });
    const updateOptionsHandler = ((prevOptions) => (
      prevOptions.map((prevOption) => {
        if (prevOption.props.id === option) {
          return React.cloneElement(prevOption, {
            ...prevOption.props,
            checked: status,
          });
        }
        return prevOption;
      })
    ));
    originalCallback(option, status);
    setOptions(updateOptionsHandler);
    setSelectedOptions(selectedOptionsHandler);
  }, []);

  /**
   * When dropdown is type 'search', here we update the checkbox onChange callback for support filtering options
   */
  useEffect(() => {
    if (isTypeSearch) {
      const updateSelectedOptions = {};
      const updateOptions = childrenArray.map((option) => {
        const id = option.props.id || getUniqueId();
        const clone = React.cloneElement(option, {
          ...option.props,
          id,
          key: option.props.label,
          onChange: (optionId, optionStatus) => onSelect(optionId, optionStatus, option.props.onChange),
        });
        updateSelectedOptions[id] = option.props.checked;
        return clone;
      });
      setSelectedOptions(updateSelectedOptions);
      setFilterOptions(updateOptions);
      setOptions(updateOptions);
    }
  }, [childrenArray, isTypeSearch, onSelect]);

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getReferencedId();
  const listId = getReferencedId();
  const [, setClick] = useState();
  let dropdownButton;
  let dropdownList;

  useEffect(() => {
    dropdownButton = document.getElementById(dropdownId) || {};
    dropdownList = document.getElementById(listId) || { contains: () => null };
  }, []);

  const eventHandler = useCallback(
    (e) => {
      setClick(e);

      if (e.target.id !== dropdownButton.id && !dropdownList.contains(e.target)) {
        setChevron(dropdownProps.chevron.defaultClassName);
        setClassName(defaultClassName);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEventListener('click', eventHandler);

  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick} id={dropdownId}>
        {leftIcon
          && (
          <IconGenerator
            renderIcon={leftIcon}
            props={{
              pointerEvents: 'none',
            }}
            disabled={disabled}
          />
          )}
        <ButtonInput>{text}</ButtonInput>
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
      <MultipleOptionList
        className={className}
        listId={listId}
        search={isTypeSearch}
        onFilterHandler={onFilterHandler}
      >
        {filterOptions}
      </MultipleOptionList>
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

MultipleOptionDropdown.defaultProps = {
  leftIcon: () => null,
  disabled: false,
};

export default MultipleOptionDropdown;
