import styled from 'styled-components';
import { palette } from '../../../styles';
import { SVGContainer } from '.';
const { green, blue, red, yellow } = palette;

export default styled(SVGContainer)`
  transition: all .3s;

  &.toggle {
    &-default {

    }

    &.switch {
      &--green, &--red, &--blue, &--yellow {
        &__on {
          transform: translateX(15px);
        }

        &__off {
          transform: translateX(0);
        }
      }

      &--green {
        &__on {
          circle {
            stroke: ${green.g1};
          }
        }
      }

      &--red {
        &__on {
          circle {
            stroke: ${red.r1};
          }
        }
      }

      &--blue {
        &__on {
          circle {
            stroke: ${blue.b05};
          }
        }
      }

      &--yellow {
        &__on {
          circle {
            stroke: ${yellow.y0};
          }
        }
      }
    }
  }
`;