import React, { useState } from 'react';
import { palette } from '../styles';
import { IconGenerator, CheckIcon, } from '../UI/Icons';
import { bemDestruct, getClassName, } from '../../utils';
import { CheckboxContainer, CheckboxLabel, Box } from './styles';

const { action } = palette;

const Checkbox = ({ label, defaultClassName, optionalClassName, disabled }) => {
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
          renderIcon={CheckIcon}
          props={{
            right: '10px',
            fill: action,
            width: '14px',
            height: '10px',
            className: bemDestruct(className, disabled),
          }}
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