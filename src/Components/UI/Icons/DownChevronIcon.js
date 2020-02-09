import React from 'react';
import { DownChevronIconContainer } from './styles';

export default ({ props, disabled }) => (
  <DownChevronIconContainer {...props} disabled={disabled} >
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
    </svg>
  </DownChevronIconContainer>
);
