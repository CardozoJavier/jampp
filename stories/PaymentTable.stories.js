import React from 'react';
import { Card, InputField, Button, OptionDropdown } from '../src/Components';
import { PaymentMethodTable, PaymentRow } from '../src/Components/Table';
import {
  PaymentRowName,
  PaymentRowTitle,
  TableTitle,
  PaymentColumnField,
  PaymentColumnTitle,
  TableButtons,
  PaymentColumnFieldButton,
  TableContainer,
} from '../src/Components/Table/styles';
import { TableImageIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Payment method',
};

/**
 * PatymentMethodTable component should be called with
 * @prop {Node} children - (Required) It's the content to be displayed.
 */
export const Default = () => (
  <Card width="1392px" padding="16px 16px 62px 16px">
    <TableContainer>
      <PaymentRowTitle>
        <PaymentColumnTitle start={2}>{ 'First column title' }</PaymentColumnTitle>
        <PaymentColumnTitle>{ 'Column title' }</PaymentColumnTitle>
        <PaymentColumnTitle>{ 'Column title' }</PaymentColumnTitle>
      </PaymentRowTitle>
      <PaymentMethodTable>
        <PaymentRow id="row1">
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField button>{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
        <PaymentRow id="row2">
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField button>{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
        {/* <PaymentRow>
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnFieldButton borderLeft="none">
            <Button label="Make default" type="link-default-left" />
          </PaymentColumnFieldButton>
        </PaymentRow>
        <PaymentRow>
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnFieldButton borderLeft="none">
            <Button label="Make default" type="link-default-left" />
          </PaymentColumnFieldButton>
        </PaymentRow>
        <PaymentRow>
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnFieldButton borderLeft="none">
            <Button label="Make default" type="link-default-left" />
          </PaymentColumnFieldButton>
        </PaymentRow> */}
      </PaymentMethodTable>
    </TableContainer>
  </Card>
);
