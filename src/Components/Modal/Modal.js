import React from 'react';
import { ModalContainer, ModalTitle, ModalHeader, ModalFooter, IconTitleContainer } from './styles';
import { IconGenerator, XIcon } from '../UI/Icons';

/**
 * Modal component can be called with
 * @param {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @return {React Component} A view for plain modal with title with or not icon and footer.
 */
const Modal = ({ title, icon, children }) => (
  <ModalContainer>
    {icon &&
      <IconTitleContainer>
        <IconGenerator
          renderIcon={icon}
          props={{
            position: 'unset',
            width: '16px',
            height: '16px',
          }}
        />
        <ModalTitle margin='0 10px'>{ title }</ModalTitle>
      </IconTitleContainer>
    }
    {title && !icon &&
      <ModalHeader>
        <ModalTitle>{ title }</ModalTitle>
        <IconGenerator
          renderIcon={XIcon}
          props={{
            position: 'unset',
            right: '8px',
            width: '6px',
            height: '6px',
          }}
        />
      </ModalHeader>
    }
    {children}
  </ModalContainer>
);

export default Modal;
