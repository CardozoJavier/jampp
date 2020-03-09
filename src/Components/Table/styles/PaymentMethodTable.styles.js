import styled from 'styled-components';
import { palette } from '../../styles';
import {
  RowName,
  RowTitle,
  TableTitle,
  TableHeader,
  ColumnTitle,
  ColumnField,
  RowContainer,
  TableButtons,
  TableContainer,
  ColumnFieldButton,
} from './Table.styles';
import { ButtonInput } from '../../Button/styles';
const { violet, action } = palette;

export const PaymentTableHeader = styled(TableHeader)`
`;

export const PaymentTableTitle = styled(TableTitle)`
`;

export const PaymentTableButtons = styled(TableButtons)`
`;

export const PaymentTableContainer = styled(TableContainer)`
`;
  
export const PaymentRowContainer = styled(RowContainer)`
  grid-template-columns: 8% 17% 25% 25% 25%;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  &.selected {
    background-color: ${violet.v05};
    transition: background-color .3s;

    ${ButtonInput} {
      color: ${action};
      font-weight: 900;
    }
  }
`;
  
export const PaymentRowTitle = styled(RowTitle)`
  grid-template-columns: 8% 17% 25% 50%;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
  
export const PaymentColumnTitle = styled(ColumnTitle)`
  grid-column-start: ${({ start }) => start};
  padding: ${({ padding }) => padding};
  border-left: ${({ borderLeft }) => borderLeft};
`;


export const PaymentColumnField = styled(ColumnField)`
  border-left: ${({ borderLeft }) => borderLeft};
`;

export const PaymentColumnFieldButton = styled(ColumnFieldButton)`
  justify-self: center;
`;

export const PaymentRowName = styled(RowName)`
  padding: 0;
  justify-content: center;
  border: none;
`;