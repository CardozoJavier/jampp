import React from 'react';
import '../src/main.css';
import { Breadcrumb } from '../src/Components/Breadcrumb';
import { Step } from '../src/Components/Breadcrumb/styles';
import { FooterBreadcrumb } from '../src/Components';

export default {
  title: 'Breadcrumb',
};

/**
 * Breadcrumb component should be called with
 * @prop {Number} currentStep - (Required) Index that define the active step. From 0 to length-1 of array steps. Default value is 0.
 * 
 *  Step component should be called with
 *  @prop {String} text - (Required) It's the name step.
 */
export const Default = () => (
  <Breadcrumb currentStep={1}>
    <Step text="1. Step 1" />
    <Step text="2. Step 2" />
    <Step text="3. Step 3" />
  </Breadcrumb>
);

/**
 * FooterBreadcrumb component should be called with
 * @prop {Number} currentStep - (Required) Index that define the active step. From 0 to length-1 of array steps. Default value is 0.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive two arguments: index and text of current step.
 * @prop {String} prevButtonText - (Optional) It's the text to be displayed into button for previous step. Default value is "Back".
 * @prop {String} nextButtonText - (Optional) It's the text to be displayed into button for next step. Default value is "Next".
 * @prop {String} prevButtonType - (Optional) It's the type button to be displayed like "previous button". Default value is "secondary-inverted-medium".
 * @prop {String} nextButtonType - (Optional) It's the type button to be displayed like "next button". Default value is "secondary-default-medium".
 * @prop {String} prevButtonDisabled - (Optional) If true, the "previous" button is disabled.
 * @prop {String} nextButtonDisabled - (Optional) If true, the "next" button is disabled.
 * 
 *  Step component should be called with
 *  @prop {String} text - (Required) It's the name step.
 */
export const Footer = () => (
  <FooterBreadcrumb onChange={(index, text) => console.log('Now we are in ' + text)} currentStep={1}>
    <Step text="1. Step 1" />
    <Step text="2. Step 2" />
    <Step text="3. Step 3" />
  </FooterBreadcrumb>
);