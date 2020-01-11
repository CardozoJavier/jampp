import React from 'react';
import PropTypes from 'prop-types';
import { DefaultLabelContainer, DefaultLabelText } from './styles';
import { XIcon, IconGenerator } from '../UI/Icons';
import { bemDestruct } from '../../utils';

/**
 * DefaultLabel component should be called with
 * @param {String} text - (Required) Text to be display inside label.
 * @param {String} size - (Optional) Define label size, it can be small or medium. Small is default.
 * @param {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 */
const DefaultLabel = ({ text, size, onClose }) => (
  <DefaultLabelContainer className={bemDestruct(`label label--default-${size}`)}>
    <DefaultLabelText>{ text }</DefaultLabelText>
    <IconGenerator
      renderIcon={XIcon}
      props={{
        className: `icon label--default-${size}__right`,
        onClick: onClose,
      }}
    />
  </DefaultLabelContainer>
);

DefaultLabel.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClose: PropTypes.func,
};

DefaultLabel.defaultProps = {
  size: 'small',
  onClose: () => null,
};

export default DefaultLabel;
