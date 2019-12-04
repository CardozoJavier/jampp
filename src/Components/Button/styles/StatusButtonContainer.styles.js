import styled from 'styled-components';
import { palette } from '../../styles';
const { black, violet, green, gray, red, blue, yellow, link } = palette;

/**
 * Mini button - normal
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px;

  .button {
    transition: background-color .3s;
    text-align: center;

    &-large {}

    &-medium {
      font-size: 10px;
      font-weight: normal;      
      padding: .6em 1em;
      color: ${black};
    }

    &-small {
      font-size: 10px;
      font-weight: normal;
      padding: .3em 1em;
      color: ${gray.g4};
    }
    
    &:focus {
      outline: none;
    }
    
    /*******************************
     * Status label button default *
     * *****************************
     */
    &.status {
      border-radius: 9px;
      
      &--green {
        background-color: ${green.g0};
        color: ${green.g1};
        
        &__left {
          padding: .3em 1.2em .3em 2em;
        }
      }

      &--red {
        background-color: ${red.r1};
        color: ${red.r3};
        
        &__left {
          padding: .3em 1.2em .3em 2em;
        }
      }
      
      &--yellow {
        background-color: ${yellow.y0};
        color: ${yellow.y2};
        
        &__left {
          padding: .3em 1.2em .3em 2em;
        }
      }
      
      &--blue {
        background-color: ${blue.b05};
        color: ${link};
        
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
