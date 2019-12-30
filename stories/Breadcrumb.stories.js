import React from 'react';
import '../src/main.css';
import { Breadcrumb, Step } from '../src/Components/Breadcrumb';
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
  <Breadcrumb>
    <Step text="1. Setup Campaing" />
    <Step text="2. Create AdGroup" />
    <Step text="3. Creatives" />
  </Breadcrumb>
);

export const Footer = () => (
  <FooterBreadcrumb currentStep={1}>
    <Step text="1. Setup Campaing" />
    <Step text="2. Create AdGroup" />
    <Step text="3. Creatives" />
  </FooterBreadcrumb>
);