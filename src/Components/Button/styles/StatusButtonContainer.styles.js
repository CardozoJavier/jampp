import styled from 'styled-components';
import { palette } from '../../styles';
const { violet, green, gray, indefinido } = palette;

/**
 * Mini button - normal
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    .button {
      &.statusok {
        background-color: ${indefinido}
      }

      &.label {
        background-color: ${indefinido};
      }
    }
  }

  .button {
    transition: background-color .3s;
    text-align: center;

    &-large {}

    &-medium {
      font-size: 10px;
      font-weight: normal;      
      padding: .6em 1em;
    }

    &-small {
      font-size: 10px;
      font-weight: normal;
      padding: .3em 1em;
    }
    
    &:focus {
      outline: none;
    }
    
    /*************************
     * Status button default *
     * ***********************
     */
    &.statusok {
      border-radius: 9px;
      
      &--default {
        background-color: ${green.g0};
        color: ${green.g1};
        
        &__left {
          padding: .3em 1.2em .3em 2em;
        }
      }
      
    }
    
    /************************
     * Label button default *
     * **********************
     */
    &.label {
      border-radius: 4px;
      
      &--default {
        background-color: ${violet.v05};
        color: ${gray.g4};

        &__right {
          padding-right: 1.75em;

          &.right-icon {
            padding-right: 4.5em;
          }
        }
      }
    }
  }
`;
