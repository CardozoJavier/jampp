import React from 'react';
import { Card } from '../src/Components';
import { ExpandableCard } from '../src/Components/Card';

export default {
  title: 'Cards',
};

/**
 * Card component can be called with
 * @prop {String} title - (Optional) It's title to be displayed in card.
 * @prop {String} description - (Optional) It's description to be displayed in card below of title.
 * @prop {String} width - (Optional) It's the width of the card container. Default value is 600px.
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

/**
 * ExpandableCard component can be called with
 * @prop {Node} children - (Optional)  It's the content to be displayed into Card.
 * @prop {String} title - (Optional) It's title to be displayed in card.
 * @prop {String} description - (Optional) It's description to be displayed in card below of title.
 * @prop {String} width - (Optional) It's the width of the card container. Default value is 600px.
 * @prop {String} padding - (Optional) It's the padding of the card container.
 */
export const Expandable = () => (
  <ExpandableCard width="800px" title="Title" description="Short description of content" />
);