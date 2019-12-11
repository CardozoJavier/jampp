import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, violet } = palette;

export const OptionContainer = styled.div`
  border-bottom: 1px solid ${gray.g1};
  
  &.last-item__true {
    border-bottom: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${gray.g0};
  }
`;