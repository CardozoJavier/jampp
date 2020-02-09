import styled from 'styled-components';
import { SVGContainer } from '.';
import { palette } from '../../../styles';
const { gray } = palette;

export default styled(SVGContainer)`
  pointer-events: none;

  &.dropdown {
    &.button {
      &--solid {
        &__disabled {
          svg {
            fill: ${gray.g07};
          }
        }
      }
    }
  }
`;