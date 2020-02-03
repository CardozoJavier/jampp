import styled from 'styled-components';

export default styled.div`
  position: ${({ position }) => position || 'absolute'};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};
  pointer-events: none;

  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
    pointer-events: none;
    path {
      pointer-events: none;
      fill: ${({ fill }) => fill};
    }
  }

  &.dropdown, &.chevron {
    &.account, &.button, &.chevron, &.label {
      &--full, &--default, &--header {
        &__opened {
          transform: rotateX(-180deg) translateY(-5px);
          transition: all .3s;
        }

        &__closed {
          transform: rotateX(0);
          transition: all .3s;
        }
      }
      &--header {
        &__opened {
          transform: rotateX(-180deg);
        }
      }
    }

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }
`;