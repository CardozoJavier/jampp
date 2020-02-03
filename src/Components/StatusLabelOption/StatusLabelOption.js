import React from 'react';
import PropTypes from 'prop-types';
import { StatusLabelContainer } from './styles';
import { bemDestruct } from '../../utils';
import { EllipseIcon, CheckIcon } from '../UI/Icons';
import { StatusLabel } from '../Label';

/**
 * StatusLabelOption component should be called with
 * @param {String} label - (Required) Text to be display inside label.
 * @param {String} color - (Required) Define the color pill.
 * @param {String} className - (Required) The className determines the option styles (on hover, on focus).
 * @param {String} id - (Optional) It's an unique ID to identifier each checkbox.
 * @param {Function} handleCheck - (Optional) Function that returns an svg icon.
 * @param {Boolean} notCheckIcon - (Optional) It's a modifier to not display the check icon next to text.
 * @param {Boolean} flat - (Optional) If true, not display svg circle next to the text pill.
 * @return {React Component} A view for an StatusLabel into selectable option.
 */
const StatusLabelOption = ({ label, color, className, id, handleCheck, flat, notCheckIcon, }) => (
  <StatusLabelContainer 
    key={id}
    className={bemDestruct(className)}
    onClick={() => handleCheck(id, label, color, flat, 'status-label')}
  >
    <StatusLabel text={label} color={color} icon={flat ? null : EllipseIcon} />
    {!notCheckIcon &&
        <CheckIcon props={{ margin: '0 0 0 10px', fill: 'transparent', width: '14px', height: '10px', className: bemDestruct(className) }} />
    }
  </StatusLabelContainer>
);

StatusLabelOption.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  handleCheck: PropTypes.func,
  flat: PropTypes.bool,
  notCheckIcon: PropTypes.bool,
};

StatusLabelOption.defaultProps = {
  className: '',
  id: '',
  handleCheck: () => null,
  flat: false,
  notCheckIcon: false,
};

export default StatusLabelOption;
