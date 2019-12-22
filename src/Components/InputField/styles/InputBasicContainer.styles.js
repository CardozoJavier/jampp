import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

/**
 * Basic input field - large | medium | small
 */
export default styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  &:hover {
    &.input {
      &.basic {
        &--default {
          border: 1px solid ${gray.g07};
          input::placeholder {
            color: ${gray.g3};
          }
        }
      }
    }
  }

  &.input {
    transition: all .3s;
    border: 1px solid ${gray.g1};

    &::placeholder {
      color: ${gray.g07};
    }

    &-large {}

    &-medium {
    }

    &-small {}

    &.basic {
      border-radius: 4px;

      &--default {
        input::placeholder {
          color: ${gray.g07};
        }

        &__blur {
          border: 1px solid ${gray.g1};
        }

        &__focus {
          border: 1px solid ${gray.g07};
          input::placeholder {
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

