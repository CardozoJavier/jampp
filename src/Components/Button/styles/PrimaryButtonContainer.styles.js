import styled from 'styled-components';
import { palette } from '../../styles';
const { white, violet, gray, indefinido, black } = palette; 

/*
 * Primary button - Large | Medium | Small
 */
export default styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
    transition: background-color .3s;

    .button {
      &--primary {
        background-color: ${indefinido};
        
        &__disabled {
          background-color: ${white};
        }

        &__inverted {
          color: ${gray.g4};
          background-color: ${white};
          border: 1px solid ${gray.g07};

          &:active {
            color: ${black};
          }
        }
      }
    }

    .icon {
      &--info {
        &-normal {
          svg {
            fill: ${gray.g4};
          }
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
      padding: .9em 1.8em;

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
        color: ${gray.g1};
        border: 1px solid ${gray.g1};
      }

      &__inverted {
        background-color: ${white};
        color: ${gray.g3};
        border: 1px solid ${gray.g2};

        &.right-icon {
          padding: .9em 3em .9em 1.8em;
        }

        &.shadow {
          box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
        }
      }

    }
  }
`;