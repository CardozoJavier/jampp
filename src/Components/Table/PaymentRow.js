import React, { useContext, useEffect } from 'react';
import { Button } from '../';
import {
  PaymentRowContainer,
  PaymentColumnField,
  PaymentColumnFieldButton
} from './styles';
import { RowContext } from './PaymentMethodTable';

const PaymentRow = ({ children, id, isSelected }) => {
  const context = useContext(RowContext);
  const { row, handleClick } = context;
  const selected = id === row;
  const className = selected ? 'selected' : '';

  useEffect(() => {
    if (isSelected) {
      handleClick(id);
    }
  }, []);

  return (
      <PaymentRowContainer className={className}>
        {children.map((row, index) => {
          if (row.props.button) {
            return (
              <PaymentColumnFieldButton borderLeft="none" key={index}>
                <Button label={selected ? row.props.textWhenSelect : row.props.children} type="link-default-left" onClick={() => handleClick(id, row.props.onClick)} />
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