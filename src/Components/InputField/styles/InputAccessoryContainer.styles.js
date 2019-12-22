import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

/**
 * Accessory input field - left | right | both
 */
export default styled.div`
  position: relative;

  .input {
    transition: all .3s;
    border: 1px solid ${gray.g1};
    color: ${gray.g4};

    &::placeholder {
      color: ${gray.g07};
    }

    &-large {}

    &-medium {
      padding: .8em;
    }

    &-small {}

    &.accessory {
      border-radius: 4px;
      position: absolute;

      &--default {
        &__left {
          padding: .8em .7em .8em 3em;
        }
  
        &__right {
          padding: .8em 3em .8em .7em;
        }
  
        &__both {
          padding: .8em 3em;
        }

        &:hover, &:focus {
          transition: all .3s;
          border: 1px solid ${gray.g3};
      
          &::placeholder {
            color: ${gray.g3};
          }
        }

        &__disabled {
          cursor: default;
          background-color: ${gray.g0};
          border: 1px solid ${gray.g1}
          &::placeholder {
            color: ${gray.g05};
          }

          &:hover, &:focus {
            cursor: default;
            background-color: ${gray.g0};
            border: 1px solid ${gray.g1}
            &::placeholder {
              color: ${gray.g05};
            }
          }
        }
      }
    }
  }
`;
  