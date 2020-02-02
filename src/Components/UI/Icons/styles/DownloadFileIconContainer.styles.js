import styled from 'styled-components';
import { palette } from '../../../styles';
const { gray } = palette;

export default styled.div`
  pointer-events: none;
  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;

    path {
      fill: ${({ fill }) => fill};
    }
  }

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

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }
`;