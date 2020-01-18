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
  const className = id === row ? 'selected' : 'not-selected';

  return (
      <PaymentRowContainer className={className}>
        {children.map((row, index) => {
          if (row.props.button) {
            return (
              <PaymentColumnFieldButton borderLeft="none" key={index}>
                <Button label={row.props.children} type="link-default-left" onClick={() => handleClick(id)} />
              </PaymentColumnFieldButton>
            );
          } else {
            return <PaymentColumnField key={index}>{row.props.children}</PaymentColumnField>;
          }
        })}
      </PaymentRowContainer>
  );
};

export default PaymentRow;