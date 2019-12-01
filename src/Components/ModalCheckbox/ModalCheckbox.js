import React from 'react';
import { ModalCheckboxContainer } from './styles';
import { CheckIcon } from '../UI/Icons';
import { palette } from '../styles';
import { Checkbox } from '../Checkbox';
import { bemDestruct } from '../../utils';

const { action, white, } = palette;

const ModalCheckbox = ({ className, options, }) => {
  return (
    <ModalCheckboxContainer className={bemDestruct(className)}>
      {options.map(option => (
        <Checkbox
          key={option.label}
          label={option.label}
          Icon={CheckIcon}
          iconProps={{
            right: '13px',
            top: '5px',
            fill: white,
            width: '9px',
            height: '7px',
          }}
          defaultClassName={option.defaultClassName}
          optionalClassName={option.optionalClassName}
        />
      ))}  
    </ModalCheckboxContainer>
  );
};

export default ModalCheckbox;
