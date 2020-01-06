import styled from 'styled-components';

export default styled.div`
  position: ${({ position }) => position || 'absolute'};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};

  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
    path {
      fill: ${({ fill }) => fill};
    }
  }

  &.dropdown, &.chevron {
    &.account, &.button, &.chevron, &.label {
      &--full, &--default {
        &__opened {
          transform: rotateX(-180deg);
          transition: all .3s;
        }

        &__closed {
          transform: rotateX(0);
          transition: all .3s;
        }
      }
    }
  }

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }
`;