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
  title: 'Button',
};

const { white, black, action, link, gray, violet, green, blue, yellow, red } = palette;

export const Primary = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Primary big button" defaultClassName="button primary--default-large" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button
      label="Primary big button"
      defaultClassName="button primary--default-large"
      disabled
      />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer>
      <Button 
        label="Primary ghost button"
        defaultClassName="button primary--inverted-large"
        optionalClassName="button primary--inverted-large__selected"  
      />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button 
        label="Primary ghost button"
        defaultClassName="button primary--inverted-large"
        disabled
      />
    </PrimaryButtonContainer>
  </>
);

export const Secondary = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Button" defaultClassName="button primary--default-medium" />
    </PrimaryButtonContainer>

    <SecondaryButtonContainer>
      <Button label="Button" defaultClassName="button secondary--default-medium" />
    </SecondaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Button" defaultClassName="button primary--inverted-medium" />
    </PrimaryButtonContainer>

    <SecondaryButtonContainer disabled={true}>
      <Button label="Button" defaultClassName="button secondary--default-medium" disabled />
    </SecondaryButtonContainer>
  </>
);

export const Controlled = () => (
  <>
    <PrimaryButtonContainer>
      <Button 
        label="Primary ghost button"
        defaultClassName="button primary--inverted-large unborder-shadow right-icon"
        optionalClassName="button primary--inverted-large__selected unborder-shadow right-icon"
      />
      <IconGenerator 
          renderIcon={InfoIcon}
          props={{
            defaultClassName: 'icon--info-normal',
            right: '15px',
            fill: gray.g3,
            width: '16px',
            height: '16px',
          }}
        />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button 
        label="Primary ghost button"
        defaultClassName="button primary--inverted-large right-icon"
        disabled
      />
      <IconGenerator 
          renderIcon={InfoIcon}
          props={{
            className: 'icon--info-disabled',
            right: '15px',
            fill: gray.g3,
            width: '16px',
            height: '16px',
          }}
        />
    </PrimaryButtonContainer>
  </>
);

export const Option = () => (
  <>
    <OptionButtonContainer>
      <Button
        defaultClassName="button option--default-medium"
        optionalClassName="button option--default-medium__selected"
      >
        <strong>Buttton</strong> Text
      </Button>
    </OptionButtonContainer>

    <OptionButtonContainer>
      <Button
        defaultClassName="button option--default-medium__selected"
        optionalClassName="button option--default-medium"
      >
        <strong>Buttton</strong> Text
      </Button>
    </OptionButtonContainer>

    <OptionGroup>
      <OptionButtonContainer>
        <Button label="Choice"
          defaultClassName="button option--default-left"
          optionalClassName="button option--default-left__selected"
        />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice"
          defaultClassName="button option--default-middle"
          optionalClassName="button option--default-middle__selected"
        />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice"
          defaultClassName="button option--default-right"
          optionalClassName="button option--default-right__selected"
        />
      </OptionButtonContainer>
    </OptionGroup>

    <OptionGroup>
      <OptionButtonContainer>
        <Button label="Choice"
          defaultClassName="button option--default-left__selected"
          optionalClassName="button option--default-left"
        />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice"
          defaultClassName="button option--default-middle__selected"
          optionalClassName="button option--default-middle"
        />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice"
          defaultClassName="button option--default-right__selected"
          optionalClassName="button option--default-right"
        />
      </OptionButtonContainer>
    </OptionGroup>
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

export const StatusButton = () => (
  <>
    <StatusButtonContainer>
      <IconGenerator 
        renderIcon={EllipseIcon} 
        props={{
          left: '8px',
          fill: green.g1,
          width: '6px',
          height: '6px',
        }}
      />
      <Button label="Status" defaultClassName="button statusok--default-small__left" />
    </StatusButtonContainer>
    
    <StatusButtonContainer>
      <Button label="Status" defaultClassName="button statusok--default-small" />
    </StatusButtonContainer>

    <StatusButtonContainer>
      <Button label="Label" defaultClassName="button label--default-small__right" />
      <IconGenerator
        renderIcon={XIcon}
        props={{
          right: '8px',
          width: '4px',
          height: '4px',
        }}
      />
    </StatusButtonContainer>
    
    <StatusButtonContainer>
      <Button label="Label" defaultClassName="button label--default-medium right-icon" />
      <IconGenerator
        renderIcon={XIcon}
        props={{
          right: '8px',
          width: '6px',
          height: '6px',
        }}
      />
    </StatusButtonContainer>
  </>
);