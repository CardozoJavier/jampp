import React from 'react';
import { Modal, Button, OptionDropdown, StatusLabelDropdown } from '../src/Components';
import { CenteredModal } from '../src/Components/Modal';
import { HeaderTitle, ModalFooter, ModalContainer, ModalRowContainer, } from '../src/Components/Modal/styles';
import { TrashIcon, FilterIcon } from '../src/Components/UI/Icons';
import { DropdownContainer, DropdownLabel } from '../src/Components/Dropdown/styles';
import { Option } from '../src/Components/OptionList/styles';

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

export const OneColumn = () => (
  <Modal title="Filter Modal Example" icon={FilterIcon} width="222px">
    <ModalRowContainer padding="10px 20px 10px 20px">
      <DropdownContainer width="100%" direction="column" align="start" alignItems="flex-start">
        <DropdownLabel>Title</DropdownLabel>
        <OptionDropdown text="All" type="basic" wide>
          <Option label="All" id="id1" />
          <Option label="Option 1" id="id2" />
          <Option label="Option 2" id="id3" />
        </OptionDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding="10px 20px">
      <DropdownContainer width="100%" direction="column" align="start" alignItems="flex-start">
        <DropdownLabel>Title</DropdownLabel>
        <StatusLabelDropdown text="All" type="basic" minWidth="150px" wide>
          <Option label="All" id="id1" flat />
          <Option label="Due" id="id2" color="blue" flat />
          <Option label="Paid" id="id3" color="green" flat />
          <Option label="Paid - Credit Note" id="id4" color="green" flat />
          <Option label="Partially Paid" id="id5" color="yellow" flat />
          <Option label="Overdue" id="id6" color="red" flat />
        </StatusLabelDropdown>
      </DropdownContainer>
    </ModalRowContainer>

    <ModalRowContainer padding="27px 20px" justifyContent="flex-end">
      <Button label="Cancel" type="secondary-action-medium" />
      <Button label="Apply" type="primary-action-medium" />
    </ModalRowContainer>
  </Modal>
);
