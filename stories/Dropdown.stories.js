import React from 'react';
import '../src/main.css';
import {
  DownloadFileIcon,
} from '../src/Components/UI/Icons';

import {
  DropdownLabel,
  DropdownContainer,
  DropdownListContainer,
} from '../src/Components/Dropdown/styles';


import {
  Checkbox,
  OptionDropdown,
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
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        */}
      <MultipleOptionDropdown text="Text" type="basic-clean">
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
      <DropdownListContainer>
        {/**
          * OptionDropdown component should be called with
          * @prop {String} type - (Required) Define dropdown classes for styling.
          * @prop {String} text - (Required) Text to be displayed inside button.
          * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
          * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
          * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
          * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
          */}
        <OptionDropdown text="Text" type="basic-clean" onChange={optionId => console.log('Option ' + optionId + ' is selected')}>
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
      </DropdownListContainer>
    </DropdownContainer>
 
    <DropdownContainer>
      <DropdownListContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
        <OptionDropdown text="Text" type="basic-status-label" onChange={optionId => console.log('Option ' + optionId + ' is selected')}>
          {/**
            * Option component should be used with
            * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
            * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
            * @prop {String} label - (Optional) It's a text to be display inside button.
            * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
            */}
          <Option label="status" id="red" color="red" />
          <Option label="status" id="yellow" color="yellow" />
          <Option label="status" id="green" color="green" />
          <Option label="status" id="blue" color="blue" />
        </OptionDropdown>
      </DropdownListContainer>
    </DropdownContainer>
  </>
);

export const BasicWithLabel = () => (
  <DropdownContainer direction="column" align="start" alignItems="flex-start">
    <DropdownListContainer>
      <DropdownLabel>Text</DropdownLabel>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <OptionDropdown text="Text" type="basic-status-label" notCheckIcon>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="red" color="red" flat />
        <Option label="status" id="yellow" color="yellow" flat />
        <Option label="status" id="green" color="green" flat />
        <Option label="status" id="blue" color="blue" flat />
      </OptionDropdown>
    </DropdownListContainer>
  </DropdownContainer>
);

export const SolidWithIcon = () => (
  <>
    <DropdownContainer> 
      {/**
        * MultipleOptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        */}
      <MultipleOptionDropdown text="Dropdown solid w/icon" type="solid-clean" leftIcon={DownloadFileIcon}>
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
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <DropdownListContainer>

      <OptionDropdown text="Dropdown solid w/icon" type="solid-clean" leftIcon={DownloadFileIcon}>
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
      </DropdownListContainer>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <DropdownListContainer>

      <OptionDropdown text="Dropdown solid w/icon" type="solid-status-label" leftIcon={DownloadFileIcon}>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="red" color="red" flat />
        <Option label="status" id="yellow" color="yellow" flat />
        <Option label="status" id="green" color="green" flat />
        <Option label="status" id="blue" color="blue" flat />
      </OptionDropdown>
      </DropdownListContainer>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <DropdownListContainer>

      <OptionDropdown text="Dropdown solid w/icon" type="solid-clean" leftIcon={DownloadFileIcon} disabled={true}>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </OptionDropdown>
      </DropdownListContainer>
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
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        */}
      <MultipleOptionDropdown text="Text" type="no-border-clean">
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
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <OptionDropdown text="Text" type="no-border-clean">
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
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
      */}
      <OptionDropdown text="Text" type="no-border-status-label">
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="red" color="red" />
        <Option label="status" id="yellow" color="yellow" />
        <Option label="status" id="green" color="green" />
        <Option label="status" id="blue" color="blue" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
      */}
      <OptionDropdown text="Text" type="no-border-clean" disabled={true}>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </OptionDropdown>
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
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        */}
      <MultipleOptionDropdown text="Advanced Options" type="no-border-link-clean">
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
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <OptionDropdown text="Advanced Options" type="no-border-link-clean">
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
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <OptionDropdown text="Advanced Options" type="no-border-link-status-label">
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="red" color="red" />
        <Option label="status" id="yellow" color="yellow" />
        <Option label="status" id="green" color="green" />
        <Option label="status" id="blue" color="blue" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      {/**
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <OptionDropdown text="Advanced Options" type="no-border-link-clean" disabled={true}>
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="id1" color="red" />
        <Option label="status" id="id2" color="yellow" />
        <Option label="status" id="id3" color="green" />
        <Option label="status" id="id4" color="blue" />
      </OptionDropdown>
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
        * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
        */}
      <MultipleOptionDropdown text="Advertiser" type="no-border-purple-clean">
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
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        * 
        */}
      <OptionDropdown text="Advertiser" type="no-border-purple-clean">
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
        * OptionDropdown component should be called with
        * @prop {String} type - (Required) Define dropdown classes for styling.
        * @prop {String} text - (Required) Text to be displayed inside button.
        * @prop {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
        * @prop {Boolean} wide - (Optional) If true, dropdown's width will be 100%.
        * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive option ID in first argument.
        */}
      <OptionDropdown text="Advertiser" type="no-border-purple-status-label">
        {/**
          * Option component should be used with
          * @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
          * @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
          * @prop {String} label - (Optional) It's a text to be display inside button.
          * @prop {String} flat - (Optional) Flag to not show small circle next to the text.
          */}
        <Option label="status" id="red" color="red" />
        <Option label="status" id="yellow" color="yellow" />
        <Option label="status" id="green" color="green" />
        <Option label="status" id="blue" color="blue" />
      </OptionDropdown>
    </DropdownContainer>
  </>
);