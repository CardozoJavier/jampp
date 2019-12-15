import React from 'react';
import { ModalContainer, ModalTitle, ModalHeader, ModalFooter, IconTitleContainer } from './styles';
import { IconGenerator, XIcon } from '../UI/Icons';

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
