import React from 'react';
import { Card } from '../src/Components';
import { CardContainer } from '../src/Components/Card/styles';

export default {
  title: 'Cards',
};

/**
 * Card component can be called with
 * @prop {String} title - (Optional) It's title to be displayed in card.
 * @prop {String} description - (Optional) It's description to be displayed in card below of title.
 * @prop {String} width - (Optional) It's the width of the card container.
 */
export const WithTitle = () => (
  <Card title="Title" width="600px"/>
);

export const WithTitleAndDescription = () => (
  <Card
    width="600px"
    title="Title"
    description="This information will be used to create your account. You will not be able to change this setting later, so choose the options carefully"
  />
);
