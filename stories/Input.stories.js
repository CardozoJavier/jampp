import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
  AlertIcon,
} from '../src/Components/UI/Icons';
import {
  InputControlled,
  InputField,
} from '../src/Components/InputField';
import {
  Text,
  DivContainer
} from '../src/Components/UI/GenericElements/GenericElements.styles';
export default {
  title: 'Input'
};
import { palette, fonts } from '../src/Components/styles';
const { yellow } = palette;
const { size10 } = fonts;

/**
 * InputField component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {Function} onWarning - (Optional) Function to check input values and trigger warning message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 * @prop {String} warningMessage - (Optional) String to be display on warning event.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @prop {String} label - (Optional) Text to be display in label.
 */
export const Basic = () => (
  <DivContainer width="250px">
    <InputField placeholder="Text" type="basic" onChange={value => console.log(value)} />
  </DivContainer>
);

/**
 * InputField component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {Function} onWarning - (Optional) Function to check input values and trigger warning message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 * @prop {String} warningMessage - (Optional) String to be display on warning event.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @prop {String} label - (Optional) Text to be display in label.
 */
export const WithIcon = () => (
  <DivContainer width="250px">
    <InputField placeholder="Text" type="icon-small-left" icon={SearchIcon} />
  </DivContainer>
);

/**
 * InputField component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {Function} onWarning - (Optional) Function to check input values and trigger warning message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 * @prop {String} warningMessage - (Optional) String to be display on warning event.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @prop {String} label - (Optional) Text to be display in label.
 */
export const InputWithLabel = () => (
  <DivContainer width="250px">
    <InputField placeholder="Text" label="Label" type="basic" />
  </DivContainer>
);

/**
 * InputField component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {Function} onWarning - (Optional) Function to check input values and trigger warning message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 * @prop {String} warningMessage - (Optional) String to be display on warning event.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @prop {String} label - (Optional) Text to be display in label.
 */
export const WithErrorMessage = () => (
  <>
    <DivContainer width="250px">
      <InputField
        errorMessage="Warning here"
        placeholder="Input value"
        label="Label"
        id="input1" 
        type="error-message"
        onError={() => true}
      />
    </DivContainer>

    <DivContainer width="250px">
      <InputField
        placeholder="Input value"
        label="Label"
        id="input2" 
        type="error-message"
        disabled={true}
      />
    </DivContainer>
  </>
);

/**
 * InputControlled component should be called with
 * @prop {string} type - (Required) It's to define styles of input field.
 * @prop {string} placeholder - (Optional) It's to display text into input field. It'll be in second place.
 * @prop {string} boldPlaceholder - (Optional) It's to display bold text into input field. It'll be in first place.
 * @prop {boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {string} label - (Optional) Text to be display in label.
 */
export const WithBoldPlaceholder = () => (
  <DivContainer width="250px">
    <InputControlled label="Text" boldPlaceholder="Text" placeholder="text" type="controlled" id="input1" />
  </DivContainer>
);

/**
 * InputField component should be called with
 * @prop {String} type - (Required) It's to define styles of input field.
 * @prop {Function} onError - (Optional) Function to check input values and trigger error message. It receive the input value in first argument.
 * @prop {Function} onWarning - (Optional) Function to check input values and trigger warning message. It receive the input value in first argument.
 * @prop {String} errorMessage - (Optional) String to be display on error event.
 * @prop {String} warningMessage - (Optional) String to be display on warning event.
 * @prop {String} placeholder - (Optional) It's to display text into input field.
 * @prop {Boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive input value in first argument.
 * @prop {String} label - (Optional) Text to be display in label.
 */
export const WithComment = () => (
  <DivContainer width="250px">
    <InputField label="Label" placeholder="Placeholder" type="basic" />
    <DivContainer display="flex" alignItems="baseline" margin="8px 0 0 0">
      <AlertIcon props={{ margin: '0 3px 0 0', width: '10px', height: '10px', fill: yellow.y2 }} />
      <Text color={yellow.y2} fontSize={size10}>{'Comment text here'}</Text>
    </DivContainer>
  </DivContainer>
);