import React from 'react';
import PropTypes from 'prop-types';
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

CenteredModal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default CenteredModal;
