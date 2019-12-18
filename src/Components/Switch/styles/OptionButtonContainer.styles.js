import styled from 'styled-components';
import { palette } from '../../styles';
import { SwitchButtonInput } from './SwitchButtonInput.styles';
const { white, violet, gray, action, indefinido } = palette;

/*
 * Option button - Left | Middle | Right
 */
export const OptionButtonContainer = styled.div`
  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: all .3s;

    &.button, &.optionCheckbox {
      &.option, &.basic {

        &--default {
          &__selected {
          }
          
          &__disabled {
            cursor: default;
          }
        }

        &--inverted {}
      }
    }
  }

  &.button {
    transition: all .3s;
    text-align: center;
    font-size: 12px;
    font-weight: 400;    
    border-radius: 4px;

    &-first {
      border-radius: 5px 0 0 5px;
      margin-right: 5px;
    }

    &-middle {
      border-radius: 0;
      margin: 0 5px;
    }

    &-last {
      border-radius: 0 5px 5px 0;
      margin-left: 5px;
    }

    &:focus {
      outline: none;
    }

    &.option, &.basic {
      ${SwitchButtonInput} {
        padding: 10px 15px;
      }
      
      /*************************
       * Switch button default *
       * ***********************
       */
      &--default {
        border: 1px solid ${gray.g1};
        background-color: ${white};
        color: ${gray.g3};

        &__selected {
          border: 1px solid ${action};
          background-color: ${violet.v05};
          color: ${action};
        }

        &__disabled {
          background-color: ${white};
          color: ${gray.g1};
          border: 1px solid ${gray.g1};
        }
      }

      /**************************
       * Option button inverted *
       * ************************
       */
      &--inverted {}      
    }
  }  
`;