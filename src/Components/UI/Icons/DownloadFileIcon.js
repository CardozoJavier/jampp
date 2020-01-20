import React from 'react';
import { DownloadFileIconContainer } from './styles';

export default ({ props, disabled }) => (
  <DownloadFileIconContainer {...props} disabled={disabled}>
    <svg height="16" viewBox="0 0 14 16" width="14" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m13.82 2.36-2.18-2.18c-.11-.12-.26-.18-.42-.18h-10.62c-.33 0-.6.27-.6.6v14.8c0 .33.27.6.6.6h12.8c.33 0 .6-.27.6-.6v-12.62c0-.16-.06-.31-.18-.42zm-1.82 11.24c0 .22-.18.4-.4.4h-9.2c-.22 0-.4-.18-.4-.4v-11.2c0-.22.18-.4.4-.4h6.82c.16 0 .31.06.42.18l2.18 2.18c.12.11.18.26.18.42z"/><path d="m10.01 7.25c-.16-.16-.42-.16-.57 0l-1.43 1.45v-5.7h-2.02v5.7l-1.43-1.45c-.16-.16-.42-.16-.57 0l-.87.89c-.15.15-.16.39-.02.55l3.59 4.17c.16.19.45.19.61 0l3.59-4.17c.14-.16.13-.4-.02-.56z"/>
      </g>
    </svg>
  </DownloadFileIconContainer>
);
