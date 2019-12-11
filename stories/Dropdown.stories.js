import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  BeltIcon,
  HelpIcon,
  EllipseIcon,
  IconGenerator,
  DownChevronIcon,
} from '../src/Components/UI/Icons';

import {
  AccountTitle,
  AccountStatement,
  DropdownContainer,
  AccountDescription,
  NotificationContainer,
} from '../src/Components/Dropdown/styles';

import AvatarSrc from '../src/assets/guido-crego.jpg'; 

import {
  Dropdown,
  OptionDropdown,
  StatusLabelDropdown,
  MultipleOptionDropdown,
  Checkbox,
} from '../src/Components';
import { dropdownAction } from '../src/utils';

export default {
  title: 'Dropdown',
};

const { black, green, gray } = palette;

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
        type='full'
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
        type='full'
      />
    </DropdownContainer>
  </>
);

export const Checkboxes = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown label="Text" type='normal'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown
        label="Text"
        defaultClassName="dropdown option--default-right__closed"
        optionalClassName="dropdown option--default-right__opened"
      />
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown
        label="Text"
        defaultClassName="dropdown label--default-status__closed"
        optionalClassName="dropdown label--default-status__opened"
      />
    </DropdownContainer>
  </>
);

