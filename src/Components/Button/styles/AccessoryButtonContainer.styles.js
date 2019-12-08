import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, black, link } = palette;

/*
 * Secondary button - Large | Medium | Small
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transition: all .3s;

  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: all .3s;
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-4px)'};

    .button, .dropdown {
      &.accessory, &.button, &.option, &.label {
        
        &--default {
          color: ${white};

          &__disabled {
            background-color: ${gray.g2};
            color: ${gray.g07};
          }
        }

        &--gray {
          background-color: ${gray.g05};
          color: ${black};

          &__disabled {
            background-color: ${gray.g1};
            color: ${gray.g07};
          }
        }
      }
    }

    .button.accessory--default-left {
      svg {
        fill: ${black};
      }
    }
  }
  
  .button, .dropdown {
    display: flex;
    text-align: center;
    align-items: center;

    &-left {
      font-size: 12px;
      font-weight: normal;
      padding: .75em 1em .75em 2.5em;
    }
    
    &-right, &-status {
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
    
    &.accessory, &.button, &.option, &.label {
      border-radius: 4px;

      /****************************
       * Accessory button default *
       * **************************
       */
      &--default {
        background-color: ${violet.v1};
        color: ${white};

        &__disabled {
          background-color: ${gray.g2};
          color: ${gray.g07};
        }
      }
      
      /*****************************
       * Accessory button gray *
       * ***************************
       */
      &--gray {
        background-color: ${gray.g1};
        color: ${gray.g4};

        &__disabled {
          background-color: ${gray.g1};
          color: ${gray.g07};
        }
      }
    }
  }
`;
