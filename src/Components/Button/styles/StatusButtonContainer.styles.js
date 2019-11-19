import styled from 'styled-components';
import { palette } from '../../styles';
const { violet, green, gray } = palette;

/**
 * Mini button - normal
 */
export default styled.div`
  display: flex;
  align-items: center;

  .button {
    transition: background-color .3s;
    cursor: pointer;
    text-align: center;

    &:focus {
      outline: none;
    }

    &--statusok {
      border-radius: 9px;
      padding: .3em 1em;
      background-color: ${green.g0};
      font-size: 10px;
      font-weight: normal;
      color: ${green.g1};
      
      &-small {
        padding: .3em 1.2em .3em 2em;
      }
    }
    
    &--label {
      border-radius: 4px;
      font-size: 10px;
      font-weight: normal;
      background-color: ${violet.v05};
      color: ${gray.g4};
      
      &-small {
        padding: .3em 1.75em .3em 1em;
      }

      &-medium {
        padding: .6em 4.5em .6em 1em;
      }

      &:hover {
        background-color: red;
      }
    }
  }
`;
