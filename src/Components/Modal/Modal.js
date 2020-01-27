import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalTitle, ModalHeader, ModalFooter, IconTitleContainer } from './styles';
import { IconGenerator, XIcon } from '../UI/Icons';
import { getUniqueId } from '../../utils';

/**
 * Modal component can be called with
 * @param {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {String} width - (Optional) It's the width of the modal container. Default value is 600px.
 * @param {Node} children - (Optional)  It's the content to be displayed into modal.
 * @return {React Component} A view for plain modal with title with or not icon and footer.
 */
const Modal = ({ title, icon, width, children }) => {
  let ModalElement;
  const id = getUniqueId();
  
  useEffect(() => {
    ModalElement = document.getElementById(id);
  });
  
  const handleClick = () => {
    ModalElement.remove();
  };

  return (
    <ModalContainer width={width} id={id}>
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
              onClick: handleClick,
            }}
          />
        </ModalHeader>
      }
      {children}
    </ModalContainer>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.func,
  width: PropTypes.string,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: '',
  icon: null,
  width: '600px',
  children: null,
};

export default Modal;
