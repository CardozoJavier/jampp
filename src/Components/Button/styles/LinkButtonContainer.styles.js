import styled from 'styled-components';
import { palette } from '../../styles';
import { AddIconContainer } from '../../UI/Icons/styles';
const { link, gray } = palette;

/**
 * Link button - Default | Disabled
 */
export default styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  }

  &.button {
    &-left {
      flex-direction: row-reverse;
      
      ${AddIconContainer} {
        margin-right: 5px;
      }
    }
    
    /*************************
     * Accessory button link *
     * ***********************
     */
    &.link {
      &--default, &--duplicate, &--check, &--customize {
        font-size: 12px;
        color: ${link};

        &__disabled {
          color: ${gray.g05};
          
          svg {
            fill: ${gray.g05};
          }
        }
      }
      &--customize {
        padding: 10px;
        width: 100%;
        border-top: 1px solid ${gray.g1};
        justify-content: center;
      }
    }
  }
`;