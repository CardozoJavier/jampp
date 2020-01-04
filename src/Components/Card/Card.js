import React from 'react';
import { CardContainer, CardTitle, CardDescription, CardHeader } from './styles';

/**
 * Card component can be called with
 * @param {String} title - It's title to be displayed in card.
 * @param {String} description - It's description to be displayed in card below of title.
 * @return {React Component} A view for card with title and description.
 */
const Card = ({ children, title, description }) => (
  <>
    <CardHeader>
      <CardTitle>{ title }</CardTitle>
      {description && <CardDescription>{ description }</CardDescription>}
    </CardHeader>
    {children}
  </>
);

export default Card;
