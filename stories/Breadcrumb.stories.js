import React from 'react';
import '../src/main.css';
import { Breadcrumb, Step } from '../src/Components/Breadcrumb';
import { FooterBreadcrumb } from '../src/Components';

export default {
  title: 'Breadcrumb',
};

export const Default = () => (
  /**
   * @prop {Number} currentStep Number that define the active step
   */
  <Breadcrumb currentStep={0}>
    <Step text="1. Setup Campaing" />
    <Step text="2. Create AdGroup" />
    <Step text="3. Creatives" />
  </Breadcrumb>
);

export const Footer = () => (
  <FooterBreadcrumb>
    <Step text="1. Setup Campaing" />
    <Step text="2. Create AdGroup" />
    <Step text="3. Creatives" />
  </FooterBreadcrumb>
);