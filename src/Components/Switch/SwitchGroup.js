import React, { useState } from 'react';
import buttonProps from './buttonProps';
import { SwitchGroupContainer } from './styles';
import { bemDestruct, settingClassName } from '../../utils';

const SwitchGroup = ({ children, type, className, OptionItem, disabled }) => {
  const { defaultClassName, optionalClassName, ButtonContainer, iconProps, iconClassName } = buttonProps[type];
  const childrenParsed = settingClassName(children);
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
        <ButtonContainer className={bemDestruct(defaultClassName, disabled)} disabled={disabled}>
          <OptionItem
            className={input.className}
            handleCheck={handleCheck}
            label={input.label}
            color={input.color}
            disabled={disabled}
            key={input.value}
            id={input.id}
          />
        </ButtonContainer>
      ))}
    </SwitchGroupContainer>
  );
};

export default SwitchGroup;


// import React, { useState } from 'react';
// import { SwitchGroupContainer } from './styles';
// import { bemDestruct, settingClassName } from '../../utils';

// const SwitchGroup = ({ children, className, OptionItem, disabled }) => {
//   const childrenParsed = settingClassName(children);
//   const [array, setArray] = useState(childrenParsed);

//   /**
//    * When an option is clicked, his className is toggle to selected and everyone else are being uncheck.
//    */
//   const handleCheck = (e, currentValue) => {
//     const inputsArray = settingClassName(children, currentValue);
//     setArray(inputsArray);
//   }

//   return (
//     <SwitchGroupContainer className={bemDestruct(className)}>
//       {array.map((input) => (
//         <OptionItem
//           key={input.value}
//           label={input.label}
//           value={input.value}
//           color={input.color}
//           className={input.className}
//           handleCheck={handleCheck}
//           disabled={disabled}
//         />
//       ))}
//     </SwitchGroupContainer>
//   );
// };

// export default SwitchGroup;
