import styled from 'styled-components';
import { palette } from '../../../styles';
import { SVGContainer } from '.';
const { action, gray } = palette;

export default styled(SVGContainer)`
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