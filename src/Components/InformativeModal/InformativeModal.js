import React, { useState, useEffect } from 'react';
import { InformativeModalContainer, ResultContainer } from './styles';
import { Text, GridContainer } from '../UI/GenericElements/GenericElements.styles';

const InformativeModal = ({ children }) => {
  const [result, setResult] = useState(0);
  let partialResult = 0;

  useEffect(() => {
    children.forEach(child => {
      partialResult += Number(child.props.children);
    });
    setResult(partialResult);
  });

  return (
    <InformativeModalContainer>
      <ResultContainer>${ result }</ResultContainer>
      {children.map(child => (
        <GridContainer key={child.props.children} gridTemplateColumns="50% 50%">
          <Text color={child.props.color} margin="4px 0" fontSize={child.props.fontSize}>{ child.props.text }</Text>
          <Text color="#000" margin="4px 0" fontSize="12px" overflow={'hidden'} justifySelf="end">${ child.props.children }</Text>
        </GridContainer>
      ))}
    </InformativeModalContainer>
  );
};

export default InformativeModal;