import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, black } = palette;

/*
 * Secondary button - Large | Medium | Small
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    .button {
      &.accessory {
        
        &--inverted {
          color: ${white};
        }

        &--default {
          background-color: ${gray.g05};
          color: ${black};

          &__disabled {
            background-color: ${gray.g1};
          }
        }

      }
    }
  }
  
  .button, .dropdown {
    transition: background-color .3s;
    display: flex;
    text-align: center;
    align-items: center;

    &-left {
      font-size: 12px;
      font-weight: normal;
      padding: .75em 1em .75em 2.5em;
    }
    
    &-right {
      font-size: 12px;
      padding: 0.75em 2.5em .75em 1em;
    }
    
    &-both {
      font-size: 12px;
      font-weight: normal;
      padding: .75em 2.5em;
    }
    
    &:focus {
      outline: none;
    }
    
    &.accessory, &.button {
      border-radius: 4px;

      /****************************
       * Accessory button default *
       * **************************
       */
      &--inverted {
        background-color: ${violet.v1};
        color: ${white};
      }
      
      /*****************************
       * Accessory button inverted *
       * ***************************
       */
      &--default {
        background-color: ${gray.g1};
        color: ${gray.g4};

        &__disabled {
          background-color: ${gray.g1};
          color: ${gray.g4};
          border: none;
        }
      }
    }
  }
`;
