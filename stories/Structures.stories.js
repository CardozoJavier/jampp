import React from 'react';
import {
  Modal,
  InputField,
  MultipleOptionDropdown,
  Button,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';
import {
  ModalRowContainer, ModalFooter,
} from '../src/Components/Modal/styles';

export default {
  title: 'Structures',
};


export const DragoModals = () => (
  <Modal title="Title">
    <ModalRowContainer>
      <InputField label="Advertiser Name" id='input1' placeholder="Name" type="basic" onChange={value => console.log(value)} />
      <DropdownContainer width='100%' direction='column' align='start' padding="0 0 0 15px">
        <DropdownLabel>Vertical</DropdownLabel>
        <MultipleOptionDropdown text="Select Vertical" type='basic' />
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer>
      <DropdownContainer width='100%' direction='column' align='start' padding="0 15px 0 0">
        <DropdownLabel>Country</DropdownLabel>
        <MultipleOptionDropdown text="Argentina" type='basic' />
      </DropdownContainer>
      <DropdownContainer width='100%' direction='column' align='start' padding="0 0 0 15px">
        <DropdownLabel>Region</DropdownLabel>
        <MultipleOptionDropdown text="Select Region" type='basic' />
      </DropdownContainer>
    </ModalRowContainer>


    <ModalRowContainer>
      <DropdownContainer width='50%' direction='column' align='start' padding="0 15px 0 0">
        <DropdownLabel>Domain</DropdownLabel>
        <MultipleOptionDropdown text="http://www.yourdomain.com/" type='basic' />
      </DropdownContainer>
    </ModalRowContainer>

    <ModalFooter>
      <Button label="Action button" type="secondary-default-medium" />
    </ModalFooter>
  </Modal>
);
