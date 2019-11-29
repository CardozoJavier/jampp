import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  BeltIcon,
  HelpIcon,
  IconGenerator,
  DownChevronIcon,
} from '../src/Components/UI/Icons';

import {
  AccountTitle,
  AccountStatement,
  DropdownContainer,
  AccountDescription,
} from '../src/Components/Dropdown/styles';

import AvatarSrc from '../src/assets/guido-crego.jpg'; 

import { Dropdown } from '../src/Components';

export default {
  title: 'Dropdown',
};

const { black } = palette;

export const Account = () => (
  <>
    <DropdownContainer>
      <IconGenerator
        renderIcon={HelpIcon}
        props={{
          fill: black,
          width: '20px',
          height: '18px',
          margin: '0 10px'
        }}
      />
      <IconGenerator
        renderIcon={BeltIcon}
        props={{
          fill: black,
          width: '18px',
          height: '18px',
          margin: '0 5px',
        }}
      />
      <AccountStatement>
        <AccountTitle>
          Guido Crego
        </AccountTitle>
        <AccountDescription>
          Jampp - Head of product
        </AccountDescription>
      </AccountStatement>
      <Dropdown
        iconDropdown={DownChevronIcon}
        optionDropdown={AvatarSrc}
        defaultClassName="dropdown account--full-right__closed"
        optionalClassName="dropdown account--full-right__opened"
      />
    </DropdownContainer>
  </>
);