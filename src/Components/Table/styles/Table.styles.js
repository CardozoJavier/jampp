import styled from 'styled-components';
import { ButtonDropdownContainer } from '../../Dropdown/styles';
import { palette } from '../../styles';
import { Button } from '../../Button';
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
`;
  
export const RowContainer = styled.div`
  padding: 0 8px;
  border-bottom: 1px solid ${gray.g1};
  align-items: center;
  display: grid;
  grid-template-columns: 22.5% 11% 11% 11% 22.5% 22%;
  height: 64px;
`;
  
export const RowTitle = styled(RowContainer)`
  background-color: ${gray.g0};
  border-bottom: none;
  height: 40px;
`;
  
export const ColumnTitle = styled.p`
  margin: 0;
  font-size: 10px;
  color: ${gray.g4};
  border-left: ${({ borderLeft }) => borderLeft || `1px solid ${gray.g1}`};
  padding-left: 15px;
  height: 24px;
  vertical-align: middle;
  line-height: 24px;
`;


export const ColumnField = styled.div`
  border-left: ${({ borderLeft }) => borderLeft || `1px solid ${gray.g0}`};
  font-size: 12px;
  margin: 0;
  height: 100%;
  vertical-align: middle;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const ColumnFieldButton = styled(ColumnField)`
  justify-self: end;
  padding-left: 0;
  border-left: ${({ borderLeft }) => borderLeft || 'none'};
`;

export const RowName = styled(ColumnField)`
  font-weight: 600;
  border-left: none;
`;
