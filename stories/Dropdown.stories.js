import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  DownloadFileIcon,
} from '../src/Components/UI/Icons';

import {
  DropdownLabel,
  DropdownContainer,
} from '../src/Components/Dropdown/styles';


import {
  Dropdown,
  Checkbox,
  StatusLabel,
  OptionDropdown,
  StatusLabelDropdown,
  MultipleOptionDropdown,
} from '../src/Components';
import { Option } from '../src/Components/OptionList/styles';

export default {
  title: 'Dropdown',
};

/**
 * MultipleOptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 * 
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *
 * OptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *
 * StatusLabelDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  StatusLabel component should be used with
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *  @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 */
export const Basic = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Text" type='basic'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Text" type="basic">
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>
 
    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="basic">
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

/**
 * StatusLabelDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 *  
 *  StatusLabel component should be used with
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *  @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 */
export const BasicWithLabel = () => (
  <DropdownContainer direction='column' align='start'>
    <DropdownLabel>Text</DropdownLabel>
    <StatusLabelDropdown text="Text" type="basic" disabled={true}>
      <StatusLabel label="status" id="id1" color="red" />
      <StatusLabel label="status" id="id2" color="yellow" />
      <StatusLabel label="status" id="id3" color="green" />
      <StatusLabel label="status" id="id4" color="blue" />
    </StatusLabelDropdown>
  </DropdownContainer>
);

/**
 * MultipleOptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 * 
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *
 * OptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *
 * StatusLabelDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  StatusLabel component should be used with
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *  @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 */
export const SolidWithIcon = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Dropdown solid w/icon" type='solid' leftIcon={DownloadFileIcon}>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon}>
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Dropdown solid w/icon" type="solid" leftIcon={DownloadFileIcon} disabled={true}>
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

/**
 * MultipleOptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 * 
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *
 * OptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *
 * StatusLabelDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  StatusLabel component should be used with
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *  @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 */
export const NoBorder = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Text" type='no-border'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Text" type="no-border">
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="no-border">
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Text" type="no-border" disabled={true}>
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

/**
 * MultipleOptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 * 
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *
 * OptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *
 * StatusLabelDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  StatusLabel component should be used with
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *  @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 */
export const NoBorderLink = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Advanced Options" type='no-border-link'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Advanced Options" type="no-border-link">
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="no-border-link">
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advanced Options" type="no-border-link" disabled={true}>
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);

/**
 * MultipleOptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 * 
 *  Checkbox component should be called with
 *  @prop {String} type - (Required) Define dropdown classes for styling.
 *  @prop {Boolean} right - (Required) It's required if left prop is not set. It's define the position of checkbox regarding text.
 *  @prop {Boolean} left - (Required) It's required if right prop is not set. It's define the position of checkbox regarding text.
 *  @prop {String} label - (Optional) It's a text to be display next to checkbox.
 *
 * OptionDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  Option component should be used with
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *
 * StatusLabelDropdown component should be called with
 * @prop {String} type - (Required) Define dropdown classes for styling.
 * @prop {String} text - (Required) Text to be displayed inside button.
 *  
 *  StatusLabel component should be used with
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in SwitchGroup.
 *  @prop {String} color - (Required) Used for setting the color of label. Can be 'green' (default), 'blue', 'red', 'yellow'.
 *  @prop {String} label - (Optional) It's a text to be display inside button.
 */
export const NoBorderPurple = () => (
  <>
    <DropdownContainer> 
      <MultipleOptionDropdown text="Advertiser" type='no-border-purple'>
        <Checkbox label="Option 1" type="dropdown" right />
        <Checkbox label="Option 2" type="dropdown" right />
        <Checkbox label="Option 3" type="dropdown" right />
        <Checkbox label="Option 4" type="dropdown" right />
      </MultipleOptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <OptionDropdown text="Advertiser" type="no-border-purple">
        <Option label="Option 1" id="id1" />
        <Option label="Option 2" id="id2" />
        <Option label="Option 3" id="id3" />
        <Option label="Option 4" id="id4" />
      </OptionDropdown>
    </DropdownContainer>

    <DropdownContainer>
      <StatusLabelDropdown text="Advertiser" type="no-border-purple">
        <StatusLabel label="status" id="id1" color="red" />
        <StatusLabel label="status" id="id2" color="yellow" />
        <StatusLabel label="status" id="id3" color="green" />
        <StatusLabel label="status" id="id4" color="blue" />
      </StatusLabelDropdown>
    </DropdownContainer>
  </>
);