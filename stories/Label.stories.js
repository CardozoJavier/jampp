import React from 'react';
import '../src/main.css';
import {
  EllipseIcon,
  XIcon,
} from '../src/Components/UI/Icons';

import { StatusLabelContainer } from './styles/StoriesContainer.styles';

import { StatusLabel, DefaultLabel } from '../src/Components';

export default {
  title: 'Label',
};

/**
 * DefaultLabel component should be called with
 * @prop {String} text - (Required) Text to be display inside label.
 * @prop {String} size - (Optional) Define label size, it can be small or medium. Small is default.
 * @prop {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 */
export const Default = () => (
  <>
    <DefaultLabel text="Label" size="small" />
    <DefaultLabel text="Label" size="medium" onClose={() => console.log('Closing label is clicked')} />
  </>
);

/**
 * StatusLabel component should be called with
 * @prop {String} text - (Required) Text to be display inside label.
 * @prop {String} color - (Required) Define the color pill.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 */
export const Status = () => (
  <StatusLabelContainer>
    <div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="green" />
      </div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="red" />
      </div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="yellow" />
      </div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="blue" />
      </div>
    </div>

    <div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="green" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="red" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="yellow" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <StatusLabel text="Status" color="blue" icon={EllipseIcon} />
      </div>
    </div>
  </StatusLabelContainer>
);


