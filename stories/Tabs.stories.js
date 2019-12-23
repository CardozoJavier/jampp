import React from 'react';
import '../src/main.css';
import { TabGroup, Tab } from '../src/Components/Tab';
import { BillingIcon } from '../src/Components/UI/Icons';
import AddAccountIcon from '../src/Components/UI/Icons/AddAccountIcon';

export default {
  title: 'Tabs',
};

export const Tabs = () => (
  <div style={{ width: '600px' }}>
    <TabGroup defaultActive="tab1" name="group1">
      <Tab text="Active tab long name" id="tab1" />
      <Tab text="Inactive tab long name" id="tab2" />
    </TabGroup>
  </div>
);

export const WithLeftIcon = () => (
  <div style={{ width: '600px' }}>
    <TabGroup defaultActive="tab1">
      <Tab text="Active tab long name" id="tab1" icon={BillingIcon} />
      <Tab text="Inactive tab long name" id="tab2" icon={AddAccountIcon} />
    </TabGroup>
  </div>
);
