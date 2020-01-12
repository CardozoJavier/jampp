import React from 'react';
import { TableContainer, ColumnTitle } from './styles';

const Table = ({ children }) => (
  <TableContainer>
    {children}
  </TableContainer>
);

export default Table;