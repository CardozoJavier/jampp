import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

/**
 * StatusLabel component should be called with
 * @param {String} text - (Required) Text to be display inside label.
 * @param {String} color - (Required) Define the color pill.
 * @param {Function} icon - (Optional) Function that returns an svg icon.
 */
const StatusLabel = ({ text, color, icon }) => (
  <Button label={text} type={`status-small-${color}`} icon={icon} />
);

StatusLabel.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.func,
};

StatusLabel.defaultProps = {
  icon: () => null,
};

export default StatusLabel;
