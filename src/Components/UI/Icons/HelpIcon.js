import React from 'react';
import { HelpIconContainer } from './styles';

export default ({ props, onClick, disabled }) => (
  <HelpIconContainer {...props} onClick={disabled ? null : onClick} disabled={disabled}>
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM7.83 12.27C7.28 12.27 6.87 11.84 6.87 11.31C6.87 10.82 7.28 10.39 7.83 10.39C8.33 10.39 8.75 10.82 8.75 11.31C8.76 11.83 8.34 12.27 7.83 12.27ZM8.79 8.37V9.56H7.29V7.39C8.36 7.32 9.22 6.81 9.22 6.18C9.22 5.59 8.69 5.08 7.88 5.08C7.18 5.08 6.62 5.45 6.18 5.94L5.29 5.05C5.96 4.28 6.89 3.73 8.07 3.73C9.65 3.73 10.71 4.73 10.71 6.03C10.71 7.12 9.8 8.08 8.79 8.37Z" />
    </svg>
  </HelpIconContainer>
);