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

  display: flex;
  align-items: center
  
  .button {
    transition: background-color .3s;
    cursor: pointer;
    text-align: center;
    
    &:focus {
      outline: none;
    }

    &--accessory {
      background-color: ${violet.v1};
      color: ${white};
      border-radius: 4px;
      padding: 0.75em 1.5em;
      display: flex;
      align-items: center;
      
      &-left {
        font-size: 12px;
        font-weight: normal;
        padding: .75em 1em .75em 2.5em;

        &:hover {
          background-color: red;
          transition: background-color .3s;
        }
      }
      
      &-right {
        font-size: 12px;
      }
      
      &-both {
        font-size: 12px;
        font-weight: normal;
        padding: .75em 2.5em;
      }
      
      &__inverted {
        background-color: ${gray.g1};
        color: ${gray.g4};

        &:hover {
          background-color: ${gray.g05};
          color: ${black};
          transition: background-color .3s;
        }
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