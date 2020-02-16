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
 *  @prop {Array} children - (Required) They're the structures to be cloned. Should be one React node.
 *  @prop {String} buttonText - (Optional) The text to be displayed into button add structure. Default value is empty string.
 *  @prop {String} buttonType - (Optional) The button type corresponding to class styles. Default value is link-default-left.
 *  @prop {Node} buttonIcon - (Optional) The icon to be displayed into button. Default value is 'null'.
 *  @prop {Boolean} removableFirst - (Optional) Is the flag to determine if the first structure is removable or not. Default value is true.
 *  @prop {Object} buttonProps - (Optional) It's the props to be passed to structure container for modifying Add button styles.
 *  @prop {Function} onDeleteCallback - (Required) It's the callback to be called when remove icon is clicked. It receive the structure ID in first argument.
 */
export const DuplicateStructure = () => (
  <ExpandableCard width="800px" title="Title">
    <CloneElement buttonText="Add more" buttonType="link-default-left" buttonIcon={BoldAddIcon} removableFirst={false} onDeleteCallback={structureId => console.log('Structure with id ' + structureId + ' want to be deleted')}>
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