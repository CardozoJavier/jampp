import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  AddIcon,
  IconGenerator,
  DownChevronIcon,
  DownloadFileIcon,
  EllipseIcon,
  XIcon,
} from '../src/Components/UI/Icons';

import { 
  PrimaryButtonContainer,
  SecondaryButtonContainer,
  AccessoryButtonContainer,
  OptionButtonContainer,
  StatusButtonContainer,
} from '../src/Components/Button/styles';

import { Button } from '../src/Components';
import { OptionGroup } from './styles/StoriesContainer.styles';

export default {
  title: 'Button',
};

export const Primary = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Primary big button" className="button--primary-large" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Primary big button" className="button--primary-medium" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Primary big button" className="button--primary-small" />
    </PrimaryButtonContainer>

    <PrimaryButtonContainer disabled={true}>
      <Button label="Primary ghost button" className="button--primary-large" disabled />
    </PrimaryButtonContainer>
  </>
);


export const Secondary = () => (
  <>
    <PrimaryButtonContainer>
      <Button label="Button" className="button--primary-medium" />
    </PrimaryButtonContainer>

    <SecondaryButtonContainer>
      <Button label="Button" className="button--secondary-medium" />
    </SecondaryButtonContainer>

    <PrimaryButtonContainer>
      <Button label="Button" className="button--primary-medium" disabled/>
    </PrimaryButtonContainer>
  </>
);

export const Option = () => (
  <>
    <OptionButtonContainer>
      <Button className="button--option-medium__selected">
        <strong>Buttton</strong> Text
      </Button>
    </OptionButtonContainer>

    <OptionButtonContainer>
      <Button className="button--option-medium__default">
        <strong>Buttton</strong> Text
      </Button>
    </OptionButtonContainer>

    <OptionGroup>
      <OptionButtonContainer>
        <Button label="Choice" className="button--option-left__selected" />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice" className="button--option-middle__selected" />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice" className="button--option-right__selected" />
      </OptionButtonContainer>
    </OptionGroup>

    <OptionGroup>
      <OptionButtonContainer>
        <Button label="Choice" className="button--option-left__default" />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice" className="button--option-middle__default" />
      </OptionButtonContainer>
      <OptionButtonContainer>
        <Button label="Choice" className="button--option-right__default" />
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
          fill: palette.white,
          width: '11px',
          height: '11px',
          
        }}
      />
      <Button label="Button" className="button--accessory-left" />
    </AccessoryButtonContainer>
    
    <AccessoryButtonContainer>
      <IconGenerator
        renderIcon={AddIcon}
        props={{
          left: '10px',
          fill: palette.gray.g4,
          width: '11px',
          height: '11px',
          
        }}
      />
      <Button label="Button" className="button--accessory-left__inverted" />    
    </AccessoryButtonContainer>

    <AccessoryButtonContainer>
      <IconGenerator
        renderIcon={DownloadFileIcon}
        props={{
          left: '10px',
          fill: palette.gray.g4,
          width: '20px',
          height: '20px',
          
        }}
      />
      <Button label="Export" className="button--accessory-both__inverted" />
      <IconGenerator
        renderIcon={DownChevronIcon}
        props={{
          right: '5px',
          fill: palette.gray.g4,
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
          fill: palette.green.g1,
          width: '6px',
          height: '6px',
        }}
      />
      <Button label="Status" className="button--statusok-small" />
    </StatusButtonContainer>
    
    <StatusButtonContainer>
      <Button label="Status" className="button--statusok" />
    </StatusButtonContainer>

    <StatusButtonContainer>
      <Button label="Label" className="button--label-small" />
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
      <Button label="Label" className="button--label-medium" />
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