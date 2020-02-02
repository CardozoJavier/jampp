import React from 'react';
import { NotificationsIconContainer } from './styles';
import { EllipseIcon } from '.';
import { palette } from '../../styles';
const { green } = palette;

export default ({ props, onClick, disabled, hasNotification }) => (
  <NotificationsIconContainer {...props} onClick={disabled ? null : onClick} disabled={disabled}>
    <svg width="17" height="16" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M14.49 11.37C13.91 10.86 13.5 10.19 13.5 9.41V7C13.5 4.58 11.78 2.56 9.49003 2.1C9.49003 2.07 9.50003 2.03 9.50003 2C9.50003 0.9 8.60003 0 7.50003 0C6.40003 0 5.50003 0.9 5.50003 2C5.50003 2.03 5.51003 2.07 5.51003 2.1C3.22003 2.56 1.50003 4.58 1.50003 7V9.42C1.50003 10.19 1.09003 10.87 0.510029 11.38C0.180029 11.66 -0.0199706 12.1 2.94354e-05 12.58C0.0400294 13.39 0.770029 14 1.59003 14H13.42C14.23 14 14.96 13.39 15 12.58C15.02 12.1 14.82 11.66 14.49 11.37Z" />
        <path d="M7.50003 16C8.24003 16 8.88003 15.6 9.22003 15H5.78003C6.12003 15.6 6.76003 16 7.50003 16Z" />
      </g>
    </svg>
    <EllipseIcon props={{ hasNotification, position: 'absolute', bottom: '23px', left: '45px', fill: green.g1, radio: '3px', width: '8px', height: '8px' }}/>
  </NotificationsIconContainer>
);
