import React, { useState } from 'react';
import buttonProps from './buttonProps';
import { SwitchGroupContainer, SwitchButtonInput } from './styles';
import { bemDestruct, settingClassName } from '../../utils';

/**
 * SwitchGroup component should be used with
 * @param {Array} children - (Required) The options to be displayed.
 * @param {String} type - (Optional) It's for use a different option component. 'options' is default value.
 * @param {Function} onChange - (Optional) Callback to trigger on onChange event. It receive the id option in first argument.
 * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @return {React Component} A view for group of switch buttons.
 */
const SwitchGroup = ({ children, type = 'options', onChange, disabled }) => {
  const { defaultClassName, ButtonContainer } = buttonProps[type];
  if (!Array.isArray(children)) {
    children = [children];
  }
  const childrenParsed = settingClassName(children, -1, defaultClassName);
  const [array, setArray] = useState(childrenParsed);
  
  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, id) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
    onChange && onChange(id);
  }

  return (
    <SwitchGroupContainer className={bemDestruct(defaultClassName)}>
      {array.map((input) => (
          <ButtonContainer className={bemDestruct(input.className, disabled)} disabled={disabled} key={input.id}>
            <SwitchButtonInput
              onClick={disabled ? null : (e) => handleCheck(e, input.id, defaultClassName)}
              children={input.label || input.children}
            />
          </ButtonContainer>
        )
      )}
    </SwitchGroupContainer>
  );
};

export default SwitchGroup;
