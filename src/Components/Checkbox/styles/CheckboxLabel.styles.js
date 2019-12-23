import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, action } = palette;

export const CheckboxLabel = styled.p`
  font-size: 12px;
  color: ${({ disabled }) => disabled ? gray.g1 : gray.g4};
  margin: 0;

  &::after {
    display: block;
    content: attr(label);
    font-weight: bold;
    height: 1px;
    color: transparent;
    overflow: hidden;
    visibility: hidden;
  }

  &.checkbox {
    &.label {
      &--default{
        &__selected {
          color: ${action};
        }

        &__disabled {
          cursor: default;
          color: ${gray.g1};
        }
      }
    }
  }
`;