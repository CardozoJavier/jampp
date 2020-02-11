import React from 'react';
import {
  Modal,
  Button,
  InputField,
  OptionDropdown,
  InformativeModal,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
  DropdownListContainer,
} from '../src/Components/Dropdown/styles';
import {
  ModalText,
  ModalFooter,
  ModalContainerB,
  ModalRowContainer,
} from '../src/Components/Modal/styles';
import { Option } from '../src/Components/OptionList/styles';
import { TrashIcon } from '../src/Components/UI/Icons';
import { palette, fonts } from '../src/Components/styles';
import { LabelContainer } from '../src/Components/InputField/styles';
import { Text } from '../src/Components/UI/GenericElements/GenericElements.styles';
const { gray, link } = palette;
const { size12 } = fonts;

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
        <OptionDropdown wide notIcon text="Option" type='basic-clean'>
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
        <OptionDropdown wide notIcon text="Option" type='basic-clean'>
          <Option label="Option 1" id="id1" right />
          <Option label="Option 2" id="id2" right />
          <Option label="Option 3" id="id3" right />
          <Option label="Option 4" id="id4" right />
        </OptionDropdown>
      </DropdownContainer>
      <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown wide notIcon text="Option" type='basic-clean'>
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
      <ModalRowContainer>
        <Button label="No, cancel" type="secondary-gray-medium"/>
        <Button label="Yes, delete" type="secondary-red-medium"/>
      </ModalRowContainer>
    </Modal>
  </ModalContainerB>
);

export const ModalC = () => (
  <Modal title="Modal Title">
    <ModalRowContainer padding='0 20px' justifyContent="space-between">
      <DropdownContainer width='50%' direction='column' alignItems='start'>
        <DropdownListContainer>
          <DropdownLabel>Title</DropdownLabel>
          <OptionDropdown wide notIcon text="Option" type='basic-clean'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownListContainer>
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
        <DropdownListContainer>
          <DropdownLabel>Title</DropdownLabel>
          <OptionDropdown wide notIcon text="Option" type='basic-clean'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownListContainer>
      </DropdownContainer>
      <DropdownContainer width='25%' direction='column' alignItems="start" margin="0 0 0 40px">
        <DropdownListContainer>
          <DropdownLabel>Title</DropdownLabel>
          <OptionDropdown wide notIcon text="Option" type='basic-clean'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownListContainer>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalFooter>
      <Button label="Action button" type="secondary-default-medium" />
    </ModalFooter>
  </Modal>
);

/**
 * InformativeModal component should be called with
 * @prop {Node} children - (Required)  It's the text to be displayed and values summation.
 *  
 *  Text component should be called with
 *  @prop {String} color - (Optional) Color text. Default value is #000;
 *  @prop {String} fontSize - (Optional) Font size text. Default value is 14px.
 *  @prop {String} text - (Optional) Text to be displayed next tu value.
 *  @prop {Node} children - (Required) Number to be summed in the result field.  
 */
export const Informative = () => (
  <Modal width="239px" minHeight="0">
    <InformativeModal>
      <Text color={link} fontSize={size12} text="Spend">{ 123456789 }</Text>
      <Text color={link} fontSize={size12} text="Discounts">{ 123456789 }</Text>
      <Text color={link} fontSize={size12} text="Credit Notes">{ 123456789 }</Text>
      <Text color={link} fontSize={size12} text="Taxes">{ 123456789 }</Text>
    </InformativeModal>
  </Modal>
);