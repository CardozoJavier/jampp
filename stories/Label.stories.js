import React from 'react';
import '../src/main.css';
import {
  EllipseIcon,
  XIcon,
} from '../src/Components/UI/Icons';

import { StatusLabelContainer } from './styles/StoriesContainer.styles';

import { Button, } from '../src/Components';

export default {
  title: 'Label',
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
export const Default = () => (
  <>
    <Button label="Label" type="label-default-small" icon={XIcon} />
    <Button label="Label" type="label-default-medium" icon={XIcon} />
  </>
);

export const Status = () => (
  <StatusLabelContainer>
    <div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-green" />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-red" />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-yellow" />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-blue" />
      </div>
    </div>

    <div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-green" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-red" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-yellow" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-blue" icon={EllipseIcon} />
      </div>
    </div>
  </StatusLabelContainer>
);