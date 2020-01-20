import React, { useContext } from 'react';
import { Button } from '../';
import {
  PaymentRowContainer,
  PaymentColumnField,
  PaymentColumnFieldButton
} from './styles';
import { RowContext } from './PaymentMethodTable';

const PaymentRow = ({ children, id }) => {
  const context = useContext(RowContext);
  const { row, handleClick } = context;
  const isSelected = id === row;
  const className = isSelected ? 'selected' : '';

  return (
      <PaymentRowContainer className={className}>
        {children.map((row, index) => {
          if (row.props.button) {
            return (
              <PaymentColumnFieldButton borderLeft="none" key={index}>
                <Button label={isSelected ? row.props.textWhenSelect : row.props.children} type="link-default-left" onClick={() => handleClick(id, row.props.onClick)} />
              </PaymentColumnFieldButton>
            );
          } else {
            return <PaymentColumnField borderLeft={index === 0 ? 'none' : ''} key={index}>{row.props.children}</PaymentColumnField>;
          }
        })}
      </PaymentRowContainer>
  );
};

export default PaymentRow;