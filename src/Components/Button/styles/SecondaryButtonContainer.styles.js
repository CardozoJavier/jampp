import styled from 'styled-components';
import { palette } from '../../styles';
import ButtonInput from './ButtonInput.styles';
const { white, violet, gray, black } = palette;

/*
 * Secondary button - Large | Medium | Small
 */
export default styled.div`
  display: flex;
  justify-content: center;
  
  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: all .3s;

    &.button {
      &.secondary {
        transform: ${({ fixed }) => fixed ? 'none' : 'translateY(-4px)'};

        &--default {
          &__disabled {
            transform: none;
          }
        }

        &--action {
          // transform: none;
        }

        &--gray {
          background-color: ${gray.g05};
          color: ${black};

          &__disabled {
            transform: none;
            background-color: ${gray.g1};
            color: ${gray.g07};
          }
        }

        &--inverted {
          color: ${gray.g4};
          border: 1px solid ${gray.g07};

          &__disabled {
            transform: none;
            color: ${gray.g1};
            border: 1px solid ${gray.g1};
          }
        }
      }
    }
  }

  &.button {
    transition: all .3s;
    text-align: center;

    &-large {
      font-size: 14px;
    }

    &-medium {
      ${ButtonInput} {
        padding: 10px 15px;
      }
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
      &--default, &--action {
        background-color: ${violet.v1};
        color: ${white};

        &__selected {}

        &__disabled {

          background-color: ${gray.g2};
          color: ${gray.g07};
          border: 1px solid ${gray.g2};
        }
      }
      
      /*************************
       * Secondary button gray *
       * ***********************
       */
      &--gray {
        background-color: ${gray.g1};
        color: ${gray.g4};

        &__selected {}

        &__disabled {
          color: ${gray.g07};
          background-color: ${gray.g1};
        }

      }

      /*****************************
       * Secondary button inverted *
       * ***************************
       */      
      &--inverted {
        background-color: ${white};
        color: ${gray.g07};
        border: 1px solid ${gray.g1};

        &__selected {}

        &__disabled {
          color: ${gray.g1};
        }
      }
    }
  }
`;