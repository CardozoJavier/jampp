import React from 'react';
import { StatusLabelContainer } from './styles';
import { Button } from '../Button';
import { StatusButtonContainer } from '../Button/styles';
import { bemDestruct } from '../../utils';
import { EllipseIcon } from '../UI/Icons';

const StatusLabel = ({ label, id, color, className, handleCheck }) => (
  <StatusLabelContainer 
    key={id}
    className={bemDestruct(className)}
    onClick={(e) => handleCheck(e, id)}
  >
    <Button label={label} type={`status-small-${color}`} icon={EllipseIcon} />
  </StatusLabelContainer>
);

export default StatusLabel;
