import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  DownloadFileIcon,
  DownChevronIcon,
  IconGenerator,
  EllipseIcon,
  InfoIcon,
  AddIcon,
  XIcon,
} from '../src/Components/UI/Icons';

import {
  SecondaryButtonContainer,
  AccessoryButtonContainer,
  PrimaryButtonContainer,
  OptionButtonContainer,
  StatusButtonContainer,
} from '../src/Components/Button/styles';

import { Button, } from '../src/Components';
import { OptionGroup } from './styles/StoriesContainer.styles';

export default {
  title: 'Secondary Button',
};

const { white, black, action, link, gray, violet, green, blue, yellow, red } = palette;

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

    <SecondaryButtonContainer>
      <Button label="Button" defaultClassName="button secondary--inverted-medium" />
    </SecondaryButtonContainer>

    <SecondaryButtonContainer disabled={true}>
      <Button label="Button" defaultClassName="button secondary--inverted-medium" disabled/>
    </SecondaryButtonContainer>
  </>
);

export const Accesory = () => (
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
      <Button label="Button" defaultClassName="button accessory--inverted-left" />
    </AccessoryButtonContainer>
    
    <AccessoryButtonContainer>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '10px',
          fill: gray.g4,
          width: '11px',
          height: '11px',
          
        }}
      />
      <Button label="Button" defaultClassName="button accessory--default-left" />    
    </AccessoryButtonContainer>

    <AccessoryButtonContainer>
      <IconGenerator
        renderIcon={DownloadFileIcon}
        props={{
          left: '10px',
          fill: gray.g4,
          width: '20px',
          height: '20px',
          
        }}
      />
      <Button label="Export" defaultClassName="button accessory--default-both" />
      <IconGenerator
        renderIcon={DownChevronIcon}
        props={{
          right: '5px',
          fill: gray.g4,
          width: '16px',
          height: '16px',
        }}
      />
    </AccessoryButtonContainer>
  </>
);
