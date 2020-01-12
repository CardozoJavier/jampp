import React from 'react';
import {
  Modal,
  Button,
  Card,
  InputField,
  OptionDropdown,
  FooterBreadcrumb,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';
import {
  ModalText,
  ModalFooter,
  ModalContainer,
  CreationHeader,
  ModalContainerA,
  CreationContainer,
  ModalRowContainer,
  CreationHeaderTitle,
  CreationHeaderDescription,
} from '../src/Components/Modal/styles';
import { Step } from '../src/Components/Breadcrumb/styles';
import { Option } from '../src/Components/OptionList/styles';
import { FilterIcon } from '../src/Components/UI/Icons';
import { palette } from '../src/Components/styles';
import { SwitchGroup } from '../src/Components/Switch';
import { LabelContainer } from '../src/Components/InputField/styles';
const { gray } = palette;

export default {
  title: 'Structures',
};


export const ModalA = () => (
  <ModalContainer width="600px">
    <Modal title="Modal Title">
      <ModalRowContainer padding="20px" justifyContent="space-between">
        <LabelContainer padding="0 10px 0 0" margin="0 5px 0 0">
          <InputField label="Advertiser Name" id='input1' placeholder="Name" type="basic" onChange={value => console.log(value)} />
        </LabelContainer>
        <DropdownContainer width='100%' direction='column' alignItems='start' margin="0 0 0 15px">
          <DropdownLabel>Vertical</DropdownLabel>
          <OptionDropdown wide notIcon text="Select Vertical" type='basic'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownContainer>
      </ModalRowContainer>

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

      <ModalRowContainer padding="20px">
        <LabelContainer width="47.5%">
          <InputField label="Advertiser Name" id='input2' placeholder="Name" type="basic" onChange={value => console.log(value)} />
        </LabelContainer>
      </ModalRowContainer>

      <ModalFooter>
        <Button label="Action button" type="secondary-default-medium" />
      </ModalFooter>
    </Modal>
  </ModalContainer>
);

export const ModalB = () => (
  <ModalContainer width="600px" minHeight="0">
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
  </ModalContainer>
);

export const ModalC = () => (
  <ModalContainer width="600px">
    <Modal title="Modal Title">
      <ModalRowContainer padding='0 20px' justifyContent="space-between">
        <DropdownContainer width='50%' direction='column' alignItems='start'>
          <DropdownLabel>Vertical</DropdownLabel>
          <OptionDropdown wide notIcon text="Select Vertical" type='basic'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
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


      <ModalRowContainer padding='0 20px 20px 20px' justifyContent="flex-start">
        <DropdownContainer width='50%' direction='column' alignItems='start'>
          <DropdownLabel>Domain</DropdownLabel>
          <OptionDropdown wide notIcon text="http://www.yourdomain.com/" type='basic'>
            <Option label="Option 1" id="id1" right />
            <Option label="Option 2" id="id2" right />
            <Option label="Option 3" id="id3" right />
            <Option label="Option 4" id="id4" right />
          </OptionDropdown>
        </DropdownContainer>
        <DropdownContainer width='25%' direction='column' alignItems="start" margin="0 0 0 40px">
          <DropdownLabel>Domain</DropdownLabel>
          <OptionDropdown wide notIcon text="Text" type='basic'>
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
  </ModalContainer>
);

export const DragoCreation = () => (
  <CreationContainer>
    <div>
      <CreationHeader>
        <CreationHeaderTitle>
          Title
        </CreationHeaderTitle>
        <CreationHeaderDescription>
          Description text to go here
        </CreationHeaderDescription>
      </CreationHeader>
        <Card title="Title" width="920px">
          <ModalRowContainer padding="20px" justifyContent="">
            <LabelContainer width="50%" margin="0 40px 0 0">
              <InputField label="Advertiser Name" id='input1' placeholder="Name" type="basic" onChange={value => console.log(value)} />
            </LabelContainer>
            <SwitchGroup>
              <Option label="Choice" id="id1" />
              <Option label="Choice" id="id2" />
            </SwitchGroup>
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
            <DropdownContainer width='17.5%' direction='column' alignItems='start' margin="0 0 0 40px">
              <DropdownLabel>Title</DropdownLabel>
              <OptionDropdown wide notIcon text="Option" type='basic'>
                <Option label="Option 1" id="id1" right />
                <Option label="Option 2" id="id2" right />
                <Option label="Option 3" id="id3" right />
                <Option label="Option 4" id="id4" right />
              </OptionDropdown>
            </DropdownContainer>
          </ModalRowContainer>
          <ModalRowContainer padding="20px 20px 40px 20px" justifyContent="space-between">
            <DropdownContainer width='50%' direction='column' alignItems='start' margin="0">
              <DropdownLabel>Title</DropdownLabel>
              <OptionDropdown wide notIcon text="Option" type='basic'>
                <Option label="Option 1" id="id1" right />
                <Option label="Option 2" id="id2" right />
                <Option label="Option 3" id="id3" right />
                <Option label="Option 4" id="id4" right />
              </OptionDropdown>
            </DropdownContainer>
          </ModalRowContainer>
        </Card>
    </div>

    <FooterBreadcrumb prevButtonText="Back" nextButtonText="Create Ad Account">
      <Step text="1. Step 1" />
      <Step text="2. Step 2" />
    </FooterBreadcrumb>
  </CreationContainer>
);