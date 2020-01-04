import React from 'react';
import { Card } from '../src/Components';
import { CardContainer } from '../src/Components/Card/styles';

export default {
  title: 'Cards',
};

/**
 * Card component can be called with
 * @prop {String} title - It's title to be displayed in card.
 * @prop {String} description - It's description to be displayed in card below of title.
 */
export const WithTitle = () => (
  <CardContainer width="600px">
    <Card title="Title" />
  </CardContainer>
);

export const WithTitleAndDescription = () => (
  <CardContainer width="600px">
    <Card title="Title" description="This information will be used to create your account. You will not be able to change this setting later, so choose the options carefully" />
  </CardContainer>
);
