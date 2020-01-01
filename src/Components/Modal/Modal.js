import React from 'react';
import { ModalContainer, ModalTitle, ModalHeader, ModalFooter, IconTitleContainer } from './styles';
import { IconGenerator, XIcon } from '../UI/Icons';

/**
 * Modal component can be called with
 * @param {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @param {Boolean} footer - (Optional) It's define modal with or with not footer.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @return {React Component} A view for plain modal with title with or not icon and footer.
 */
const Modal = ({ title, footer, icon }) => (
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
    {footer &&
      <ModalFooter />
    }
  </ModalContainer>
);

export default Modal;
