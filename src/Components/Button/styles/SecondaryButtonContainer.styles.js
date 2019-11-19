import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, black } = palette;

/*
 * Secondary button - Large | Medium | Small
 */
export default styled.div`
  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
  }

  .button {
    transition: background-color .3s;
    cursor: pointer;
    text-align: center;
    
    &:focus {
      outline: none;
    }

    &--secondary {
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
        font-size: 12px;
        font-weight: normal;
      }

      &-small {
        font-size: 9px;
      }

      &:hover {
        background-color: ${gray.g05};
        color: ${black};
        transition: background-color .3s;
      }

      &__disabled {
        background-color: ${gray.g1};
        color: ${gray.g4};
        border: none;
        cursor: default;

        &:hover {
          background-color: #eff0f5;
        }
      }
    }
  }
`;