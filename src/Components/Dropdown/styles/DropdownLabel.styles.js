import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const DropdownLabel = styled.label`
  font-size: 12px;
  margin: 0;
  color: ${gray.g4};
  margin-bottom: 5px;
  display: inline-block;
`;