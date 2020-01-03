import React from 'react';
import {
  Modal,
  InputField,
  MultipleOptionDropdown,
  Button,
  Checkbox,
  OptionDropdown,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';
import {
  ModalRowContainer,
  ModalContainerA,
  ModalFooter,
  ModalText,
} from '../src/Components/Modal/styles';
import { Option } from '../src/Components/OptionList/styles';
import { TrashIcon, FilterIcon } from '../src/Components/UI/Icons';
import { palette } from '../src/Components/styles';
const { gray } = palette;

export default {
  title: 'Structures',
};


export const ModalA = () => (
  <Modal title="Modal Title">
    <ModalRowContainer padding="20px" justifyContent="space-between">
      <InputField label="Advertiser Name" id='input1' placeholder="Name" type="basic" onChange={value => console.log(value)} />
      <DropdownContainer width='100%' direction='column' align='start' margin="0 0 0 15px">
        <DropdownLabel>Vertical</DropdownLabel>
        <MultipleOptionDropdown text="Select Vertical" type='basic'>
          <Checkbox label="Option 1" type="dropdown" right />
          <Checkbox label="Option 2" type="dropdown" right />
          <Checkbox label="Option 3" type="dropdown" right />
          <Checkbox label="Option 4" type="dropdown" right />
        </MultipleOptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding="20px" justifyContent="space-between">
      <DropdownContainer width='100%' direction='column' align='start' margin="0 15px 0 0">
        <DropdownLabel>Country</DropdownLabel>
        <OptionDropdown text="Argentina" type='basic'>
          <Option label="Option 1" id="id1" />
          <Option label="Option 2" id="id2" />
          <Option label="Option 3" id="id3" />
          <Option label="Option 4" id="id4" />
        </OptionDropdown>
      </DropdownContainer>
      <DropdownContainer width='100%' direction='column' align='start' margin="0 0 0 15px">
        <DropdownLabel>Region</DropdownLabel>
        <MultipleOptionDropdown text="Select Region" type='basic'>
          <Checkbox label="Option 1" type="dropdown" right />
          <Checkbox label="Option 2" type="dropdown" right />
          <Checkbox label="Option 3" type="dropdown" right />
          <Checkbox label="Option 4" type="dropdown" right />
        </MultipleOptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>


    <ModalRowContainer padding="20px" justifyContent="space-between">
      <DropdownContainer width='47.5%' direction='column' align='start' margin="0 15px 0 0">
        <DropdownLabel>Domain</DropdownLabel>
        <MultipleOptionDropdown text="http://www.yourdomain.com/" type='basic'>
          <Checkbox label="Option 1" type="dropdown" right />
          <Checkbox label="Option 2" type="dropdown" right />
          <Checkbox label="Option 3" type="dropdown" right />
          <Checkbox label="Option 4" type="dropdown" right />
        </MultipleOptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalFooter>
      <Button label="Action button" type="secondary-default-medium" />
    </ModalFooter>
  </Modal>
);

export const ModalB = () => (
  <ModalContainerA>
    <Modal title="Modal Title" icon={FilterIcon}>
      <>
      <ModalText>
        Question that needs to be answered with bottons below?
      </ModalText>
      <ModalRowContainer>
        <Button label="No, cancel" type="secondary-gray-medium"/>
        <Button label="Yes, delete" type="secondary-default-medium"/>
      </ModalRowContainer>
      </>
    </Modal>
  </ModalContainerA>
);

export const ModalC = () => (
  <Modal title="Modal Title">
    <ModalRowContainer padding='0 20px' justifyContent="space-between">
      <DropdownContainer width='50%' direction='column' align='start'>
        <DropdownLabel>Vertical</DropdownLabel>
        <MultipleOptionDropdown text="Select Vertical" type='basic' />
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding='0 20px' justifyContent="space-between">
      <ModalText fontSize='10px' color={gray.g3} margin='16px 0 32px 0'>
        With monthly invoicing, you get an invoice for each ad account on the 1st of each month, 
        and then you’d have to pay the invoices by their due date. 
        A line of credits is best for our largest advertisers adn can take several days to approve. 
        If you want to spend now, a credit card is best option.
      </ModalText>
    </ModalRowContainer>


    <ModalRowContainer padding='0 20px' justifyContent="flex-start">
      <DropdownContainer width='50%' direction='column' align='start'>
        <DropdownLabel>Domain</DropdownLabel>
        <MultipleOptionDropdown text="http://www.yourdomain.com/" type='basic' />
      </DropdownContainer>
      <DropdownContainer width='25%' direction='column' align='start' margin="0 0 0 40px">
        <DropdownLabel>Domain</DropdownLabel>
        <MultipleOptionDropdown text="Text" type='basic' />
      </DropdownContainer>
    </ModalRowContainer>

    <ModalFooter>
      <Button label="Action button" type="secondary-default-medium" />
    </ModalFooter>
  </Modal>
);

