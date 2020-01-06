import React from 'react';
import '../src/main.css';
import {
  DownloadFileIcon,
} from '../src/Components/UI/Icons';

import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';


import {
  Checkbox,
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
      {/**
        * MultipleOptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        */}
      <MultipleOptionDropdown text="Text" type="basic">
        {/**
          * Checkbox component should be called with
          * @prop {String} type - (Required) Define dropdown classes for styling.
          * @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
          * @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
          * @prop {String} label - (Optional) It's a text to be display next to checkbox.
          */}
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <OptionDropdown text="Text" type="basic" onChange={optionId => console.log('Option ' + optionId + ' is selected')}>
        {/**
          * Option component should be used with
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          */}
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>
 
    <DropdownContainer>
      {/**
        * StatusLabelDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <StatusLabelDropdown text="Text" type="basic" onChange={optionId => console.log('Option ' + optionId + ' is selected')}>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          */}
        <Option label="status" id="red" color="red" />
        <Option label="status" id="yellow" color="yellow" />
        <Option label="status" id="green" color="green" />
        <Option label="status" id="blue" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const BasicWithLabel = () => (
  <DropdownContainer direction="column" align="start" alignItems="flex-start">
    <DropdownLabel>Text</DropdownLabel>
    {/**
      * StatusLabelDropdown component should be called with
      * @prop {String} type - (Required) Define dropdown classes for styling.
      * @prop {String} text - (Required) Text to be displayed inside button.
      * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
      */}
    <StatusLabelDropdown text="Text" type="basic" disabled={true}>
      {/**
        * Option component should be used with
        * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
        * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
        * @prop {String} label - (Optional) It's a text to be display inside button.
        */}
      <Option label="status" id="id1" color="red" />
      <Option label="status" id="id2" color="yellow" />
      <Option label="status" id="id3" color="green" />
      <Option label="status" id="id4" color="blue" />
    </StatusLabelDropdown>
  </DropdownContainer>
);

export const SolidWithIcon = () => (
  <>
    <DropdownContainer> 
      {/**
        * MultipleOptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        */}
      <MultipleOptionDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        {/**
          * Checkbox component should be called with
          * @prop {String} type - (Required) Define dropdown classes for styling.
          * @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
          * @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
          * @prop {String} label - (Optional) It's a text to be display next to checkbox.
          */}
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <OptionDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        {/**
          * Option component should be used with
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          */}
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * StatusLabelDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <StatusLabelDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon} disabled={true}>
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const NoBorder = () => (
  <>
    <DropdownContainer> 
      {/**
        * MultipleOptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        */}
      <MultipleOptionDropdown text="Text" type="no-border">
        {/**
          * Checkbox component should be called with
          * @prop {String} type - (Required) Define dropdown classes for styling.
          * @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
          * @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
          * @prop {String} label - (Optional) It's a text to be display next to checkbox.
          */}
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <OptionDropdown text="Text" type="no-border">
        {/**
          * Option component should be used with
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          */}
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * StatusLabelDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <StatusLabelDropdown text="Text" type="no-border">
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="no-border" disabled={true}>
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const NoBorderLink = () => (
  <>
    <DropdownContainer> 
      {/**
        * MultipleOptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        */}
      <MultipleOptionDropdown text="Advanced Options" type="no-border-link">
        {/**
          * Checkbox component should be called with
          * @prop {String} type - (Required) Define dropdown classes for styling.
          * @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
          * @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
          * @prop {String} label - (Optional) It's a text to be display next to checkbox.
          */}
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <OptionDropdown text="Advanced Options" type="no-border-link">
        {/**
          * Option component should be used with
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          */}
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * StatusLabelDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <StatusLabelDropdown text="Advanced Options" type="no-border-link">
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="no-border-link" disabled={true}>
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

export const NoBorderPurple = () => (
  <>
    <DropdownContainer> 
      {/**
        * MultipleOptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        */}
      <MultipleOptionDropdown text="Advertiser" type="no-border-purple">
        {/**
          * Checkbox component should be called with
          * @prop {String} type - (Required) Define dropdown classes for styling.
          * @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
          * @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
          * @prop {String} label - (Optional) It's a text to be display next to checkbox.
          */}
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <OptionDropdown text="Advertiser" type="no-border-purple">
        {/**
          * Option component should be used with
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          */}
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * StatusLabelDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive optoin ID in first argument.
        */}
      <StatusLabelDropdown text="Advertiser" type="no-border-purple">
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);