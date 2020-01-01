import React from 'react';
import '../src/main.css';
import { Breadcrumb, Step } from '../src/Components/Breadcrumb';
import { FooterBreadcrumb } from '../src/Components';

export default {
  title: 'Breadcrumb',
};

/**
 * Breadcrumb component should be called with
 * @prop {Number} currentStep - (Optional) Index that define the active step. From 0 to length-1 of array steps. Default value is 0.
 * 
 *  Step component should be called with
 *  @prop {String} text - (Required) It's the name step.
 */
export const Default = () => (
  <Breadcrumb>
    <Step text="1. Setup Campaing" />
    <Step text="2. Create AdGroup" />
    <Step text="3. Creatives" />
  </Breadcrumb>
);

/**
 * FooterBreadcrumb component should be called with
 * @prop {Number} currentStep - (Optional) Index that define the active step. From 0 to length-1 of array steps. Default value is 0.
 * @prop {Function} onChange - (Optional) Callback to trigger on onChange event. It receive two arguments: index and text of current step.
 * 
 *  Step component should be called with
 *  @prop {String} text - (Required) It's the name step.
 */
export const Footer = () => (
  <FooterBreadcrumb currentStep={1} onChange={(index, text) => console.log('Now we are in ' + text)}>
    <Step text="1. Setup Campaing" />
    <Step text="2. Create AdGroup" />
    <Step text="3. Creatives" />
  </FooterBreadcrumb>
);