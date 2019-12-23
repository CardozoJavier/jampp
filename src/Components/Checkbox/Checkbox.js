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
  dropdown: {
    defaultClassName: "dropdown basic--default-multipleoptions",
    optionalClassName: "dropdown basic--default-multipleoptions__selected",
  },
  label: {
    defaultLabel: "checkbox label--default",
    selectedLabel: "checkbox label--default__selected",
  },
};

const Checkbox = ({ label, type = 'normal', right, left, disabled }) => {
  const { defaultClassName, optionalClassName } = classesName[type];
  const { defaultLabel, selectedLabel } = classesName['label'];
  const [className, setClassName] = useState(defaultClassName);
  const [labelClassName, setLabelClassName] = useState(defaultLabel);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);
  const toggleToLabelClassName = getClassName(labelClassName, defaultLabel, selectedLabel);

  const handleClick = () => {
    setClassName(toggleToClassName);
    setLabelClassName(toggleToLabelClassName);
  }

  return (
    <Container className={bemDestruct(className, disabled)} onClick={disabled ? null : handleClick} disabled={disabled}>
      { right && <CheckboxLabel className={bemDestruct(labelClassName)} disabled={disabled}>{ label }</CheckboxLabel>}
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
      { left && <CheckboxLabel className={bemDestruct(labelClassName)} disabled={disabled}>{ label }</CheckboxLabel>}
    </Container>
  )
};

export default Checkbox;
