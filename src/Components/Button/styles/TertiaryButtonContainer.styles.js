import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, black } = palette;

/*
 * Tertiary button - Large | Medium | Small
 */
export default styled.div`
  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    .button {
      &--secondary {
        background-color: ${gray.g05};
        color: ${black};

        &__disabled {
          background-color: ${gray.g1};
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

    &--tertiary {
      background-color: ${gray.g1};
      color: ${gray.g4};
      border-radius: 4px;
      padding: 0.75em 1.5em;
      display: flex;
      align-items: center;
      
      &-large {
        font-size: 14px;
      }

      &-medium {
        padding: 0.75em 1.5em;
        font-size: 12px;
      }

      &-small {
        font-size: 9px;
      }

      &:hover {
        background-color: ${gray.g05};
        color: ${black};
        transition: background-color .3s;
      }

      &__inverted {
        background-color: ${gray.g1};
        color: ${gray.g4};
        border: none;
      }

      &__disabled {
        background-color: ${gray.g1};
        color: ${gray.g1};
        border: none;
      }
    }
  }
`;