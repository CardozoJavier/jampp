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

const NotificationHeader = ({ text, type }) => (
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
      }}
    />
  </NotificationHeaderContainer>
);

export default NotificationHeader;
