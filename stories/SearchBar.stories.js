import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
} from '../src/Components/UI/Icons';

import {
  InputField,
} from '../src/Components/InputField';
export default {
  title: 'Searchbar'
};

/**
 * InputField component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {String} label - (Optional) Text to be display in label.
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 */
export const WithIcon = () => (
  <div style={{ width: '600px' }}>
    <InputField placeholder="Text" type="searchbar" icon={SearchIcon} />
  </div>
);
