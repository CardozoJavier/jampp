import styled from 'styled-components';
import { palette } from '../../styles';
import { AccessoryButtonContainer, ButtonInput } from '../../Button/styles';
import { DownloadFileIconContainer } from '../../UI/Icons/styles';
const { white, violet, gray, black, link, blue, action } = palette;

export const ButtonDropdownContainer = styled(AccessoryButtonContainer)`
  justify-content: space-between;
  min-width: 70px;

  &:hover {
    transform: none;

    &.button, &.dropdown {
      &.accessory, &.button, &.option, &.label {
        &--solid {
          background-color: ${gray.g05};

          &__disabled {
            cursor: default;
            background-color: ${gray.g0};
            color: ${gray.g07};
          }
        }

        &--basic {
          border: 1px solid ${gray.g07};
          color: ${black};

          &__disabled {
            cursor: default;
            border: 1px solid ${gray.g1};
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
    ${DownloadFileIconContainer} {
      width: 20px;
      height: 20px;
      fill: ${gray.g4};
      margin-left: 10px;
    }

    &.accessory, &.button, &.option, &.label {
      border-radius: 4px;

      &--default {
        background-color: ${white};
      }

      /*******************************
       * Accessory button solid gray *
       * *****************************
       */
      &--solid {
        background-color: ${gray.g1};
        color: ${gray.g4};
        ${ButtonInput} {
          font-size: 12px;
          padding: 10px 0;
        }


        &__disabled {
          background-color: ${gray.g0};
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

        ${ButtonInput} {
          font-size: 12px;
        }


        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g07};
        }
      }

      /***********************************
       * Accessory button no border link *
       * *********************************
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
          cursor: default;
          color: ${gray.g07};
        }
      }
      &--noBorderLink {
        color: ${link};
        padding: 0;

        &__disabled {
          color: ${blue.b05};
        }
      }


      /*************************************
       * Accessory button no border purple *
       * ***********************************
       */
      &--noBorderPurple {
        background-color: ${white};
        color: ${action};
        min-width: 0;

        &-left {
          &__closed, &__opened {
            flex-direction: row;
          }
        }
  
        &-right {
          &__closed, &__opened {
            flex-directin: row;
          }
        }

        &__disabled {
          cursor: default;
          color: ${gray.g07};
        }
      }
    }
  }
`;
