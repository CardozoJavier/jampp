import React, { useState } from 'react';
import { InformativeModalContainer } from './styles';
import { InputField } from '../InputField';
import { Text, GridContainer } from '../UI/GenericElements/GenericElements.styles';
import { InputFieldContainer, } from '../InputField/styles';

const InformativeModal = ({ children }) => {
  const [value, setValue] = useState('');

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <InformativeModalContainer>
      <InputFieldContainer width="129px" margin="0 0 11px 0">
        <InputField placeholder="Text" type="basic" onChange={value => handleChange(value)} />
      </InputFieldContainer>
      {children.map(child => (
        <GridContainer key={child.props.children} gridTemplateColumns="50% 50%">
          <Text color={child.props.color} margin="4px 0" fontSize={child.props.fontSize}>{ child.props.children }</Text>
          <Text color="#000" margin="4px 0" fontSize="12px" overflow={'hidden'}>{ value }</Text>
        </GridContainer>
      ))}
    </InformativeModalContainer>
  );
};

export default InformativeModal;