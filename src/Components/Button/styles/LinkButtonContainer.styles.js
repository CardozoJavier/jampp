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
      ${AddIconContainer} {
        svg {
          width: 11px;
          height: 11px;
        }
      }

      &--default {
        font-size: 12px;
        color: ${link};

        ${AddIconContainer} {
          fill: ${link};
        }
        
        &__disabled {
          color: ${gray.g05};
          
          ${AddIconContainer} {
            fill: ${gray.g05};
          }
        }
      }
    }
  }
`;