import styled from 'styled-components';
import { palette } from '../../styles';
import { AddIconContainer } from '../../UI/Icons/styles';
import ButtonInput from './ButtonInput.styles';
const { white, violet, gray, black, link } = palette;

/*
 * Secondary button - Large | Medium | Small
 */
export default styled.div`
  display: flex;
  align-items: center;
  transition: all .3s;

  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: all .3s;
    transform: ${({ disabled }) => disabled ? 'none' : 'translateY(-4px)'};

    &.button, .dropdown {
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
            transform: none;
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
  
  &.button, .dropdown {
    display: flex;
    text-align: center;
    align-items: center;

    &-left {
      font-size: 12px;
      font-weight: normal;
      flex-direction: row-reverse;

      ${AddIconContainer} {
        margin-left: 10px;
      }

      ${ButtonInput} {
        padding: 10px 20px 10px 10px;
      }
    }
    
    &-right, &-status {
      font-size: 12px;
      
      ${AddIconContainer} {
        margin-right: 10px;
      }

      ${ButtonInput} {
        padding: 10px 10px 10px 20px;
      }
    }
    
    &-both {
      font-size: 12px;
      font-weight: normal;

      ${AddIconContainer} {
        margin-right: 10px;
      }

      ${ButtonInput} {
        padding: 10px 20px;
      }
    }
    
    &:focus {
      outline: none;
    }
    
    &.accessory, &.button, &.option, &.label, &.gray {
      border-radius: 4px;

      ${ButtonInput} {
        padding: .75em 1em;
      }

      ${AddIconContainer} {
        svg {
          width: 11px;
          height: 11px;
        }
      }

      /****************************
       * Accessory button default *
       * **************************
       */
      &--default {
        background-color: ${violet.v1};
        color: ${white};

        ${AddIconContainer} {
          fill: ${white};
        }

        &__disabled {
          background-color: ${gray.g2};
          color: ${gray.g07};
          
          ${AddIconContainer} {
            fill: ${gray.g07};
          }
        }
      }

      /*******************************
       * Accessory button solid gray *
       * *****************************
       */
      &--gray {
        background-color: ${gray.g1};
        color: ${gray.g4};
        // padding: 5px 0 5px 8px;

        ${AddIconContainer} {
          fill: ${gray.g4};
        }

        &__disabled {
          background-color: ${gray.g1};
          color: ${gray.g07};

          ${AddIconContainer} {
            fill: ${gray.g07};
          }
        }
      }
    }
  }
`;
