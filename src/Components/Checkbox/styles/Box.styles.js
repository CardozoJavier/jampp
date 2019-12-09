import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, white, action } = palette;

export const Box = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid ${gray.g1};
  border-radius: 3px;
  background-color: ${white};

  &.dropdown {
    &-top {}

    &.modal {
      &--filled {
        &__selected {
          background-color: ${action};
        }
      }
    }
  }

  &.checkbox {
    &-top {}

    &.basic {
      &--default {
        
        &__selected {
          background-color: ${action};
          border: 1px solid ${action};
        }
      }

      &--filled {
        &__selected {
          background-color: ${action};
        }
      }

      &--clean {
        display: none;
      }
    }
  }
`;