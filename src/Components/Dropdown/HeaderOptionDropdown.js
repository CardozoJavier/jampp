import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderOptionDropdownContainer } from './styles';
import { getClassName, bemDestruct } from '../../utils';
import dropdownProps from './dropdownProps';
import { IconGenerator, DownChevronIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import { UniqueOption } from '../UniqueOption';
import { ButtonInput } from '../Button/styles';

/**
 * HeaderOptionDropdown component should be called with
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} menuTitle - (Required) It's the title in dropdown opened.
 * @param {Array} children - (Required) They're the options to be display.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for button and dropdown of unique option selectable.
 */
const HeaderOptionDropdown = ({ text, type, menuTitle, children, disabled, }) => {
  const { defaultClassName, optionalClassName } = dropdownProps[type];
  const chevronDefaultClassName = dropdownProps.chevron.defaultClassName;
  const chevronOptionalClassName = dropdownProps.chevron.optionalClassName;

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(chevronDefaultClassName);

  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, chevronDefaultClassName, chevronOptionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setChevron(toggleChevronDirection);
  };

  return (
    <>
      <HeaderOptionDropdownContainer className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick}>
        <ButtonInput children={text} />
        <IconGenerator
          renderIcon={DownChevronIcon}
          props={{
            className: bemDestruct(chevron),
          }}
        />
      </HeaderOptionDropdownContainer>
      <OptionList menuTitle={menuTitle} type="header-unique-option" OptionItem={UniqueOption} children={children} className={className} />
    </>
  );
};

HeaderOptionDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  menuTitle: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape({
    props: PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      color: PropTypes.string,
      children: PropTypes.array,
    }),
  })).isRequired,
  disabled: PropTypes.bool,
};

HeaderOptionDropdown.defaultProps = {
  disabled: false,
};

export default HeaderOptionDropdown;
