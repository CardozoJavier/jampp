import React from 'react';
import { ToggleSwitch } from '../src/Components';

export default {
  title: 'Toggle',
};

/**
 * ToggleSwitch component can be called with
 * @prop {String} color - (Optional) Used for setting the active color on switch. Can be 'green' (default), 'blue', 'red', 'yellow'.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive one argument (true or false).
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 */ 
export const Toggle = () => (
  <>
    <ToggleSwitch />
    <ToggleSwitch color="blue" onChange={(status) => console.log('Toggle status is ' + status)} />
    <ToggleSwitch disabled={true} />
  </>
);
