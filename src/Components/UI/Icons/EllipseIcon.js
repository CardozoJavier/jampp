import React from 'react';
import { EllipseIconContainer } from './styles';

export default ({ props }) => (
  <EllipseIconContainer {...props}>
    <svg width="5" height="5" viewBox={props.viewBox || '0 0 5 5'} xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" />
    </svg>
  </EllipseIconContainer>
);

