import styled from 'styled-components';
import { palette } from '../../../styles';
const { green } = palette;

export default styled.div`
  position: ${({ position }) => position || 'absolute'};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  margin: ${({ margin }) => margin};
  transition: all .3s;

  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }

  &.toggle {
    &-default {

    }

    &.switch {
      &--green {
        &__on {
          transform: translateX(15px);
          circle {
            stroke: ${green.g1};
          }
        }

        &__off {
          transform: translateX(0);
        }
      }
    }
  }


`;