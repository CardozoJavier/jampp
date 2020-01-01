import React from 'react';
import { StatusLabelContainer } from './styles';
import { Button } from '../Button';
import { bemDestruct } from '../../utils';
import { EllipseIcon } from '../UI/Icons';

/**
 * StatusLabelOption component should be called with
 * @prop {String} label - (Required) Text to be display inside label.
 * @param {String} id - (Optional) It's an unique ID to identifier each checkbox.
 * @prop {String} color - (Required) Define the color pill.
 * @param {String} className - (Required) The className determines the option styles (on hover, on focus).
 * @prop {Function} handleCheck - (Optional) Function that returns an svg icon.
 * @return {React Component} A view for an StatusLabel into selectable option.
 */
const StatusLabelOption = ({ label, id, color, className, handleCheck }) => (
  <StatusLabelContainer 
    key={id}
    className={bemDestruct(className)}
    onClick={(e) => handleCheck(e, id)}
  >
    <Button label={label} type={`status-small-${color}`} icon={EllipseIcon} />
  </StatusLabelContainer>
);

export default StatusLabelOption;
