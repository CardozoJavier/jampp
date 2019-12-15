import React from 'react';
import { Modal } from '../src/Components';
import { TrashIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Modal',
};

export const PlainModal = () => (
  <Modal />
);

export const WithTitle = () => (
  <Modal title="Title" footer />
);

export const WithTitleIcon = () => (
  <Modal title="Title" icon={TrashIcon} />
);