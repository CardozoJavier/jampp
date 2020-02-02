import styled from 'styled-components';

export default styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};

  svg {
    fill: none;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }

  path {
    stroke: ${({ fill }) => fill};
  }

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