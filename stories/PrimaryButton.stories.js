import React from 'react';
import '../src/main.css';
import { Button, } from '../src/Components';

export default {
  title: 'Primary Button',
};

export const Solid = () => (
  <>
    <Button label="Primary big button" type="primary-default-large" />
    <Button label="Primary big button" type="primary-default-large" disabled />
  </>
);

export const Ghost = () => (
  <>
    <Button label="Primary ghost button" type="primary-inverted-large" />
    <Button label="Primary ghost button" type="primary-inverted-large" disabled />
  </>
);