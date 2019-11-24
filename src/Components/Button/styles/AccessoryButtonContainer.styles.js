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
        
        &--default {
          color: ${white};
        }

        &--inverted {
          background-color: ${gray.g05};
          color: ${black};

          &__disabled {
            background-color: ${gray.g1};
          }
        }

      }
    }
  }
  
  .button {
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
      padding: 0.75em 1.5em;
    }
    
    &-both {
      font-size: 12px;
      font-weight: normal;
      padding: .75em 2.5em;
    }
    
    &:focus {
      outline: none;
    }
    
    &.accessory {
      border-radius: 4px;

      /****************************
       * Accessory button default *
       * **************************
       */
      &--default {
        background-color: ${violet.v1};
        color: ${white};
      }
      
      /*****************************
       * Accessory button inverted *
       * ***************************
       */
      &--inverted {
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
