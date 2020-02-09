import React from 'react';
import { CreditCardIconContainer } from './styles';

const CreditCardIcon = ({ props }) => (
  <CreditCardIconContainer {...props}>
    <svg height="11" viewBox="0 0 16 11" width="16" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="m1 0h14c.55 0 1 .45 1 1v1h-16v-1c0-.55.45-1 1-1z"/>
        <path d="m0 4v6c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-6zm6 3.6c0 .22-.18.4-.4.4h-3.2c-.22 0-.4-.18-.4-.4v-1.2c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4z"/>
      </g>
    </svg>
  </CreditCardIconContainer>
);
  
export default CreditCardIcon;
