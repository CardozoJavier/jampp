import React from 'react';
import { IconGenerator, CheckIcon } from '../UI/Icons';
import { bemDestruct } from '../../utils';
import { OptionContainer, OptionLabel } from './styles';
import { palette } from '../styles';

const { white } = palette;

const UniqueOption = ({ id, label, className, handleCheck }) => (
  <OptionContainer
    key={id}
    className={bemDestruct(className)}
    onClick={(e) => handleCheck(e, id)}
  >
    <OptionLabel>{ label }</OptionLabel>
    <IconGenerator
      renderIcon={CheckIcon}
      props={{
        right: '10px',
        fill: white,
        width: '14px',
        height: '10px',
        className: bemDestruct(className),
      }}
    />
  </OptionContainer>
)

export default UniqueOption;
