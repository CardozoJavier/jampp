import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
  DownChevronIcon,
} from '../src/Components/UI/Icons';

import {
  InputLabel,
  InputBasic,
  InputAccessory,
  InputControlled,
  InputErrorMessage,
  InputField,
} from '../src/Components/InputField';
export default {
  title: 'Searchbar'
};


export const WithIcon = () => (
  <>
    <InputField placeholder="Text" type="searchbar" icon={SearchIcon} />
  </>
);
