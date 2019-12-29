import React from 'react';
import '../src/main.css';
import { AddIcon } from '../src/Components/UI/Icons';
import { Button, } from '../src/Components';

export default {
  title: 'Secondary Button',
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
export const SolidPurple = () => (
  <>
    <Button label="Solid secondary button" type="secondary-default-medium" />
    <Button label="Solid secondary button" type="secondary-default-medium" disabled />
  </>
);

export const SolidGray = () => (
  <>
    <Button label="Solid gray secondary button" type="secondary-gray-medium" />
    <Button label="Solid gray secondary button" type="secondary-gray-medium" disabled/>
  </>
);

export const PurpleWithRightIcon = () => (
  <>
    <Button label="Button" type="accessory-default-left" icon={AddIcon} />
    <Button label="Button" type="accessory-default-left" icon={AddIcon} disabled/>
  </>
);

export const GrayWithRightIcon = () => (
  <>
    <Button label="Button" type="accessory-gray-left" icon={AddIcon} />
    <Button label="Button" type="accessory-gray-left" icon={AddIcon} disabled />
  </>
);

export const Ghost = () => (
  <>
    <Button label="Button" type="secondary-inverted-medium" />
    <Button label="Button" type="secondary-inverted-medium" disabled/>
  </>
);
