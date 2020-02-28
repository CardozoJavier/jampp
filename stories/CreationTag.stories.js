import React from 'react';
import '../src/main.css';
import { CreationTag, CreationTagSuggestion, CreationTracking } from '../src/Components/CreationTag';
export default {
  title: 'Creation tag'
};

/**
 * CreationTag component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {String} label - (Optional) Text to be display in label.
 * @prop {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @prop {Function} onTagDeleted - (Optional) Callback to trigger when tag is deleted. It receive tag value in first argument.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 */
export const Default = () => (
  <CreationTag
    placeholder="Input value"
    label="Label"
    type="basic"
    width="433px"
    onTagCreated={event => console.log(event + ' has been created')}
    onTagDeleted={event => console.log(event + ' has been deleted')}
    errorMessage="Type error"
    onError={() => true}
  />
);

/**
 * CreationTagSuggestion component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {String} label - (Optional) Text to be display in label.
 * @prop {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @prop {Function} onTagDeleted - (Optional) Callback to trigger when tag is deleted. It receive tag value in first argument.
 * @prop {Array} suggestions - (Required) Array of string to be displayed in suggestions list.
 * @prop {Function} callback - (Optional) Callback to be triggered on click event in button into suggestions list.
 */
export const Suggestions = () => (
  <CreationTagSuggestion
    type="suggestions-default"
    width="433px"
    suggestions={["Option 1", "Option 2", "Option 3"]}
    callback={() => console.log('Displaying full list')}
    onTagCreated={event => console.log(event + ' has been created')}
    onTagDeleted={event => console.log(event + ' has been deleted')}
  />
);

/**
 * CreationTagSuggestion component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {String} label - (Optional) Text to be display in label.
 * @prop {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
 * @prop {Function} onTagDeleted - (Optional) Callback to trigger when tag is deleted. It receive tag value in first argument.
 * @prop {Array} suggestions - (Required) Array of string to be displayed in suggestions list.
 * @prop {Function} callback - (Optional) Callback to be triggered on click event in button into suggestions list.
 * @prop {String} linkText - (Optional) It's the text to be displayed like link.
 * @prop {String} textBelowSuggestions - (Optional) It's the text to be displayed at the bottom of suggestions list.
 */
export const TrackingSuggestions = () => (
  <CreationTracking
    width="433px"
    linkText="Full list"
    type="suggestions-tracking"
    textBelowSuggestions="or select from the"
    suggestions={["Option 1", "Option 2", "Option 3"]}
    callback={() => console.log('Displaying full list')}
    onTagCreated={event => console.log(event + ' has been created')}
    onTagDeleted={event => console.log(event + ' has been deleted')}
  />
);