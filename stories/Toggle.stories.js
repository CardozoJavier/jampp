import React from 'react';
import { ToggleSwitch } from '../src/Components';

export default {
  title: 'Toggle',
};

export const Toggle = () => (
  <>
    <ToggleSwitch color="green" />
    <ToggleSwitch color="green" disabled={true}/>
  </>
);
