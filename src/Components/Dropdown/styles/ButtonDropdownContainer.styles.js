import styled from 'styled-components';
import { palette } from '../../styles';
import { AccessoryButtonContainer } from '../../Button/styles';
const { white, violet, gray, black, link } = palette;

export const ButtonDropdownContainer = styled(AccessoryButtonContainer)`
  justify-content: space-between;
  min-width: 70px;

  &:hover {
    transform: none;

    &.button, &.dropdown {
      &.accessory, &.button, &.option, &.label {
        &--solid {
          background-color: ${gray.g05};
          color: ${black};

          &__disabled {
            background-color: ${gray.g1};
            color: ${gray.g07};
          }
        }

        &--basic {
          border: 1px solid ${gray.g07};
          color: ${black};

          &__disabled {
            background-color: ${gray.g0};
            color: ${gray.g07};
          }
        }
      }
    }
  }

  .button, .dropdown {
    &-left, &-right {
      padding: 0;
    }
  }
  
  &.button, &.dropdown {
    &.accessory, &.button, &.option, &.label {
      border-radius: 4px;

      /*******************************
       * Accessory button solid gray *
       * *****************************
       */
      &--solid {
        background-color: ${gray.g1};
        color: ${gray.g4};
        padding: 5px 0 5px 8px;

        &__disabled {
          background-color: ${gray.g1};
          color: ${gray.g07};
        }
      }

      /**************************
       * Accessory button basic *
       * ************************
       */
      &--basic {
        background-color: ${white};
        color: ${gray.g4};
        border: 1px solid ${gray.g1};
        padding: 5px 0 5px 8px;


        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g07};
        }
      }

      /******************************
       * Accessory button no border *
       * ****************************
       */
      &--noBorder, &--noBorderLink {
        background-color: ${white};
        color: ${gray.g4};
        min-width: 0;

        &-left {
          &__closed, &__opened {
            flex-direction: row-reverse;
          }
        }
  
        &-right {
          &__closed, &__opened {
            flex-directin: row;
          }
        }

        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g07};
        }
      }
      &--noBorderLink {
        color: ${link};
        padding: 0;
      }
    }
  }
`;
