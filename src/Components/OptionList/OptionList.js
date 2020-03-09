import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { OptionCheckboxGroup, MenuTitle } from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import optionListProps from './optionListProps';

/**
 * OptionList component should be called with
 * @param {Node} children - (Required) The options to be displayed.
 * @param {String} type - (Required) It's defines the classes for button styles.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @param {Function} OptionItem - (Required) It's each option component styled to be displayed into list.
 * @param {String} menuTitle - (Optional) It's the title in dropdown opened.
 * @param {Function} onSelect - (Optional) Callback to change text displayed in button dropdown. It receive option ID in first argument, and label option in second argument.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @param {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @param {String} minWidth - (Optional) Specified the min width for options list.
 * @param {String} width - (Optional) Specified the width for options list.
 * @param {String} defaultValue - (Optional) It's the default option selected. Should be the Option id.
 * @return {React Component} A view in which one option can be selected.
 */
const OptionList = ({ children = [], type, className, menuTitle, onSelect, onChange, notCheckIcon, minWidth, wide, width, defaultValue }) => {
  const { defaultClassName, OptionItem } = optionListProps[type];
  const childrenParsed = settingClassName(children, -1, defaultClassName);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (id, label, color, flat, textType) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
    onChange(id, label);
    onSelect(id, label, color, flat, textType);
  }

  useEffect(() => {
    if (defaultValue) {
      array.forEach(input => (input.id === defaultValue) && handleCheck(input.id, input.label, input.color, input.flat, type));
    };
  }, []);

  return (
    <OptionCheckboxGroup className={bemDestruct(className)} minWidth={minWidth} wide={wide} width={width}>
      {menuTitle && <MenuTitle>{menuTitle}</MenuTitle>}
      {array.map((input) => (
        <OptionItem
          className={input.className}
          handleCheck={handleCheck}
          label={input.label}
          color={input.color}
          notCheckIcon={notCheckIcon}
          flat={input.flat}
          key={input.id}
          id={input.id}
        />
      ))}
    </OptionCheckboxGroup>
  );
};

OptionList.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        color: PropTypes.string,
        children: PropTypes.array,
      }),
    })).isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    menuTitle: PropTypes.string,
    onSelect: PropTypes.func,
    onChange: PropTypes.func,
    notCheckIcon: PropTypes.bool,
    minWidth: PropTypes.string,
    width: PropTypes.string,
  };
  
OptionList.defaultProps = {
  menuTitle: '',
  onSelect: () => null,
  onChange: () => null,
  notCheckIcon: false,
  minWidth: '',
  width: '',
};
  
export default OptionList;
