import styled from 'styled-components';
import { ButtonDropdownContainer } from '../../Dropdown/styles';
import { palette } from '../../styles';
const { gray } = palette;

export const TableHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`;

export const TableTitle = styled.p`
  margin-right: 16px;
  font-size: 14px;
`;

export const TableButtons = styled.div`
  display: flex;
  margin-left: auto;
  align-items: baseline;

  ${ButtonDropdownContainer} {
    margin-right: 10px;
  }

`;

export const TableContainer = styled.div`
  width: 100%;
  background-color: ${gray.g0};
`;

export const ColumnTitle = styled.p`
  margin: 14px 0;
`;