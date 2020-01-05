import React from 'react';
import PropTypes from 'prop-types';
import { CenteredModalContainer } from './styles';

/**
 * CenteredModal component should be called with
 * @param {Node} children - (Optional)  It's the content to be displayed into modal.
 * @return {React Component} A view for modal with centered children.
 */
const CenteredModal = ({ children }) => (
  <CenteredModalContainer>
    {children}
  </CenteredModalContainer>
);

CenteredModal.propTypes = {
  children: PropTypes.node,
};

CenteredModal.defaultProps = {
  childre: null,
};

export default CenteredModal;
