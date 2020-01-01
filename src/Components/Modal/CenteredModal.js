import React from 'react';
import { CenteredModalContainer } from './styles';

/**
 * CenteredModal component should be called with
 * @param {Function} children - (Required)  It's the modal title to be displayed.
 * @return {React Component} A view for modal with centered children.
 */
const CenteredModal = ({ children }) => (
  <CenteredModalContainer>
    {children}
  </CenteredModalContainer>
);

export default CenteredModal;
