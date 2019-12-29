import React from 'react';
import '../src/main.css';
import { TabGroup, Tab } from '../src/Components/Tab';
import { BillingIcon } from '../src/Components/UI/Icons';
import AddAccountIcon from '../src/Components/UI/Icons/AddAccountIcon';

export default {
  title: 'Tabs',
};

/**
 * TabGroup component should be called with
 * @prop {string} defaultActive - (Optional) It select the default active tab. It should match with tab id.
 * @prop {string} name - (Required) Name of tabs group necesary to implement several groups in the same component.
 *  
 *  Tab component should be called with
 *  @prop {string} text - (Required) It's the name of tab.
 *  @prop {id} id - (Required) It's an unique ID to identifier each tab in TabGroup.
 *  @prop {function} - (Optional) Function that returns an svg icon.
 */

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
