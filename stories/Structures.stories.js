import React from 'react';
import {
  Modal,
  Button,
  InputField,
  OptionDropdown,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';
import {
  ModalText,
  ModalFooter,
  ModalContainer,
  ModalContainerB,
  ModalRowContainer,
} from '../src/Components/Modal/styles';
import { Option } from '../src/Components/OptionList/styles';
import { FilterIcon, TrashIcon } from '../src/Components/UI/Icons';
import { palette } from '../src/Components/styles';
import { LabelContainer } from '../src/Components/InputField/styles';
const { gray } = palette;

export default {
  title: 'Structures',
};


export const ModalA = () => (
  <Modal title="Modal Title">
    <ModalRowContainer padding="20px" justifyContent="space-between">
      <LabelContainer padding="0 10px 0 0" margin="0 5px 0 0">
        <InputField label="Title" id='input1' placeholder="Text" type="basic" onChange={value => console.log(value)} />
      </LabelContainer>
      <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding="20px" justifyContent="space-between">
      <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 15px 0 0">
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
      <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding="20px">
      <LabelContainer width="47.5%">
        <InputField label="Title" id='input2' placeholder="Text" type="basic" onChange={value => console.log(value)} />
      </LabelContainer>
    </ModalRowContainer>

    <ModalFooter>
      <Button label="Action button" type="secondary-default-medium" />
    </ModalFooter>
  </Modal>
);

export const ModalB = () => (
    <ModalContainerB width="480px">
      <Modal title="Lorem ipsum dolor sit amet, consectetur adipiscing ?" icon={TrashIcon}>
        <>
        <ModalRowContainer>
          <Button label="No, cancel" type="secondary-gray-medium"/>
          <Button label="Yes, delete" type="secondary-red-medium"/>
        </ModalRowContainer>
        </>
      </Modal>
    </ModalContainerB>
);

export const ModalC = () => (
  <Modal title="Modal Title">
    <ModalRowContainer padding='0 20px' justifyContent="space-between">
      <DropdownContainer width='50%' direction='column' alignItems='start'>
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding='0 20px' justifyContent="space-between">
      <ModalText fontSize='10px' color={gray.g3} margin='16px 0 32px 0'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalText>
    </ModalRowContainer>


    <ModalRowContainer padding='0 20px 20px 20px' justifyContent="flex-start">
      <DropdownContainer width='50%' direction='column' alignItems='start'>
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
      <DropdownContainer width='25%' direction='column' alignItems="start" margin="0 0 0 40px">
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalFooter>
      <Button label="Action button" type="secondary-default-medium" />
    </ModalFooter>
  </Modal>
);
