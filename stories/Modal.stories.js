import React from 'react';
import { Modal, Button } from '../src/Components';
import { CenteredModal } from '../src/Components/Modal';
import { HeaderTitle, ModalFooter, ModalContainer, } from '../src/Components/Modal/styles';
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
  <ModalContainer width="600px">
    <Modal />
  </ModalContainer>
);

export const WithTitle = () => (
  <ModalContainer width="600px">
    <Modal title="Title">
      <ModalFooter />
    </Modal>
  </ModalContainer>

);

export const WithTitleIcon = () => (
  <ModalContainer width="600px">
    <Modal title="Title" icon={TrashIcon} />
  </ModalContainer>
);

/**
 * CenteredModal component should be called with
 * @prop {Function} children - (Required)  It's the modal title to be displayed.
 */
export const Centered = () => (
  <ModalContainer width="600px" minHeight="0">
    <CenteredModal>
      <HeaderTitle>{"Are you sure you want to do this?"}</HeaderTitle>
      <Button label="Yes, action" type="primary-action-medium" />
      <Button label="No, cancel" type="secondary-action-medium" />
    </CenteredModal>
  </ModalContainer>
);
