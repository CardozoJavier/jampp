import React from 'react';
import { CenteredModalContainer } from './styles';

const CenteredModal = ({ children }) => (
  <CenteredModalContainer>
    {children}
  </CenteredModalContainer>
);

export default CenteredModal;
