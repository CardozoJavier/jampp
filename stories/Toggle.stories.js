import React from 'react';
import { ToggleSwitch } from '../src/Components';

export default {
  title: 'Toggle',
};

/**
 * Toggle component can be called with
 * @param {string} color - Used for setting the active color on switch. Can be 'green' (default), 'blue', 'red', 'yellow'.
 * @param {function} onChange - Callback to trigger on onChange event. It receive one argument (true or false).
 * @param {boolean} disabled - Flag to disable component if param is true.
 */ 
export const Toggle = () => (
  <>
    <ToggleSwitch />
    <ToggleSwitch color="blue" onChange={(status) => setTimeout(() => alert('Toggle status is ' + status), 500)} />
    <ToggleSwitch color="green" disabled={true} />
  </>
);
