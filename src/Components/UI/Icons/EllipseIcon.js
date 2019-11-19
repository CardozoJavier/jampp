import React from 'react';
import { EllipseIconContainer } from './styles';

export default ({ props }) => (
  <EllipseIconContainer {...props}>
    <svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" />
    </svg>
  </EllipseIconContainer>
);
