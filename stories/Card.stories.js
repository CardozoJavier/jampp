import React from 'react';
import { Card, Modal } from '../src/Components';

export default {
  title: 'Cards',
};

export const WithTitle = () => (
  <Card title="Title" />
);

export const WithTitleAndDescription = () => (
  <Card title="Title" description="This information will be used to create your account. You will not be able to change this setting later, so choose the options carefully"/>
);
