import React from 'react';
import { MultipleOptionListContainer, OptionContainer } from './styles';
import { bemDestruct, isLastItem } from '../../utils';

const MultipleOptionList = ({ children, className }) => (
  <MultipleOptionListContainer className={bemDestruct(className)}>
    {children.map((option, index) => (
      <OptionContainer key={index} className={`last-item__${isLastItem(children.length, index)}`}>
        {option}
      </OptionContainer>
    ))}
  </MultipleOptionListContainer>
);

export default MultipleOptionList;
