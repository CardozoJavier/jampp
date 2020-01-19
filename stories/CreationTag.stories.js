import React from 'react';
import '../src/main.css';
import { CreationTag } from '../src/Components/CreationTag';
export default {
  title: 'Creation tag'
};

/**
 * CreationTag component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {String} label - (Optional) Text to be display in label.
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 * @prop {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @prop {Function} onTagDeleted - (Optional) Callback to trigger when tag is deleted. It receive tag value in first argument.
 */

export const Default = () => (
  <CreationTag
    placeholder="Input value"
    label="Label"
    id="input1" 
    type="basic"
    width="433px"
    onTagCreated={event => console.log(event + ' has been created')}
    onTagDeleted={event => console.log(event + ' has been deleted')}
  />
);
