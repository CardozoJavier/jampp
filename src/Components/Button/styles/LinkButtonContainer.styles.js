import styled from 'styled-components';
import { palette } from '../../styles';
const { link, gray } = palette;

/**
 * Link button - Default | Disabled
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }

  .button {
    &-left {
      padding: .3em .3em .3em 1.5em;
    }
    
    /*************************
     * Accessory button link *
     * ***********************
     */
    &.link {
      &--default {
        font-size: 12px;
        color: ${link};

        &__disabled {
          color: ${gray.g05};
        }
      }
    }
  }
`;