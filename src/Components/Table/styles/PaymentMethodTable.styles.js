import styled from 'styled-components';
import { palette } from '../../styles';
import {
  Row,
  RowName,
  RowTitle,
  TableTitle,
  TableHeader,
  ColumnTitle,
  ColumnField,
  TableButtons,
  TableContainer,
  ColumnFieldButton,
} from './Table.styles';
const { gray } = palette;

export const PaymentTableHeader = styled(TableHeader)`
`;

export const PaymentTableTitle = styled(TableTitle)`
`;

export const PaymentTableButtons = styled(TableButtons)`
`;

export const PaymentTableContainer = styled(TableContainer)`
`;
  
export const PaymentRowContainer = styled(Row)`
  grid-template-columns: 8% 17% 25% 25% 25%;

  &.selected {
    background-color: ${gray.g0};
  }
`;
  
export const PaymentRowTitle = styled(RowTitle)`
  grid-template-columns: 8% 17% 25% 50%;
`;
  
export const PaymentColumnTitle = styled(ColumnTitle)`
  grid-column-start: ${({ start }) => start};
  padding: ${({ padding }) => padding};

`;


export const PaymentColumnField = styled(ColumnField)`
`;

export const PaymentColumnFieldButton = styled(ColumnFieldButton)`
  justify-self: center;
`;

export const PaymentRowName = styled(RowName)`
  padding: 0;
  justify-content: center;
  border: none;
`;