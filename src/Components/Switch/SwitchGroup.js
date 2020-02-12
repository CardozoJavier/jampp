import React, { useState } from 'react';
import PropTypes from 'prop-types';
import buttonProps from './buttonProps';
import { SwitchGroupContainer, SwitchButtonInput } from './styles';
import { bemDestruct, settingClassName } from '../../utils';

/**
 * SwitchGroup component should be used with
 * @param {Node} children - (Required) The options to be displayed.
 * @param {String} type - (Optional) It's for use a different option component. 'options' is default value.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @param {Boolean} defaultValue - (Optional) Define default selected. Default value is any. Must be the button Id.
 * @param {String} justifyContent - (Optional) It's the justifyContent of the switch group container.
 * @return {React Component} A view for group of switch buttons.
 */
const SwitchGroup = ({ children = [], type, onChange, disabled, defaultValue, justifyContent }) => {
  const { defaultClassName, ButtonContainer } = buttonProps[type];
  if (!Array.isArray(children)) {
    children = [children];
  }
  const childrenParsed = settingClassName(children, defaultValue, defaultClassName);
  const [array, setArray] = useState(childrenParsed);
  
  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, id, onClick, disabled) => {
    const inputsArray = settingClassName(children, id, defaultClassName, disabled);
    if (!disabled) {
      setArray(inputsArray);
      onChange(id);
      onClick && onClick(id);
    }
  }

  return (
    <SwitchGroupContainer justifyContent={justifyContent}>
      {array.map((input) => (
          <ButtonContainer className={bemDestruct(input.className, disabled)} disabled={input.disabled} key={input.id}>
            <SwitchButtonInput
              onClick={disabled ? null : (e) => handleCheck(e, input.id, input.onClick, input.disabled)}
              children={input.label || input.children}
            />
          </ButtonContainer>
        )
      )}
    </SwitchGroupContainer>
  );
};

SwitchGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  justifyContent: PropTypes.string,
};

SwitchGroup.defaultProps = {
  type: 'options',
  onChange: () => null,
  disabled: false,
  defaultValue: null,
  justifyContent: '',
};

export default SwitchGroup;
