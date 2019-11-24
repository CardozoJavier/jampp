import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

/**
 * Basic input field - large | medium | small
 */
export default styled.div`
  .input {
    transition: all .3s;
    border: 1px solid ${gray.g1};
    color: ${gray.g4};

    &::placeholder {
      color: ${gray.g07};
    }

    &-large {}

    &-medium {
      padding: .8em .7em;
    }

    &-small {}

    &.basic {
      border-radius: 4px;

      &--default {

        &:hover, &:focus {
          transition: all .3s;
          border: 1px solid ${gray.g3};
          &::placeholder {
            color: ${gray.g3};
          }
        }

        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g07};
    
          &:hover {
            transition: all .3s;
            cursor: default;
            background-color: ${gray.g0};
            color: ${gray.g07};
            border: 1px solid ${gray.g1};
            &::placeholder {
              color: ${gray.g07};
            }
          }
        }
      }
    }
  }
`;

