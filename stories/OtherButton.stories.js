import React from 'react';
import '../src/main.css';
import { Button } from '../src/Components';
import { AddIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Other Button',
};

/**
 * Button component should be called with
 * @prop {String} label - (Required) Text to be display inside button.
 * @prop {String} type - (Required) Define button classes for styling.
 * @prop {Boolean} fixed - (Optional) Disabled move up transform on hover.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onClick - (Optional) Callback to trigger on onClick event.
 * @prop {Node} children - (Optional) HTML element to be rendered, e.g.: strong tag inside button.
 * @prop {String} fontSize - (Optional) It's the font size for text button. Default value depend on button type.
 */
export const Link = () => (
  <>
    <Button label="Button-link" type="link-default-left" icon={AddIcon} />
    <Button label="Button-link" type="link-default-left" icon={AddIcon} disabled />
  </>
);
