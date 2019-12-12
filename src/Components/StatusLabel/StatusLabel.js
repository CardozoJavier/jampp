import React from 'react';
import { StatusLabelContainer } from './styles';
import { Button } from '../Button';
import { StatusButtonContainer } from '../Button/styles';
import { bemDestruct } from '../../utils';

const StatusLabel = ({ label, value, color, className, handleCheck }) => (
  <StatusLabelContainer 
    key={value}
    className={bemDestruct(className)}
    onClick={(e) => handleCheck(e, value)}
  >
    <StatusButtonContainer margin={'0'}>
      <Button label={label} defaultClassName={`button status--${color}-small`} />
    </StatusButtonContainer>
  </StatusLabelContainer>
);

export default StatusLabel;
