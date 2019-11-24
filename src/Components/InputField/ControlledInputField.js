import React, { useState } from 'react';
import {
  ControlledInputFieldContainer,
  CustomPlaceholderContainer,
  CustomPlaceholderBold,
  CustomPlaceholderNormal,
  Input,
} from './styles';
import { bemDestruct } from '../../utils';

const ControlledInputField = ({
  id,
  disabled,
  inputClassName,
  defaultClassName,
  optionalClassName,
  customPlaceholder: { bold, normal },
}) => {
  const [className, setClassName] = useState(defaultClassName);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setClassName(optionalClassName);
    } else {
      setClassName(defaultClassName);
    };
  };
  
  return (
    <ControlledInputFieldContainer>
      <CustomPlaceholderContainer htmlFor={id} className={bemDestruct(className)}>
        <CustomPlaceholderBold>
          { bold }
        </CustomPlaceholderBold>
        <CustomPlaceholderNormal>
          { normal }
        </CustomPlaceholderNormal>
      </CustomPlaceholderContainer>
      <Input 
        id={id}
        className={bemDestruct(inputClassName, disabled)}
        type="text"
        disabled={disabled}
        onChange={handleChange}
      />
    </ControlledInputFieldContainer>
  );
};

export default ControlledInputField;
