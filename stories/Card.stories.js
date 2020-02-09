import React from 'react';
import { Card, InputField } from '../src/Components';
import { ExpandableCard } from '../src/Components/Card';
import { palette } from '../src/Components/styles';
import { DivContainer } from '../src/Components/UI/GenericElements/GenericElements.styles';
const { gray } = palette;

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
  <ExpandableCard width="800px" title="Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
);

/**
 * ExpandableCard component can be called with
 * @prop {Node} children - (Optional)  It's the content to be displayed into Card.
 * @prop {String} title - (Optional) It's title to be displayed in card.
 * @prop {String} description - (Optional) It's description to be displayed in card below of title.
 * @prop {String} width - (Optional) It's the width of the card container. Default value is 600px.
 * @prop {String} padding - (Optional) It's the padding of the card container.
 * @prop {Boolean} addStructure - (Optional) Indicate if possible adding new structures.
 */
export const DuplicateStructure = () => (
  <ExpandableCard width="800px" title="Title" addStructure={true}>
    <DivContainer padding="10px 20px 20px 20px" borderRadius="4px" border={`1px solid ${gray.g1}`}>
      <InputField id="input1" margin="10px 0 20px 0" placeholder="Text" label="Label" type="basic" />
      <InputField id="input2" margin="0 0 20px 0" placeholder="Text" label="Label" type="basic" />
    </DivContainer>
  </ExpandableCard>
);