import React from 'react';
import { CardContainer, CardTitle, CardDescription, CardHeader } from './styles';

const Card = ({ title, description }) => (
  <CardContainer>
    <CardHeader>
      <CardTitle>{ title }</CardTitle>
      {description && <CardDescription>{ description }</CardDescription>}
    </CardHeader>
  </CardContainer>
);

export default Card;
