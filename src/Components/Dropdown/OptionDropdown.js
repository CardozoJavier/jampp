import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from '../Button/styles';
import { ButtonDropdownContainer } from './styles';
import { getClassName, bemDestruct, useEventListener, getReferencedId } from '../../utils';
import { IconGenerator, DownChevronIcon, EllipseIcon } from '../UI/Icons';
import { OptionList } from '../OptionList';
import dropdownProps from './dropdownProps';
import { StatusLabel } from '../Label';
import InputText from '../Structures/InputText';

/**
 * OptionDropdown component should be called with
 * @param {String} type - (Required) It's defines the classes for displaying or not the option list, and button styles.
 * @param {String} text - (Required) Text to be displayed inside button.
 * @param {Node} children - (Required) The options to be display.
 * @param {Function} leftIcon - (Optional) Function that returns an svg icon to be displayed inside button.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
 * @param {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @param {Boolean} wide - (Optional) If true, dropdown's width will be 100%;
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {String} listWidth - (Optional) It's the width of the list opened.
 * @param {String} defaultValue - (Optional) It's the default option selected. Should be the Option id.
 * @param {String} buttonList - (Optional) It's the button text to be displayed into list when customize-text type is selected.
 * @return {React Component} A view for button and dropdown of unique option selectable.
 */
const OptionDropdown = ({ type = 'basic', text, children, leftIcon, onChange, notCheckIcon, wide, disabled, minWidth, listWidth, defaultValue, buttonList }) => {
  const { defaultClassName, optionalClassName, buttonClassName, typeList } = dropdownProps[type];

  const [className, setClassName] = useState(defaultClassName);
  const [chevron, setChevron] = useState(dropdownProps.chevron.defaultClassName);

  const [textButton, setTextButton] = useState(text);
  const [customTextButton, setCustomTextButton] = useState(null);
  
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleChevronDirection = getClassName(chevron, dropdownProps.chevron.defaultClassName, dropdownProps.chevron.optionalClassName);

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
  }, [children]);

  /**
   * Hook to handle click events on window
   */
  const dropdownId = getReferencedId();
  const [, setClick] = useState();
  let dropdownButton;

  useEffect(() => {
    dropdownButton = document.getElementById(dropdownId) || {};
  }, []);

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

  /**
   * Callback to set value from input text in custom mode
   */
  const customizeTextHandler = (id, value) => {
    setTextButton(value);
  };
  
  /**
   * Callback to set custom mode for button text
   */
  const customizeTextClick = () => {
    setCustomTextButton(true);
  };

  const onKeyDownHandler = (e) => {
    const keyCode = e.keyCode.toString();
    if (keyCode === '13' || keyCode === '9') {
      e.preventDefault();
      setCustomTextButton(false);
    };
  };

  return (
    <>
      <ButtonDropdownContainer customMode={customTextButton} wide={wide} className={bemDestruct(buttonClassName, disabled)} onClick={disabled ? null : handleClick} id={dropdownId} minWidth={minWidth}>
        {leftIcon &&
          <IconGenerator
            renderIcon={leftIcon}
            props={{}}
            disabled={disabled}
          />
        }
        {customTextButton ?
          <InputText onKeyDown={onKeyDownHandler} defaultValue={textButton} autoFocus={true} minWidth="50px" margin="0 8px" fontSize="12px" onChange={customizeTextHandler} />
          : <ButtonInput maxWidth="100%" overflow="hidden" children={textButton} />
        }
        <DownChevronIcon
          props={{
            width: '16px',
            height: '16px',
            margin: '0 5px',
            className: bemDestruct(chevron, disabled),
            pointerEvents: 'none',
            disabled,
          }}
        />
      </ButtonDropdownContainer>
      <OptionList
        wide={wide}
        type={typeList}
        width={listWidth}
        children={children}
        className={className}
        onSelect={onSelect}
        onChange={onChange}
        notCheckIcon={notCheckIcon}
        defaultValue={defaultValue}
        buttonList={buttonList}
        customizeTextClick={customizeTextClick}
      />
    </>
  );
};

OptionDropdown.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.func,
  onChange: PropTypes.func,
  notCheckIcon: PropTypes.bool,
  wide: PropTypes.bool,
  disabled: PropTypes.bool,
  listWidth: PropTypes.string,
  defaultValue: PropTypes.string,
  buttonList: PropTypes.string,
};

OptionDropdown.defaultProps = {
  leftIcon: () => null,
  onChange: () => null,
  notCheckIcon: false,
  wide: false,
  disabled: false,
  listWidth: null,
  defaultValue: null,
  buttonList: null,
};

export default React.memo(OptionDropdown);
