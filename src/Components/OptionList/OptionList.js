import React, { useState } from 'react';
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
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @return {React Component} A view in which one option can be selected.
 */
const OptionList = ({ children, type, className, OptionItem, menuTitle, onChange, }) => {
  const { defaultClassName } = optionListProps[type];
  const childrenParsed = settingClassName(children, -1, defaultClassName);
  const [array, setArray] = useState(childrenParsed);

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, id) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
    onChange(id);
  }

  return (
    <OptionCheckboxGroup className={bemDestruct(className)}>
      {menuTitle && <MenuTitle>{menuTitle}</MenuTitle>}
      {array.map((input) => (
        <OptionItem
          className={input.className}
          handleCheck={handleCheck}
          label={input.label}
          color={input.color}
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
    OptionItem: PropTypes.func.isRequired,
    menuTitle: PropTypes.string,
    onChange: PropTypes.func,
  };
  
OptionList.defaultProps = {
  children: [],
  menuTitle: null,
  onChange: () => null,
};
  
export default OptionList;
