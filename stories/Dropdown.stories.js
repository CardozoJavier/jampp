import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  BeltIcon,
  HelpIcon,
  IconGenerator,
  DownChevronIcon,
  EllipseIcon,
} from '../src/Components/UI/Icons';

import {
  AccountTitle,
  AccountStatement,
  DropdownContainer,
  AccountDescription,
  NotificationContainer,
} from '../src/Components/Dropdown/styles';

import AvatarSrc from '../src/assets/guido-crego.jpg'; 

import { Dropdown } from '../src/Components';

export default {
  title: 'Dropdown',
};

const { black, green } = palette;

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
      <NotificationContainer>
        <IconGenerator
          renderIcon={BeltIcon}
          props={{
            fill: black,
            width: '18px',
            height: '18px',
            margin: '0 5px',
          }}
        />
        <IconGenerator
          renderIcon={EllipseIcon}
          props={{
            position: 'relative',
            right: '12px',
            bottom: '3px',
            fill: green.g1,
            width: '10px',
            height: '10px',
          }}
        />
      </NotificationContainer>
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

    <DropdownContainer>
      <IconGenerator
        renderIcon={HelpIcon}
        props={{
          fill: black,
          width: '20px',
          height: '18px',
        }}
      />
      <NotificationContainer>
        <IconGenerator
          renderIcon={BeltIcon}
          props={{
            fill: black,
            width: '18px',
            height: '18px',
            margin: '0 10px',
          }}
        />
        <IconGenerator
          renderIcon={EllipseIcon}
          props={{
            position: 'relative',
            right: '17px',
            bottom: '3px',
            fill: green.g1,
            width: '10px',
            height: '10px',
          }}
        />
      </NotificationContainer>
      <Dropdown
        iconDropdown={DownChevronIcon}
        optionDropdown={AvatarSrc}
        defaultClassName="dropdown account--full-right__closed"
        optionalClassName="dropdown account--full-right__opened"
      />
    </DropdownContainer>
  </>
);