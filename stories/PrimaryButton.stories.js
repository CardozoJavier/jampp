import React from 'react';
import '../src/main.css';
import { Button, } from '../src/Components';

export default {
  title: 'Primary Button',
};

/**
 * Button component should be called with
 * @prop {String} label - (Required) Text to be display inside button.
 * @prop {String} type - (Required) Define button classes for styling.
 * @prop {Boolean} fixed - (Optional) Disabled move up transform on hover.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onClick - (Optional) Callback to trigger on onClick event.
 * @prop {Object} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 */
export const Solid = () => (
  <>
    <Button label="Primary big button" type="primary-default-large" />
    <Button label="Primary big button" type="primary-default-large" disabled />
  </>
);

export const Ghost = () => (
  <>
    <Button label="Primary ghost button" type="primary-inverted-large" />
    <Button label="Primary ghost button" type="primary-inverted-large" disabled />
  </>
);