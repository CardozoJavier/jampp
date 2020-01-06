import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, white } = palette;

export default styled.div`
  display: flex;
    
  &:hover {
    cursor: ${({ disabled}) => disabled ? 'default' : 'pointer'};
    transition: all .3s;

    &.button {
      &.secondary {

        &--action {
          transform: none;
        }
      }
    }
  }

  &.button {
    text-align: center;

    &-medium {
      padding: 5px;
      font-size: 12px;
    }

    &:focus {
      outline: none;
    }

    &.secondary {
      display: flex;
      align-items: center;
      border-radius: 4px;
      margin: 10px 0;

      /****************************
       * Secondary button default *
       * **************************
       */
      &--action {
        background-color: ${white};
        color: ${gray.g3};
      }
    }
  }
`;
