import React from 'react';
import { SuccessIconContainer } from './styles';

export default ({ props, disabled }) => (
  <SuccessIconContainer {...props} disabled={disabled} >
    <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0C4.03953 0 0 4.03953 0 9C0 13.9605 4.03953 18 9 18C13.9605 18 18 13.9605 18 9C18 4.03953 13.9605 0 9 0ZM7.63953 13.1651L3.64186 9.14651L4.83488 7.95349L7.66046 10.7791L13.186 5.25349L14.3791 6.44651L7.63953 13.1651Z" />
    </svg>
  </SuccessIconContainer>
);
