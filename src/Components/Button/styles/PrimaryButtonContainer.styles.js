import styled from 'styled-components';
import { palette } from '../../styles';
import ButtonInput from './ButtonInput.styles';
const { white, violet, gray, black } = palette; 

/*
 * Primary button - Large | Medium | Small
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: fit-content;

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    &.button {
      &.primary {
        transform: ${({ fixed }) => fixed ? 'none' : 'translateY(-4px)'};
        transition: transform .3s;
        
        &--default {
          &__disabled {
            transform: none;
          }
        }

        &--inverted {
          color: ${gray.g4};
          background-color: ${white};
          border: 1px solid ${gray.g07};

          &__disabled {
            background-color: ${gray.g0};
            color: ${gray.g2};
            border: 1px solid ${gray.g2};
            transform: none;
          }
        }
      }
    }

    .icon {
      &--info {
        &-normal {
          svg {
            fill: ${gray.g4};
          }
        }
      }
    }
  }

  &.button {
    transition: background-color .3s;
    text-align: center;
    
    &-large {
      font-size: 16px;
      font-weight: 500;
      ${ButtonInput} {
        padding: 15px 30px;
      }
    }
    
    &-medium {
      font-size: 12px;
      ${ButtonInput} {
        padding: 0.75em 1.5em;
      }
    }
    
    &-small {
      font-size: 9px;
      ${ButtonInput} {
        padding: .3em .5em;
      } 
    }

    &:focus {
      outline: none;
    }

    &.primary {
      border-radius: 4px;
      transition: transform .3s;
      
      /**************************
       * Primary button default *
       * ************************
       */
      &--default {
        background-color: ${violet.v1};
        color: ${white};

        &__selected {}

        &__disabled {

          background-color: ${gray.g2};
          color: ${gray.g07};
          border: 1px solid ${gray.g2};
        }
      }

      /***************************
       * Primary button inverted *
       * *************************
       */
      &--inverted {
        background-color: ${white};
        color: ${gray.g3};
        border: 1px solid ${gray.g2};

        &.shadow {
          box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
        }

        &__selected {
          background-color: ${white};
          color: ${black};
          border: 1px solid ${gray.g07};
          transform: translateY(-4px);
          
          &.right-icon {
            padding: .9em 3em .9em 1.8em;
          }
          
          &.unborder-shadow {
            border: 1px solid ${white};
            box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
          }
        }

        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g2};
          border: 1px solid ${gray.g2};
        }
      }
    }
  }
`;