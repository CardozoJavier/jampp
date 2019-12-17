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
      <Button label="Status" type="status-small-green" />
      <Button label="Status" type="status-small-red" />
      <Button label="Status" type="status-small-yellow" />
      <Button label="Status" type="status-small-blue" />
    </LabelContainer>

    <LabelContainer>
      <Button label="Status" type="status-small-green" icon={EllipseIcon} />
      <Button label="Status" type="status-small-red" icon={EllipseIcon} />
      <Button label="Status" type="status-small-yellow" icon={EllipseIcon} />
      <Button label="Status" type="status-small-blue" icon={EllipseIcon} />
    </LabelContainer>
  </StatusLabelContainer>
);