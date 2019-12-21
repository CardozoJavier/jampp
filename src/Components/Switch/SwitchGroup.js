import React, { useState } from 'react';
import buttonProps from './buttonProps';
import { SwitchGroupContainer, SwitchButtonInput } from './styles';
import { bemDestruct, settingClassName } from '../../utils';

const SwitchGroup = ({ children, type, disabled }) => {
  const { defaultClassName, optionalClassName, ButtonContainer, iconProps, iconClassName } = buttonProps[type];
  const childrenParsed = settingClassName(children, -1, defaultClassName);
  const [array, setArray] = useState(childrenParsed);
  
  /**
   * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
   */
  const handleCheck = (e, id) => {
    const inputsArray = settingClassName(children, id, defaultClassName);
    setArray(inputsArray);
  }

  return (
    <SwitchGroupContainer className={bemDestruct(defaultClassName)}>
      {array.map((input) => (
          <ButtonContainer className={bemDestruct(input.className, disabled)} disabled={disabled} key={input.id}>
            <SwitchButtonInput
              onClick={disabled ? null : (e) => handleCheck(e, input.id, defaultClassName)}
              children={input.label || children}
              color={input.color}
            />
          </ButtonContainer>
        )
      )}
    </SwitchGroupContainer>
  );
};

export default SwitchGroup;
