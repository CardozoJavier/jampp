
import React from 'react';
import { LockedIconContainer } from './styles';

export default ({ props }) => (
  <LockedIconContainer {...props} role="button">
    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 6H10V4C10 1.79 8.21 0 6 0C3.79 0 2 1.79 2 4V6H1C0.45 6 0 6.45 0 7V15C0 15.55 0.45 16 1 16H11C11.55 16 12 15.55 12 15V7C12 6.45 11.55 6 11 6ZM6.67 10.48V12.33C6.67 12.7 6.37 13 6 13C5.63 13 5.33 12.7 5.33 12.33V10.48C4.93 10.25 4.66 9.82 4.66 9.33C4.67 8.6 5.26 8 6 8C6.74 8 7.33 8.6 7.33 9.33C7.33 9.83 7.06 10.25 6.67 10.48ZM8 6H4V4C4 2.9 4.9 2 6 2C7.1 2 8 2.9 8 4V6Z" />
    </svg>
  </LockedIconContainer>
);
