import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  DownloadFileIcon,
} from '../src/Components/UI/Icons';

import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';


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
      <MultipleOptionDropdown text="Text" type='no-border'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Text" type="no-border">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="no-border">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="no-border" disabled={true}>
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
      <MultipleOptionDropdown text="Advanced Options" type='no-border-link'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Advanced Options" type="no-border-link">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="no-border-link">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="no-border-link" disabled={true}>
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
      <MultipleOptionDropdown text="Advertiser" type='no-border-purple'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Advertiser" type="no-border-purple">
        <Option label="Option 1" id="id1" type="dropdown" right />
        <Option label="Option 2" id="id2" type="dropdown" right />
        <Option label="Option 3" id="id3" type="dropdown" right />
        <Option label="Option 4" id="id4" type="dropdown" right />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advertiser" type="no-border-purple">
        <StatusLabel label="status" id="id1" color="red" type="dropdown" right />
        <StatusLabel label="status" id="id2" color="yellow" type="dropdown" right />
        <StatusLabel label="status" id="id3" color="green" type="dropdown" right />
        <StatusLabel label="status" id="id4" color="blue" type="dropdown" right />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);