import styled from 'styled-components';
import { palette } from '../../../styles';
const { black, action, gray, violet } = palette;

export default styled.div`
  position: ${({ position }) => position || 'absolute'};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  margin: ${({ margin }) => margin};

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }

  &.icon {
    svg {
      fill: ${gray.g07};
    }
    &-medium {}
    &-small {}

    &.label {

      &--default {

        &__right {

          &.right-icon {
          }
        }
      }
    }
  }

  &:hover {
    &.icon.label--default {
      &-medium__right {
        cursor: pointer;
          svg {
            fill: ${action};
          }
        }

        &-small__right {
          cursor: pointer;
          svg {
            fill: ${gray.g4};
          }
        }
      }
    }
  }
`;