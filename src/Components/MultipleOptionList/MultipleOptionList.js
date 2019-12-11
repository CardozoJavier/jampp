import React from 'react';
import { MultipleOptionListContainer, OptionContainer } from './styles';
import { bemDestruct, isLastItem } from '../../utils';

const MultipleOptionList = ({ options, className }) => (
  <MultipleOptionListContainer className={bemDestruct(className)}>
    {options.map((option, index) => (
      <OptionContainer className={`last-item__${isLastItem(options.length, index)}`}>
        {option}
      </OptionContainer>
    ))}
  </MultipleOptionListContainer>
);

export default MultipleOptionList;
