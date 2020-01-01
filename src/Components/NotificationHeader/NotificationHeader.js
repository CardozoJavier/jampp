import React from 'react';
import { palette } from '../styles';
import { NotificationHeaderContainer, NotificationText, TextContainer } from './styles';
import { IconGenerator, XIcon, InfoIcon } from '../UI/Icons';
import { SuccessIcon, ExclamationIcon } from '../UI/Icons';
import { bemDestruct } from '../../utils';

const { gray } = palette;

const types = {
  success: {
    icon: SuccessIcon,
    className: 'notification header--success-default',
  },
  error: {
    icon: ExclamationIcon,
    className: 'notification header--error-default',
  },
  info: {
    icon: InfoIcon,
    className: 'notification header--info-default',
  },
};

/**
 * NotificationHeader component should be called with
 * @param {String} text - (Optional) Message to be desplayed into header.
 * @param {String} type - (Required) It's define the header styles.
 * @return {React Component} A view for notifications header with X icon on right.
 */
const NotificationHeader = ({ text, type, onClose }) => (
  <NotificationHeaderContainer className={bemDestruct(types[type].className)}>
    <TextContainer>
      <IconGenerator
        renderIcon={types[type].icon}
        props={{
          position: 'unset',
          width: '18px',
          height: '18px',
          margin: '0 5px',
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
        onClick: onClose,
      }}
    />
  </NotificationHeaderContainer>
);

export default NotificationHeader;
