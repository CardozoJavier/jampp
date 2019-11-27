import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const CheckboxLabel = styled.p`
  font-size: 12px;
  color: ${gray.g4};
  margin: 0;
  margin-right: 30px;

  &::after {
    display: block;
    content: attr(label);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }
`;