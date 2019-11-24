import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const ControlledInputFieldContainer = styled.div`
  transition: all .3s;
  display: flex;
  align-items: center;
  
  &:hover {
    transition: all .3s;

    p {
      transition: .3s;
      color: ${gray.g3};
    }
  }

  .placeholder {
    
    &-medium {}
    
    &.controlled {
      &--default {
        &__selected {
          display: none;
        }
      }
    }
  }
`;

export const CustomPlaceholderContainer = styled.label`
  position: absolute;
  margin-left: 8px;

  &:hover {
    cursor: text;
  }
`;

export const CustomPlaceholderNormal = styled.p`
  color: ${gray.g07};
  display: inline;
  font-size: 12px;
  margin: .1em;
`;

export const CustomPlaceholderBold = styled(CustomPlaceholderNormal)`
  font-weight: 900;
`;