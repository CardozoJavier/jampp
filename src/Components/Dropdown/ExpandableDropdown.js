import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import dropdownProps from './dropdownProps';
import { UniqueOption } from '../UniqueOption';


/**
 * ExpandableDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Array} children - (Required) The options to be display.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for button and expandable dropdown of unique option selectable.
 */
const ExpandableDropdown = ({ text, children, type, disabled }) => {
  const { defaultClassName, optionalClassName, buttonClassName } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  
  return (
    <>
      <ButtonDropdownContainer className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick}>
        <ButtonInput children={text} />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            className: bemDestruct(chevron),
          }}
          disabled={disabled}
        />
      </ButtonDropdownContainer>
      <OptionList type="unique-option" OptionItem={UniqueOption} children={children} className={className} />
    </>
  );
};

ExpandableDropdown.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
      children: PropTypes.array,
    }),
  })).isRequired,
};

ExpandableDropdown.defaultProps = {
  disabled: false,
  type: 'basic',
};

export default ExpandableDropdown;
