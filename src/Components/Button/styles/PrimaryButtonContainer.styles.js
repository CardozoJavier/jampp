import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, indefinido } = palette; 

/*
 * Primary button - Large | Medium | Small
 */
export default styled.div`
  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    .button {
      &--primary {
        background-color: ${indefinido};
        
        &__disabled {
          background-color: ${white};
        }
      }
    }
  }

  .button {
    transition: background-color .3s;
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

      &__disabled {
        background-color: ${white};
        color: ${gray.g4};
        border: 1px solid ${gray.g1};
      }
    }
  }
`;