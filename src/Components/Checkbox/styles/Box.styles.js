import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, white } = palette;

export const Box = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid ${gray.g1};
  border-radius: 2px;
  background-color: ${white};
  position: absolute;
  right: 10px;

  &.checkbox {
    &-top {}

    &.basic {
      &--default {
        display: block;
        
        &__selected {
          display: none;
        }
      }
    }
  }
`;