import React from 'react';
import { IconGenerator, CheckIcon } from '../UI/Icons';
import { bemDestruct } from '../../utils';
import { OptionContainer, OptionLabel } from './styles';
import { palette } from '../styles';

const { action } = palette;

const UniqueOption = ({ value, label, className, handleCheck }) => (
  <OptionContainer
    key={value}
    className={bemDestruct(className)}
    onClick={(e) => handleCheck(e, value)}
  >
    <OptionLabel>{ label }</OptionLabel>
    <IconGenerator
      renderIcon={CheckIcon}
      props={{
        right: '10px',
        fill: action,
        width: '14px',
        height: '10px',
        className: bemDestruct(className),
      }}
    />
  </OptionContainer>
)

export default UniqueOption;
