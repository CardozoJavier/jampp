import styled from 'styled-components';
import { palette } from '../../../styles';
const { black, action, gray, violet } = palette;

export default styled.div`
  display: flex;

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