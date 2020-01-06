import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

/**
 * Accessory input field - left | right | both
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
    color: ${gray.g4};

    &::placeholder {
      color: ${gray.g07};
    }

    &-large {}

    &-medium {
    }

    &-small {}

    &.accessory {
      border-radius: 4px;
      position: absolute;

      &--default {
        &__left {
        }
  
        &__right {
        }
  
        &__both {
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
  