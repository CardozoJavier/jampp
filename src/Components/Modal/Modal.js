import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalTitle, ModalHeader, ModalFooter, IconTitleContainer } from './styles';
import { IconGenerator, XIcon } from '../UI/Icons';
import { getReferencedId } from '../../utils';

/**
 * Modal component can be called with
 * @param {String} title - (Optional)  It's the modal title displayed with an X icon on your right.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 * @param {String} width - (Optional) It's the width of the modal container. Default value is 600px.
 * @param {Node} children - (Optional)  It's the content to be displayed into modal.
 * @param {String} minHeight - (Optional) It's the min-height of the modal container. Default value is 240px.
 * @return {React Component} A view for plain modal with title with or not icon and footer.
 */
const Modal = ({ title, icon, width, children, minHeight, onClose, ...props }) => {
  let ModalElement;
  const id = getReferencedId();
  
  useEffect(() => {
    ModalElement = document.getElementById(id);
  }, []);
  
  const handleClick = useCallback(() => {
    onClose(id);
  }, [children]);

  return (
    <ModalContainer width={width} id={id} minHeight={minHeight} {...props}>
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
          <XIcon
            props={{
              right: '8px',
              width: '8px',
              height: '8px',
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
  minHeight: PropTypes.string,
  onClose: PropTypes.func
};

Modal.defaultProps = {
  title: '',
  icon: null,
  width: '600px',
  children: null,
  minHeight: '240px',
  onClose: () => null,
};

export default React.memo(Modal);
