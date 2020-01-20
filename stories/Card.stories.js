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
  <Card title="Title" />
);

export const WithTitleAndDescription = () => (
  <Card
    title="Title"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  />
);
