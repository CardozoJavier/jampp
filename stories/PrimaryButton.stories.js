import React from 'react';
import '../src/main.css';
import { Button, } from '../src/Components';

export default {
  title: 'Primary Button',
};

/**
 * Button component should be called with
 * @prop {string} label - (Required) Text to be display inside button.
 * @prop {string} type - (Required) Define button classes for styling.
 * @prop {boolean} fixed - (Optional) Disabled move up transform on hover.
 * @prop {boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {function} icon - (Optional) Function that returns an svg icon.
 * @prop {function} onClick - (Optional) Callback to trigger on onClick event.
 * @prop {object} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
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