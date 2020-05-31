import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { OptionCheckboxGroup, MenuTitle } from './styles';
import { bemDestruct, settingClassName } from '../../utils';
import optionListProps from './optionListProps';
import { Button } from '../Button';

/**
 * OptionList component should be called with
 * @param {Node} children - (Required) The options to be displayed.
 * @param {String} type - (Required) It's defines the classes for button styles.
 * @param {String} className - (Required) The className determines if list is opened or closed.
 * @param {Function} OptionItem - (Required) It's each option component styled to be displayed into list.
 * @param {String} menuTitle - (Optional) It's the title in dropdown opened.
 * @param {Function} onSelect - (Optional) Callback to change text displayed in button dropdown. It receive option ID in first argument, and label option in second argument.
 * @param {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @param {String} minWidth - (Optional) Specified the min width for options list.
 * @param {String} width - (Optional) Specified the width for options list.
 * @param {String} optionSelected - (Optional) It's the option selected. Should be the Option id.
 * @param {String} buttonList - (Optional) It's the button text to be displayed into list when customize-text type is selected.
 * @param {Function} customizeTextClick - (Optional) Callback to trigger when button for customize button text is clicked.
 * @return {React Component} A view in which one option can be selected.
 */
const OptionList = ({ children = [], type, className, menuTitle, onSelect, notCheckIcon, minWidth, wide, width, optionSelected, buttonList, customizeTextClick }) => {
  const { defaultClassName, OptionItem } = optionListProps[type];
  const childrenParsed = children ? settingClassName(children, optionSelected, defaultClassName) : [];

  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = useCallback((id, label, color, flat, textType) => {
    onSelect(id, label, color, flat, textType);
  }, [optionSelected]);

  useEffect(() => {
    if (optionSelected) {
      childrenParsed.forEach(input => (input.id === optionSelected) && handleCheck(input.id, input.label, input.color, input.flat, type));
    };
  }, [children, optionSelected]);

  return (
    <OptionCheckboxGroup customSelected={optionSelected === 'custom-param'} className={bemDestruct(className)} minWidth={minWidth} wide={wide} width={width}>
      {menuTitle && <MenuTitle>{menuTitle}</MenuTitle>}
      {childrenParsed.map((input) => (
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
      {buttonList ?
        <Button type="link-customize-left" label={buttonList} onClick={customizeTextClick} />
        : null
      }
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
    buttonList: PropTypes.string,
    customizeTextClick: PropTypes.func,
    optionSelected: PropTypes.string.isRequired,
  };
  
OptionList.defaultProps = {
  menuTitle: '',
  onSelect: () => null,
  notCheckIcon: false,
  minWidth: '',
  width: '',
  buttonList: null,
  customizeTextClick: () => null,
};
  
export default React.memo(OptionList);
