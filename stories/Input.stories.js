import React from 'react';
import '../src/main.css';
import { palette } from '../src/Components/styles';
import {
  BasicInputFieldContainer,
  AccessoryInputFieldContainer
} from '../src/Components/InputField/styles';
import {
  SearchIcon,
  IconGenerator,
  DownChevronIcon,
} from '../src/Components/UI/Icons';

import {
  Label,
  InputField,
  LabelContainer,
  ControlledInputField,
} from '../src/Components';

export default {
  title: 'Input'
};

export const Basic = () => (
  <>
    <BasicInputFieldContainer>
      <InputField
        placeholder="Text"
        className="input basic--default-medium"
      />
    </BasicInputFieldContainer>

    <BasicInputFieldContainer>
      <InputField
        placeholder="Text"
        className="input basic--default-medium"
        disabled
      />
    </BasicInputFieldContainer>
  </>
);

export const Accesory = () => (
  <>
    <AccessoryInputFieldContainer>
      <InputField 
        placeholder="Text"
        className="input accessory--default-medium__left"
      />

      <IconGenerator
        renderIcon={SearchIcon}
        props={{
          position: 'relative',
          top: '7px',
          left: '10px',
          fill: palette.gray.g07,
          width: '11px',
          height: '11px',
          verticalAlign: 'middle',
        }}
      />
    </AccessoryInputFieldContainer>

    <AccessoryInputFieldContainer>
      <InputField 
        placeholder="Text"
        className="input accessory--default-medium__right"
      />
      <IconGenerator
        renderIcon={DownChevronIcon}
        props={{
          position: 'relative',
          top: '7px',
          left: '145px',
          fill: palette.gray.g07,
          width: '16px',
          height: '16px',
          verticalAlign: 'middle',
        }}
      />
    </AccessoryInputFieldContainer>

    <AccessoryInputFieldContainer disabled={true}>
      <InputField 
        placeholder="Text"
        className="input accessory--default-medium__right"
        disabled
      />
      <IconGenerator
        renderIcon={DownChevronIcon}
        props={{ 
          position: 'relative',
          top: '8px',
          left: '145px',
          fill: palette.gray.g2,
          width: '16px',
          height: '16px',
        }}
        disabled
      />
    </AccessoryInputFieldContainer>
  </>
);

export const InputLabel = () => (
  <>
    <AccessoryInputFieldContainer>
      <LabelContainer>
        <Label htmlFor="inputField">Text</Label>
      </LabelContainer>
      <InputField 
        id="inputField"
        placeholder="Text"
        className="input accessory--default-medium__right"
      />
      <IconGenerator
        renderIcon={DownChevronIcon}
        props={{
          position: 'relative',
          top: '7px',
          left: '145px',
          fill: palette.gray.g07,
          width: '16px',
          height: '16px',
          verticalAlign: 'middle',
        }}
      />
    </AccessoryInputFieldContainer>

    <BasicInputFieldContainer>
      <LabelContainer>
        <Label htmlFor="inputFieldB">Text</Label>
      </LabelContainer>
      <InputField 
        id="inputFieldB"
        placeholder="Text"
        className="input basic--default-medium"
      />
    </BasicInputFieldContainer>
  </>
);

export const Controlled = () => (
  <>
    <BasicInputFieldContainer>
      <LabelContainer>
        <Label htmlFor="inputFieldC">Text</Label>
      </LabelContainer>
      <ControlledInputField
        id={'inputFieldC'}
        customPlaceholder={{ bold: 'Text', normal: 'text' }}
        inputClassName="input basic--default-medium"
        defaultClassName="placeholder controlled--default-medium"
        optionalClassName="placeholder controlled--default-medium__selected"
      />
    </BasicInputFieldContainer>
  </>
);