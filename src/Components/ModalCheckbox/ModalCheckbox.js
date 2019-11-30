import React from 'react';
import { ModalCheckboxContainer } from './styles';
import { Checkbox } from '../Checkbox';
import { bemDestruct } from '../../utils';


const ModalCheckbox = ({ className, options, }) => {
  return (
    <ModalCheckboxContainer className={bemDestruct(className)}>
      {options.map(option => (
        <Checkbox
          key={option.label}
          label={option.label}
          defaultClassName={option.defaultClassName}
          optionalClassName={option.optionalClassName}
        />
      ))}  
    </ModalCheckboxContainer>
  );
};

export default ModalCheckbox;
