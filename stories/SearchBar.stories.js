import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
} from '../src/Components/UI/Icons';

import {
  InputField,
} from '../src/Components/InputField';
export default {
  title: 'Searchbar'
};


export const WithIcon = () => (
  <div style={{ width: '600px' }}>
    <InputField placeholder="Text" type="searchbar" icon={SearchIcon} />
  </div>
);
