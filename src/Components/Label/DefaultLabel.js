import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { XIcon } from '../UI/Icons';

/**
 * DefaultLabel component should be called with
 * @param {String} text - (Required) Text to be display inside label.
 * @param {String} size - (Optional) Define label size, it can be small or medium. Small is default.
 * @param {Function} onClose - (Optional) Callback to trigger on onClick event on X icon.
 */
const DefaultLabel = ({ text, size, onClose }) => (
  <Button label={text} type={`label-default-${size}`} icon={XIcon} onClickIcon={onClose} />
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
