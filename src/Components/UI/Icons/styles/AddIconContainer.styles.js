import styled from 'styled-components';
import { palette } from '../../../styles';
const { gray, white } = palette;

export default styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};


  svg {
    fill: ${({ fill }) => fill};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    vertical-align: middle;
  }

  &.icon {
    &.accessory{
      &-left {}
      &--gray {
        svg {
          fill: ${gray.g4};
        }
        &__disabled {
          svg {
            fill: ${gray.g07};
          }
        }
      }

      &--default {
        svg {
          fill: ${white};
        }
        &__disabled {
          svg {
            fill: ${gray.g07};
          }
        }
      }
    }
  }
  }
`;