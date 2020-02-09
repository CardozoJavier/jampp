import React from 'react';
import { Card } from '../src/Components';
import { PaymentMethodTable, PaymentRow } from '../src/Components/Table';
import {
  PaymentRowName,
  PaymentRowTitle,
  PaymentColumnField,
  PaymentColumnTitle,
  TableContainer,
} from '../src/Components/Table/styles';
import { TableImageIcon } from '../src/Components/UI/Icons';

export default {
  title: 'Payment method',
};

/**
 * PatymentMethodTable component should be called with
 * @prop {Node} children - (Required) It's the content to be displayed.
 *  
 *  PaymentRow component should be called with
 *  @prop {children} - (Required) It's the content to be displayed.
 *  @prop {String} id - (Required) It's an unique ID to identifier each option in Payment group.
 *
 *    PaymentColumnField component can be called with
 *    @prop {String} children - (Required) It's the text to be displayed.
 *    @prop {String} textWhenSelect - (Optional) Text to be displayed when PaymentColumnField is selected.
 *    @prop {Boolean} button - (Optional) If true, PaymentColumnField behaves like button.
 *    @prop {Function} onClick - (Optional) Callback to trigger on onClick event.
 */
export const Default = () => (
  <Card width="922px" padding="16px 16px 62px 16px">
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
          <PaymentColumnField button textWhenSelect="Default payment method" onClick={() => console.log('Option clicked!')}>{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
        <PaymentRow id="row2">
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField button textWhenSelect="Default payment method">{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
        <PaymentRow id="row3">
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField button textWhenSelect="Default payment method">{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
        <PaymentRow id="row4">
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField button textWhenSelect="Default payment method">{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
        <PaymentRow id="row5">
          <PaymentRowName>
            <TableImageIcon />
          </PaymentRowName>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField>{ 'Data here' }</PaymentColumnField>
          <PaymentColumnField button textWhenSelect="Default payment method">{ 'Make default' }</PaymentColumnField>
        </PaymentRow>
      </PaymentMethodTable>
    </TableContainer>
  </Card>
);
