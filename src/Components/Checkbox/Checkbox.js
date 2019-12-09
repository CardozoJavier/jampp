import React, { useState } from 'react';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName, } from '../../utils';
import { CheckboxContainer, CheckboxLabel, Box, Container } from './styles';
import { CheckIcon } from '../UI/Icons';
import { palette } from '../styles';

const { white } = palette;
const classesName = {
  normal: {
    defaultClassName: "checkbox basic--default-multipleoptions",
    optionalClassName: "checkbox basic--default-multipleoptions__selected",
  },
};

const Checkbox = ({ label, type, right, left, disabled }) => {
  const defaultClassName = classesName[type].defaultClassName;
  const optionalClassName = classesName[type].optionalClassName;
  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    !disabled && setClassName(toggleToClassName);
  }

  return (
    <Container className={bemDestruct(className, disabled)} onClick={handleClick}>
      { right && <CheckboxLabel disabled={disabled}>{ label }</CheckboxLabel>}
      <CheckboxContainer>
        <Box className={bemDestruct(className, disabled)} />
        <IconGenerator
          renderIcon={CheckIcon}
          props={{
            right: '1px',
            fill: white,
            width: '12px',
            height: '8px',
            disabled,
          }}
        />
      </CheckboxContainer>
      { left && <CheckboxLabel disabled={disabled}>{ label }</CheckboxLabel>}
    </Container>
  )
};

export default Checkbox;
