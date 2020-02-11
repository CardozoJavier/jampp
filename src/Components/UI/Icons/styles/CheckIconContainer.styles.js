import styled from 'styled-components';
import { SVGContainer } from '.';

export default styled(SVGContainer)`
  &.dropdown {
    &-top {}

    &.modal {
      &--default {
        display: none;
        
        &__selected {
          display: block;
        }
      }
    }
  }

  &.checkbox {
    &-top {}

    &.basic {
      &--default, &--filled, &--clean {
        
        &__selected {
        }
      }
    }
  }


  &.optionCheckbox {
    &-top {}

    &.basic {
      &--default, &--filled, &--clean {
        display: none;
        
        &__selected {
          display: block;
        }
      }
    }
  }

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }
`;