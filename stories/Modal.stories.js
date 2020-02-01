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
 * @prop {String} width - (Optional) It's the width of the modal container. Default value is 600px.
 * @prop {String} minHeight - (Optional) It's the min-height of the modal container. Default value is 240px.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 */
export const PlainModal = () => (
  <Modal />
);

/**
 * Modal component can be called with
 * @prop {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @prop {String} width - (Optional) It's the width of the modal container. Default value is 600px.
 * @prop {String} minHeight - (Optional) It's the min-height of the modal container. Default value is 240px.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 */
export const WithTitle = () => (
  <Modal title="Title">
    <ModalFooter />
  </Modal>
);

/**
 * Modal component can be called with
 * @prop {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @prop {String} width - (Optional) It's the width of the modal container. Default value is 600px.
 * @prop {String} minHeight - (Optional) It's the min-height of the modal container. Default value is 240px.
 * @prop {Function} icon - (Optional) Function that returns an svg icon.
 */
export const WithTitleIcon = () => (
  <Modal title="Title" icon={TrashIcon} />
);

/**
 * CenteredModal component should be called with
 * @prop {Node} children - (Required)  It's the modal title to be displayed.
 */
export const Centered = () => (
  <CenteredModal>
    <HeaderTitle>{"Are you sure you want to do this?"}</HeaderTitle>
    <Button label="Yes, action" type="primary-action-medium" />
    <Button label="No, cancel" type="secondary-action-medium" />
  </CenteredModal>
);
