import React from 'react';
import { Card, InputField } from '../src/Components';
import { ExpandableCard } from '../src/Components/Card';
import { palette } from '../src/Components/styles';
import { DivContainer } from '../src/Components/UI/GenericElements/GenericElements.styles';
import CloneElement from '../src/Components/CloneElement/CloneElement';
import { BoldAddIcon, TrashIcon } from '../src/Components/UI/Icons';
const { gray, black } = palette;

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
 * 
 *  CloneElement component should be called with
 *  @prop {Array} children - (Required) They're the structures to be cloned. Can be one React node or an array of React nodes.
 */
export const DuplicateStructure = () => (
  <ExpandableCard width="800px" title="Title">
    <CloneElement buttonText="Add more" buttonType="link-default-left" buttonIcon={BoldAddIcon} removableFirst={false}>
      <DivContainer padding="10px 20px 20px 20px" borderRadius="4px" border={`1px solid ${gray.g1}`}>
        <TrashIcon
          role='icon-to-remove-structure'
          props={{
            width: '18px',
            height: '18px',
            fill: gray.g3,
            margin: '5px 0 0 auto',
            cursor: 'pointer',
            hover: black,
            onClick: () => console.log('Display modal'),
          }}
        />
        <InputField id="input1" margin="10px 0 20px 0" placeholder="Text" label="Label" type="basic" />
        <InputField id="input2" margin="0 0 20px 0" placeholder="Text" label="Label" type="basic" />
      </DivContainer>
    </CloneElement>
  </ExpandableCard>
);