import React from 'react';
import {
  Card,
  InputField,
  OptionDropdown,
  FooterBreadcrumb,
} from '../src/Components';
import {
  DropdownLabel,
  DropdownContainer,
  DropdownListContainer,
} from '../src/Components/Dropdown/styles';
import {
  CreationHeader,
  CreationContainer,
  ModalRowContainer,
  CreationHeaderTitle,
  CreationHeaderDescription,
} from '../src/Components/Modal/styles';
import { Step } from '../src/Components/Breadcrumb/styles';
import { Option } from '../src/Components/OptionList/styles';
import { SwitchGroup } from '../src/Components/Switch';
import { LabelContainer } from '../src/Components/InputField/styles';

export default {
  title: 'Drago creation',
};

export const Default = () => (
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
            <DropdownContainer width='17.5%' direction='column' alignItems='start' margin="0 0 0 40px">
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
          <ModalRowContainer padding="20px 20px 40px 20px" justifyContent="space-between">
            <DropdownContainer width='50%' direction='column' alignItems='start' margin="0">
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
        </Card>
    </div>

    <FooterBreadcrumb prevButtonText="Back" nextButtonText="Next">
      <Step text="1. Step 1" />
      <Step text="2. Step 2" />
    </FooterBreadcrumb>
  </CreationContainer>
);