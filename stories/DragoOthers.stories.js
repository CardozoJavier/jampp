import React from 'react';
import {
  Card,
  OptionDropdown,
  AdditionalDetailsDropdown,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';
import { ModalRowContainer } from '../src/Components/Modal/styles';
import { Option } from '../src/Components/OptionList/styles';

export default {
  title: 'Drago others',
};

export const AdditionalDetails = () => (
  <Card width="922px">
    <DropdownContainer width='18%' direction='column' alignItems="start" margin="0 0 48px 0">
      <DropdownLabel>Domain</DropdownLabel>
      <OptionDropdown wide notIcon text="Text" type='basic'>
        <Option label="Option 1" id="id1" right />
        <Option label="Option 2" id="id2" right />
        <Option label="Option 3" id="id3" right />
        <Option label="Option 4" id="id4" right />
      </OptionDropdown>
    </DropdownContainer>

    <AdditionalDetailsDropdown text="Additional details" type="no-border-link">
      <ModalRowContainer padding="20px" justifyContent="space-between">
        <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 15px 0 0">
          <DropdownLabel>Country</DropdownLabel>
          <OptionDropdown wide notIcon text="Argentina" type='basic'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownContainer>
        <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
          <DropdownLabel>Region</DropdownLabel>
          <OptionDropdown wide notIcon text="Select Region" type='basic'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownContainer>
      </ModalRowContainer>
    </AdditionalDetailsDropdown>

    <DropdownContainer width='50%' direction='column' alignItems='start' margin="40px 0 0 0">
      <DropdownLabel>Region</DropdownLabel>
      <OptionDropdown wide notIcon text="Select Region" type='basic' disabled>
        <Option label="Option 1" id="id1" right />
        <Option label="Option 2" id="id2" right />
        <Option label="Option 3" id="id3" right />
        <Option label="Option 4" id="id4" right />
      </OptionDropdown>
    </DropdownContainer>
  </Card>
);
