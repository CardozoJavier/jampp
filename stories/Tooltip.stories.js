import React from 'react';
import { TrashIcon } from '../src/Components/UI/Icons';
import { Tooltip } from '../src/Components';

export default {
  title: 'Tooltip',
};

/**
 * Tooltip component should be called with
 * @prop {Node} children - (Required) It's the element target.
 * @prop {String} text - (Required) It's the text to be displayed into tooltip.
 * @prop {Boolean} hide - (Optional) If true, tooltip will not display.
 */
export const Default = () => (
  <Tooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
    <TrashIcon props={{ height: '18px', width: '18px', fill: '#000', cursor: 'pointer', }} />
  </Tooltip>
);