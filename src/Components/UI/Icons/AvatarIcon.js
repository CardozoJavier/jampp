import React from 'react';
import { AvatarIconContainer, Img } from './styles';

export default ({ props }) => (
  <AvatarIconContainer {...props}>
    <Img {...props} alt="" />
  </AvatarIconContainer>
);