import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  svg {
    fill: none;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }

  &.checkbox {
    &-top {}

    &.basic {
      &--default {
        display: none;
        
        &__selected {
          display: block;
        }
      }
    }
  }
`;