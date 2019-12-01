import React, { useState } from 'react';
import { IconGenerator } from '../UI/Icons';
import { bemDestruct, getClassName, } from '../../utils';
import { CheckboxContainer, CheckboxLabel, Box } from './styles';

const Checkbox = ({ label, defaultClassName, optionalClassName, Icon, iconProps, disabled }) => {
  const [className, setClassName] = useState(defaultClassName);
  const toggleToClassName = getClassName(className, defaultClassName, optionalClassName);

  const handleClick = () => {
    setClassName(toggleToClassName);
  }

  return (
    <CheckboxContainer
      className={bemDestruct(className, disabled)}
      onClick={handleClick}
      >
        <CheckboxLabel label={label}>{ label }</CheckboxLabel>
        <Box className={bemDestruct(className, disabled)} />
        <IconGenerator
          renderIcon={Icon}
          props={{ ...iconProps, className: bemDestruct(className) }}
        />
    </CheckboxContainer>
  )
};

export default Checkbox;

/**
 * El checkbox va a tener como variantes:
 * - El tilde en positivo (tilde violeta, fondo transparente): usado cuando existe solo una opción tildable
 * - El tilde en negativo (tilde blanco, fondo violeta): usados cuando existe una o varias opciones tildables
 */