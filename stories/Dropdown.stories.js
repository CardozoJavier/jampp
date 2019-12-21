import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  BeltIcon,
  HelpIcon,
  EllipseIcon,
  IconGenerator,
  DownChevronIcon,
  DownloadFileIcon,
} from '../src/Components/UI/Icons';

import {
  AccountTitle,
  DropdownLabel,
  AccountStatement,
  DropdownContainer,
  AccountDescription,
  NotificationContainer,
} from '../src/Components/Dropdown/styles';

import AvatarSrc from '../src/assets/guido-crego.jpg'; 

import {
  Dropdown,
  Checkbox,
  StatusLabel,
  OptionDropdown,
  StatusLabelDropdown,
  MultipleOptionDropdown,
} from '../src/Components';
import { Option } from '../src/Components/OptionList/styles';

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
        avatar={AvatarSrc}
        type='normal'
      >
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </Dropdown>
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
            fill: green.g1,
            width: '10px',
            height: '10px',
          }}
        />
      </NotificationContainer>
      <Dropdown
        iconDropdown={DownChevronIcon}
        avatar={AvatarSrc}
        type='normal'
      >
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </Dropdown>
    </DropdownContainer>
  </>
);

export const Basic = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Text" type='basic'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Text" type="basic">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>
 
    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="basic">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const BasicWithLabel = () => (
  <DropdownContainer direction='column' align='start'>
    <DropdownLabel>Text</DropdownLabel>
    <StatusLabelDropdown text="Text" type="basic" disabled={true}>
      <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
      <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
      <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
      <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
    </StatusLabelDropdown>
  </DropdownContainer>
);

export const SolidWithIcon = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Dropdown solid w/icon" type='solid' leftIcon={DownloadFileIcon}>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon} disabled={true}>
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const NoBorder = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Text" type='noBorder'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Text" type="noBorder">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="noBorder">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="noBorder" disabled={true}>
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const NoBorderLink = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Advanced Options" type='noBorderLink'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Advanced Options" type="noBorderLink">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="noBorderLink">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="noBorderLink" disabled={true}>
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const NoBorderPurple = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Advertiser" type='noBorderPurple'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Advertiser" type="noBorderPurple">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advertiser" type="noBorderPurple">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);