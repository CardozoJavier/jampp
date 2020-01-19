import React from 'react';
import { AlertIconContainer } from './styles';

export default ({ props }) => (
  <AlertIconContainer {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="a">
      <path d="m0 0h16v16h-16z"/>
    </clipPath>
    <g clipPath="url(#a)">
      <path d="m15.98 15.7-7.62-15.469995c-.15-.3000001-.58-.3000001-.73 0l-7.6100009 15.469995c-.07.14.03.3.1799999.3h15.600001c.15 0 .25-.16.18-.3zm-8.84-9.7h1.6c.11 0 .2.09.2.2v4.6c0 .11-.09.2-.2.2h-1.6c-.11 0-.2-.09-.2-.2v-4.6c0-.11.09-.2.2-.2zm.84 7.98c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </g>
  </AlertIconContainer>
);
