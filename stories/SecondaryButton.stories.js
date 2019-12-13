import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  IconGenerator,
  AddIcon,
} from '../src/Components/UI/Icons';

import {
  SecondaryButtonContainer,
  AccessoryButtonContainer,
} from '../src/Components/Button/styles';

import { Button, } from '../src/Components';

export default {
  title: 'Secondary Button',
};

const { white, gray, } = palette;

export const SolidPurple = () => (
  <>
    <SecondaryButtonContainer>
      <Button label="Button" defaultClassName="button secondary--default-medium" />
    </SecondaryButtonContainer>


    <SecondaryButtonContainer disabled={true}>
      <Button label="Button" defaultClassName="button secondary--default-medium" disabled />
    </SecondaryButtonContainer>
  </>
);

export const SolidGray = () => (
  <>
    <SecondaryButtonContainer>
      <Button label="Button" defaultClassName="button secondary--gray-medium" />
    </SecondaryButtonContainer>

    <SecondaryButtonContainer disabled={true}>
      <Button label="Button" defaultClassName="button secondary--gray-medium" disabled/>
    </SecondaryButtonContainer>
  </>
);

export const PurpleWithRightIcon = () => (
  <>
    <AccessoryButtonContainer>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '10px',
          fill: white,
          width: '11px',
          height: '11px',
        }}
      />
      <Button label="Button" defaultClassName="button accessory--default-left" />
    </AccessoryButtonContainer>

    <AccessoryButtonContainer disabled={true}>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '10px',
          fill: gray.g07,
          width: '11px',
          height: '11px',
        }}
      />
      <Button label="Button" defaultClassName="button accessory--default-left" disabled/>
    </AccessoryButtonContainer>
  </>
);

export const GrayWithRightIcon = () => (
  <>
    <AccessoryButtonContainer>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '10px',
          fill: gray.g4,
          width: '11px',
          height: '11px',
          className: 'button accessory--default-left',
        }}
      />
      <Button label="Button" defaultClassName="button accessory--gray-left" />    
    </AccessoryButtonContainer>

    <AccessoryButtonContainer disabled={true}>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '10px',
          fill: gray.g07,
          width: '11px',
          height: '11px',
        }}
      />
      <Button label="Button" defaultClassName="button accessory--gray-left" disabled/>
    </AccessoryButtonContainer>
  </>
);

export const Ghost = () => (
  <>
    <SecondaryButtonContainer>
      <Button label="Button" defaultClassName="button secondary--inverted-medium" />
    </SecondaryButtonContainer>

    <SecondaryButtonContainer disabled={true}>
      <Button label="Button" defaultClassName="button secondary--inverted-medium" disabled/>
    </SecondaryButtonContainer>
  </>
);
