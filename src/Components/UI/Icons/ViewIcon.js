import React from 'react';
import { ViewIconContainer } from './styles';

const ViewIcon = ({ props }) => (
  <ViewIconContainer {...props}>
    <svg height="10" viewBox="0 0 16 10" width="16" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m8 0c-3.86 0-7.099998 2.1-7.9899976 4.93-.00999996.05-.00999996.09 0 .14.8899996 2.83 4.1299976 4.93 7.9899976 4.93s7.1-2.1 7.99-4.93c.01-.04.01-.09 0-.13-.89-2.84-4.13-4.94-7.99-4.94zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        <path d="m8 3c-.2 0-.4.04-.58.1.34.16.58.5.58.9 0 .55-.45 1-1 1-.4 0-.74-.24-.9-.58-.06.18-.1.38-.1.58 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2z"/>
      </g>
    </svg>
  </ViewIconContainer>
);

export default ViewIcon;
