import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray } = palette; 

/*
 * Primary button - Large | Medium | Small
 */
export default styled.div`
  .button {
    transition: background-color .3s;
    cursor: pointer;
    text-align: center;
    
    &:focus {
      outline: none;
    }

    &--primary {
      background-color: ${violet.v1};
      color: ${white};
      border-radius: 4px;
      padding: .907em 1.795em;

      &-large {
        font-size: 16px;
        font-weight: 500;
      }
      
      &-medium {
        padding: 0.75em 1.5em;
        font-size: 12px;
      }
      
      &-small {
        font-size: 9px;
        padding: .3em .5em;
      }

      &:hover {
        background-color: #786fb1;
        transition: background-color .3s;
      }

      &__disabled {
        background-color: ${white};
        color: ${gray.g4};
        border: 1px solid ${gray.g1};
        cursor: default;

        &:hover {
          background-color: ${white};
        }
      }
    }
  }
`;