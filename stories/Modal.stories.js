import React from 'react';
import { Modal, Button } from '../src/Components';
import { CenteredModal } from '../src/Components/Modal';
import { HeaderTitle, } from '../src/Components/Modal/styles';
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

export const Centered = () => (
  <CenteredModal>
    <HeaderTitle>{"Are you sure you want to do this?"}</HeaderTitle>
    <Button label="Yes, action" type="primary-action-medium" />
    <Button label="No, cancel" type="secondary-action-medium" />
  </CenteredModal>
);
