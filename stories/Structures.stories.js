import React from 'react';
import {
  Modal,
  Button,
  InputField,
  CreateElement,
  OptionDropdown,
  InformativeModal,
  CreationTagSuggestion,
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
import { palette, fonts } from '../src/Components/styles';
import { Option } from '../src/Components/OptionList/styles';
import { LabelContainer } from '../src/Components/InputField/styles';
import { TrashIcon, XIcon, BoldAddIcon } from '../src/Components/UI/Icons';
import { ParametersDuplicationContainer } from '../src/Components/CreationTag/styles';
import { Text, DivContainer } from '../src/Components/UI/GenericElements/GenericElements.styles';
import {StructurePreview} from '../src/Components/Structures';
const { gray, link, black, } = palette;
const { size10, size12 } = fonts;

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

export const AddParameter = () => (
  <DivContainer border={`1px solid ${gray.g1}`} borderRadius="4px">
    <DivContainer id="original-structure" display="grid" alignItems="center" gridTemplateColumns="28% 5% auto 8%" width="475px" padding="15px" borderBottom={`1px solid ${gray.g1}`}>
      <Text fontWeight="bold">Parameter</Text>
      <Text>=</Text>
      {/**
        * CreationTagSuggestion component should be called with
        * @param {String} type - (Required) It's to define styles of input field.
        * @param {String} placeholder - (Optional) It's to display text into input field.
        * @param {String} label - (Optional) Text to be display in label.
        * @param {Function} icon - (Optional) Function that returns an svg icon.
        * @param {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
        * @param {Function} onTagDeleted - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
        * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @param {Array} suggestions - (Required) Array of string to be displayed in suggestions list.
        * @param {Function} callback - (Optional) Callback to be triggered on click event in button into suggestions list.
        * @param {String} linkText - (Optional) It's the text to be displayed like link.
        * @param {String} textBelowSuggestions - (Optional) It's the text to be displayed at the bottom of suggestions list.
        * @param {Array} defaultValue - (Optional) It's the default value for a tag to be displayed in render.
        * @return {React Component} A view for input field with icon and action on error.
        */}
      <CreationTagSuggestion
        width="264px"
        linkText="Full list"
        id="creation-tracking-A"
        type="suggestions-tracking"
        textBelowSuggestions="or select from the"
        suggestions={["Option 1", "Option 2", "Option 3"]}
        callback={() => console.log('Displaying full list')}
        onTagCreated={event => console.log(event + ' has been created')}
        onTagDeleted={event => console.log(event + ' has been deleted')}
      />
      <XIcon
        role='icon-to-remove-structure'
        props={{
          width: '10px',
          height: '10px',
          fill: gray.g3,
          margin: '0 5px',
          cursor: 'pointer',
          hover: black,
          justifySelf: 'end',
          onClick: () => console.log('Display modal and pass it the structure id: original-structure'),
        }}
      />
    </DivContainer>

    {/**
      *  CreateElement component should be called with
      *  @prop {Array} children - (Required) It's the structure to be cloned. Should be one React node.
      *  @prop {String} buttonText - (Optional) The text to be displayed into button add structure. Default value is empty string.
      *  @prop {String} buttonType - (Optional) The button type corresponding to class styles. Default value is link-default-left.
      *  @prop {Node} buttonIcon - (Optional) The icon to be displayed into button. Default value is 'null'.
      *  @prop {Object} buttonProps - (Optional) It's the props to be passed to structure container for modifying Add button styles.
      *  @prop {Function} onDeleteCallback - (Required) It's the callback to be called when remove icon is clicked. It receive the structure ID in first argument.
      */}
    <CreateElement buttonText="Add parameter" buttonType="link-default-left" buttonIcon={BoldAddIcon} onDeleteCallback={structureId => console.log('Structure with id ' + structureId + ' want to be deleted')}>
      <ParametersDuplicationContainer>
        <DropdownContainer width="100%" padding="0 10px 0 0">
          <DropdownListContainer>
            <OptionDropdown wide={true} text="Text" type="basic-clean" onChange={optionId => console.log('Option ' + optionId + ' is selected')} listWidth="fit-content">
              <Option label="Option A" id="a" />
              <Option label="Option B" id="b" />
              <Option label="Option C" id="c" />
              <Option label="Option D" id="d" />
            </OptionDropdown>
          </DropdownListContainer>
        </DropdownContainer>
        <Text>=</Text>
        <DivContainer alignSelf="flex-start">
        {/**
          * CreationTagSuggestion component should be called with
          * @param {String} type - (Required) It's to define styles of input field.
          * @param {String} placeholder - (Optional) It's to display text into input field.
          * @param {String} label - (Optional) Text to be display in label.
          * @param {Function} icon - (Optional) Function that returns an svg icon.
          * @param {Function} onTagCreated - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
          * @param {Function} onTagDeleted - (Optional) Callback to trigger on tag created. It receive tag value in first argument.
          * @param {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
          * @param {Array} suggestions - (Required) Array of string to be displayed in suggestions list.
          * @param {Function} callback - (Optional) Callback to be triggered on click event in button into suggestions list.
          * @param {String} linkText - (Optional) It's the text to be displayed like link.
          * @param {String} textBelowSuggestions - (Optional) It's the text to be displayed at the bottom of suggestions list.
          * @param {String} defaultValue - (Optional) It's the default value for a tag to be displayed in render.
          * @return {React Component} A view for input field with icon and action on error.
          */}
          <CreationTagSuggestion
            width="264px"
            linkText="Full list"
            id="creation-tracking-A"
            type="suggestions-tracking"
            textBelowSuggestions="or select from the"
            suggestions={["Option 1", "Option 2", "Option 3"]}
            callback={() => console.log('Displaying full list')}
            onTagCreated={event => console.log(event + ' has been created')}
            onTagDeleted={event => console.log(event + ' has been deleted')}
          />
          <DivContainer display="flex" alignItems="center" margin="8px 0 0 0">
            <Text color={gray.g4} fontSize={size10} display="inline" margin="0 3px 0 0">or select from the </Text>
            <Button fontSize={size10} label="Full token list" type="link-default-left" onClick={() => console.log('Display full token list')} />
          </DivContainer>
        </DivContainer>
        <XIcon
          role='icon-to-remove-structure'
          props={{
            width: '10px',
            height: '10px',
            fill: gray.g3,
            margin: '0 5px',
            cursor: 'pointer',
            hover: black,
            justifySelf: 'end',
            onClick: () => console.log('Display modal and pass it the structure id: structure-id'),
          }}
        />
      </ParametersDuplicationContainer>
    </CreateElement>
  </DivContainer>
);

/**
 * StructurePreview should be called with
 * @prop {String} url - (Required) It's the original url pasted by user
 * @prop {Function} onSave - (Required) It's the callback to be call when save button is clicked
 * @prop {Array} partnerParameterList - (Required) It's the array list to be displayed when new parameter is added
 * @prop {Array} jamppParameterList - (Optional) It's the array of jampp parameter suggestions to be displayed when user is typing the new parameter value
 * @prop {Array} fullTokenList - (Optional) It's the array of all available tokens can be selected. The array of 'jamppParameterList' will be the default value
 */
export const Preview = () => (
  <StructurePreview
    onSave={url => console.log(url)}
    url="http://adjust.com/1234/?c=Campaign_Brasil&click_id={C_ID}_suffix&device_id={D_ID}&creative={ad_parameters}"
    partnerParameterList={["Option 1", "Option 2", "Option 3", "Option 4"]}
    jamppParameterList={["Option A", "Option B", "Option C", "Option D"]}
    fullTokenList={[
      { name: "Option A", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option B", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option C", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option D", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option E", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option F", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option G", description: "Very long description will be placed in this place, and will fit all width" },
      { name: "Option H", description: "Very long description will be placed in this place, and will fit all width" },
    ]}
  />
);