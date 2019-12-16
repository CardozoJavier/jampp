import React from 'react';
import '../src/main.css';
import { AddIcon } from '../src/Components/UI/Icons';
import { Button, } from '../src/Components';

export default {
  title: 'Secondary Button',
};


export const SolidPurple = () => (
  <>
    <Button label="Button" type="secondary-default-medium" />
    <Button label="Button" type="secondary-default-medium" disabled />
  </>
);

export const SolidGray = () => (
  <>
    <Button label="Button" type="secondary-gray-medium" />
    <Button label="Button" type="secondary-gray-medium" disabled/>
  </>
);

export const PurpleWithRightIcon = () => (
  <>
    <Button label="Button" type="accessory-default-left" icon={AddIcon} />
    <Button label="Button" type="accessory-default-left" icon={AddIcon} disabled/>
  </>
);

export const GrayWithRightIcon = () => (
  <>
    <Button label="Button" type="accessory-gray-left" icon={AddIcon} />
    <Button label="Button" type="accessory-gray-left" icon={AddIcon} disabled />
  </>
);

export const Ghost = () => (
  <>
    <Button label="Button" type="secondary-inverted-medium" />
    <Button label="Button" type="secondary-inverted-medium" disabled/>
  </>
);
