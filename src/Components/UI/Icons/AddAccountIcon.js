import React from 'react';
import { AddAccountIconContainer } from './styles';

export default ({ props, disabled }) => (
  <AddAccountIconContainer {...props} disabled={disabled} >
    <svg width="16" height="16" viewBox="0 0 16 16"  xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6 8H0.4C0.18 8 0 8.18 0 8.4V15.6C0 15.82 0.18 16 0.4 16H15.6C15.82 16 16 15.82 16 15.6V8.4C16 8.18 15.82 8 15.6 8ZM6 13.6C6 13.82 5.82 14 5.6 14H2.4C2.18 14 2 13.82 2 13.6V10.4C2 10.18 2.18 10 2.4 10H5.6C5.82 10 6 10.18 6 10.4V13.6ZM14 13.6C14 13.82 13.82 14 13.6 14H8.4C8.18 14 8 13.82 8 13.6V13.4C8 13.18 8.18 13 8.4 13H13.6C13.82 13 14 13.18 14 13.4V13.6ZM14 10.6C14 10.82 13.82 11 13.6 11H8.4C8.18 11 8 10.82 8 10.6V10.4C8 10.18 8.18 10 8.4 10H13.6C13.82 10 14 10.18 14 10.4V10.6Z" />
      <path d="M1 4.4V7H3V6H6V7H8V6H13V7H15V4.4C15 4.18 14.82 4 14.6 4H1.4C1.18 4 1 4.18 1 4.4Z" />
      <path d="M2 0.4V3H4V2H6V3H8V2H12V3H14V0.4C14 0.18 13.82 0 13.6 0H2.4C2.18 0 2 0.18 2 0.4Z" />
    </svg>
  </AddAccountIconContainer>
);


