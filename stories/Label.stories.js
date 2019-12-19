import React from 'react';
import '../src/main.css';
import {
  EllipseIcon,
  XIcon,
} from '../src/Components/UI/Icons';

import { StatusLabelContainer } from './styles/StoriesContainer.styles';

import { Button, } from '../src/Components';
import { LabelContainer } from '../src/Components/InputField/styles';

export default {
  title: 'Label',
};


export const Default = () => (
  <>
    <Button label="Label" type="label-default-small" icon={XIcon} />
    <Button label="Label" type="label-default-medium" icon={XIcon} />
  </>
);

export const Status = () => (
  <StatusLabelContainer>
    <LabelContainer>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-green" />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-red" />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-yellow" />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-blue" />
      </div>
    </LabelContainer>

    <LabelContainer>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-green" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-red" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-yellow" icon={EllipseIcon} />
      </div>
      <div style={{ margin: '5px' }}>
        <Button label="Status" type="status-small-blue" icon={EllipseIcon} />
      </div>
    </LabelContainer>
  </StatusLabelContainer>
);