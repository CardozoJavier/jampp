import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { palette } from '../styles';
import { NotificationHeaderContainer, NotificationText, TextContainer } from './styles';
import { IconGenerator, XIcon, InfoIcon, SuccessIcon, AlertIcon } from '../UI/Icons';
import { bemDestruct, getUniqueId } from '../../utils';

const { gray, green, red, link } = palette;

const types = {
  success: {
    icon: {
      src: SuccessIcon,
      fill: green.g1,
    },
    className: 'notification header--success-default',
  },
  error: {
    icon: {
      src: AlertIcon,
      fill: red.r3,
    },
    className: 'notification header--error-default',
  },
  info: {
    icon: {
      src: InfoIcon,
      fill: link,
    },
    className: 'notification header--info-default',
  },
};

/**
 * NotificationHeader component should be called with
 * @param {String} type - (Required) It's define the header styles.
 * @param {String} text - (Optional) Message to be desplayed into header.
 * @param {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 * @return {React Component} A view for notifications header with X icon on right.
 */
const NotificationHeader = ({ type, text, onClose, }) => {  
  let notificationHeader;
  const id = getUniqueId();
  const { src, fill } = types[type].icon;
  
  useEffect(() => {
    notificationHeader = document.getElementById(id);
  });
  
  const handleClick = () => {
    notificationHeader.remove();
    onClose && onClose();
  };

  return (
    <NotificationHeaderContainer className={bemDestruct(types[type].className)} id={id}>
      <TextContainer>
        <IconGenerator
          renderIcon={src}
          props={{
            margin: '0 10px',
            fill,
          }}
          />
        <NotificationText>
          {text}
        </NotificationText>
      </TextContainer>
      <IconGenerator
        renderIcon={XIcon}
        props={{
          position: 'unset',
          fill: gray.g3,
          right: '8px',
          width: '8px',
          height: '8px',
          margin: '0 20px 0 0',
          onClick: handleClick,
        }}
      />
    </NotificationHeaderContainer>
  );
};

NotificationHeader.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClose: PropTypes.func,
};

NotificationHeader.defaultProps = {
  text: '',
  onClose: () => null,
};

export default NotificationHeader;
