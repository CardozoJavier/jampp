import React from 'react';
import { Modal, Button } from '../src/Components';
import { CenteredModal } from '../src/Components/Modal';
import { HeaderTitle, ModalFooter, } from '../src/Components/Modal/styles';
import { TrashIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Modal',
};

/**
 * Modal component can be called with
 * @prop {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 */
export const PlainModal = () => (
  <Modal />
);

export const WithTitle = () => (
  <Modal title="Title">
    <ModalFooter />
  </Modal>
);

export const WithTitleIcon = () => (
  <Modal title="Title" icon={TrashIcon} />
);

/**
 * CenteredModal component should be called with
 * @prop {Function} children - (Required)  It's the modal title to be displayed.
 */
export const Centered = () => (
  <CenteredModal>
    <HeaderTitle>{"Are you sure you want to do this?"}</HeaderTitle>
    <Button label="Yes, action" type="primary-action-medium" />
    <Button label="No, cancel" type="secondary-action-medium" />
  </CenteredModal>
);
