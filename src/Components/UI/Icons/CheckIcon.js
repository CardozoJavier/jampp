import React from 'react';
import { CheckIconContainer } from './styles';

export default ({ props }) => (
  <CheckIconContainer {...props}>
    <svg viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L4.68 8.5L12.5657 1" stroke={props.fill} strokeWidth="2"/>
    </svg>
  </CheckIconContainer>
);