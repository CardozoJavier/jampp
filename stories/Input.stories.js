import React from 'react';
import '../src/main.css';
import {
  SearchIcon,
} from '../src/Components/UI/Icons';

import {
  InputControlled,
  InputField,
} from '../src/Components/InputField';
export default {
  title: 'Input'
};

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
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 */
export const Basic = () => (
  <div style={{ width: '250px' }}>
    <InputField placeholder="Text" type="basic" onChange={value => console.log(value)} />
  </div>
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
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 */
export const WithIcon = () => (
  <div style={{ width: '250px' }}>
    <InputField placeholder="Text" type="icon-small-left" icon={SearchIcon} />
  </div>
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
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 */
export const InputWithLabel = () => (
  <div style={{ width: '250px' }}>
    <InputField placeholder="Text" label="Label" id="id1" type="basic" />
  </div>
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
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 */
export const WithErrorMessage = () => (
  <>
    <div style={{ width: '250px' }}>
      <InputField
        errorMessage="Warning here"
        placeholder="Input value"
        label="Label"
        id="input1" 
        type="error-message"
        onError={() => true}
      />
    </div>

    <div style={{ width: '250px' }}>
      <InputField
        placeholder="Input value"
        label="Label"
        id="input2" 
        type="error-message"
        disabled={true}
      />
    </div>
  </>
);

/**
 * InputControlled component should be called with
 * @prop {string} type - (Required) It's to define styles of input field.
 * @prop {string} placeholder - (Optional) It's to display text into input field. It'll be in second place.
 * @prop {string} boldPlaceholder - (Optional) It's to display bold text into input field. It'll be in first place.
 * @prop {boolean} disabled - (Optional) If true, disable actions triggering and styles in component.
 * @prop {string} label - (Optional) Text to be display in label.
 * @prop {id} id - (Optional) ID to be use for label refering to input field.
 */
export const WithBoldPlaceholder = () => (
  <div style={{ width: '250px' }}>
    <InputControlled label="Text" boldPlaceholder="Text" placeholder="text" type="controlled" id="input1" />
  </div>
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
 * @prop {String} id - (Optional) ID to be use for label refering to input field.
 */
export const WithComment = () => (
  <>
    <div style={{ width: '250px' }}>
      <InputField
        warningMessage="Comment text here"
        placeholder="Placeholder"
        label="Label"
        id="input1" 
        type="warning-message"
        onWarning={() => true}
      />
    </div>
  </>
);