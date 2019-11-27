import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, action, indefinido } = palette;

/*
 * Option button - Left | Middle | Right
 */
export default styled.div`
  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: all .3s;

    .button {
      &.option {

        &--default {
          &__selected {
          }
          
          &__disabled {
            background-color: ${white};
          }
        }

        &--inverted {}
      }
    }
  }

  .button {
    transition: all .3s;
    text-align: center;
    font-size: 12px;
    font-weight: 400;    
    padding: 0.67em .62em;
    border-radius: 4px;

    &-left {
      border-radius: 5px 0 0 5px;
      margin-right: 5px;
    }

    &-middle {
      border-radius: 0;
      margin: 0 5px;
    }

    &-right {
      border-radius: 0 5px 5px 0;
      margin-left: 5px;
    }

    &:focus {
      outline: none;
    }

    &.option {
      
      /*************************
       * Option button default *
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
          color: ${gray.g4};
          border: 1px solid ${action};
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