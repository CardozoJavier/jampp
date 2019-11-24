import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, black } = palette;

/*
 * Secondary button - Large | Medium | Small
 */
export default styled.div`
  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    .button {
      &.secondary {

        &--default {
          background-color: ${gray.g05};
          color: ${black};
          transition: background-color .3s;

          &__disabled {
            background-color: ${gray.g1};
            color: ${gray.g07};
          }
        }

        &--inverted {}

      }
    }
  }

  .button {
    transition: background-color .3s;
    text-align: center;

    &-large {
      font-size: 14px;
    }

    &-medium {
      padding: 0.75em 1.5em;
      font-size: 12px;
    }

    &-small {
      font-size: 9px;
    }

    &:focus {
      outline: none;
    }

    &.secondary {
      display: flex;
      align-items: center;
      border-radius: 4px;
      
      /****************************
       * Secondary button default *
       * **************************
       */
      &--default {
        background-color: ${gray.g1};
        color: ${gray.g4};

        &__selected {}

        &__disabled {
          color: ${gray.g07};
        }

      }

      /*****************************
       * Secondary button inverted *
       * ***************************
       */      
      &--inverted {
        background-color: ${gray.g1};
        color: ${gray.g4};
        border: none;

        &__selected {}

        &__disabled {
          background-color: ${gray.g1};
          color: ${gray.g1};
          border: none;
        }
      }
    }
  }
`;