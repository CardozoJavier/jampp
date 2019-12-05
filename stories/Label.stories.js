import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  IconGenerator,
  EllipseIcon,
  XIcon,
} from '../src/Components/UI/Icons';

import {
  StatusButtonContainer,
} from '../src/Components/Button/styles';

import { StatusLabelContainer } from './styles/StoriesContainer.styles';

import { Button, } from '../src/Components';
import { LabelContainer } from '../src/Components/InputField/styles';

export default {
  title: 'Label',
};

const { white, black, action, link, gray, violet, green, blue, yellow, red } = palette;

export const Default = () => (
  <>
    <StatusButtonContainer>
      <Button label="Label" defaultClassName="button label--default-small__right" />
      <IconGenerator
        renderIcon={XIcon}
        props={{
          fill: gray.g07,
          right: '8px',
          width: '4px',
          height: '4px',
          className: 'button label--default-small__right',
        }}
      />
    </StatusButtonContainer>
    
    <StatusButtonContainer>
      <Button label="Label" defaultClassName="button label--default-medium right-icon" />
      <IconGenerator
        renderIcon={XIcon}
        props={{
          fill: gray.g07,
          right: '8px',
          width: '6px',
          height: '6px',
          className: 'button label--default-medium__right',
        }}
      />
    </StatusButtonContainer>
  </>
);

export const Status = () => (
  <StatusLabelContainer>
    <LabelContainer>
      <StatusButtonContainer>
        <Button label="Status" defaultClassName="button status--green-small" />
      </StatusButtonContainer>

      <StatusButtonContainer>
        <Button label="Status" defaultClassName="button status--red-small" />
      </StatusButtonContainer>

      <StatusButtonContainer>
        <Button label="Status" defaultClassName="button status--yellow-small" />
      </StatusButtonContainer>

      <StatusButtonContainer>
        <Button label="Status" defaultClassName="button status--blue-small" />
      </StatusButtonContainer>
    </LabelContainer>

    <LabelContainer>
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
        <Button label="Status" defaultClassName="button status--green-small__left" />
      </StatusButtonContainer>

      <StatusButtonContainer>
        <IconGenerator 
          renderIcon={EllipseIcon} 
          props={{
            left: '8px',
            fill: red.r3,
            width: '6px',
            height: '6px',
          }}
          />
        <Button label="Status" defaultClassName="button status--red-small__left" />
      </StatusButtonContainer>

      <StatusButtonContainer>
        <IconGenerator 
          renderIcon={EllipseIcon} 
          props={{
            left: '8px',
            fill: yellow.y2,
            width: '6px',
            height: '6px',
          }}
          />
        <Button label="Status" defaultClassName="button status--yellow-small__left" />
      </StatusButtonContainer>

      <StatusButtonContainer>
        <IconGenerator 
          renderIcon={EllipseIcon} 
          props={{
            left: '8px',
            fill: link,
            width: '6px',
            height: '6px',
          }}
          />
        <Button label="Status" defaultClassName="button status--blue-small__left" />
      </StatusButtonContainer>
    </LabelContainer>
  </StatusLabelContainer>
);