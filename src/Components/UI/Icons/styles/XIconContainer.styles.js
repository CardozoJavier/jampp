import styled from 'styled-components';
import { palette } from '../../../styles';
const { black, action, gray } = palette;

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

  &:hover {
    &.button.label--default {
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