import styled from 'styled-components';
import { palette } from '../../../styles';
const { action, gray } = palette;

export default styled.div`
  display: flex;
  margin: ${({ margin }) => margin};

  svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    path {
      fill: ${({ fill }) => fill};
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