import styled from 'styled-components';
import { palette } from '../../styles';
import { AccessoryButtonContainer, ButtonInput } from '../../Button/styles';
import { DownloadFileIconContainer, DownChevronIconContainer } from '../../UI/Icons/styles';
const { white, violet, gray, black, link, blue, action } = palette;

export const ButtonDropdownContainer = styled(AccessoryButtonContainer)`
  justify-content: space-between;
  min-width: 70px;
  background-color: transparent;
  width: ${({ wide }) => wide ? '100%' : 'fit-content'};
  min-width: ${({ minWidth }) => minWidth};
  margin-top: 5px;

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

        &--noBorder {
          color: ${black};

          &__disabled {
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
      margin: 0 5px;
    }
    ${DownChevronIconContainer} {
      position: unset;
      stroke: ${gray.g4};
      fill: ${gray.g4};

      &.chevron {
        &.chevron {
          &--header {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    &.accessory, &.button, &.option, &.label {
      border-radius: 4px;

      &--default {
        align-items: center;
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
          padding: 9px 0;
        }


        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g07};

          ${DownloadFileIconContainer} {
            fill: ${gray.g07};
          }

          ${DownChevronIconContainer} {
            fill: ${gray.g07};
            stroke: ${gray.g07};
          }
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
          ${DownChevronIconContainer} {
            fill: ${gray.g07};
            stroke: ${gray.g07};
          }
        }
      }

      /***********************************
       * Accessory button no border link *
       * *********************************
       */
      &--noBorder, &--noBorderLink {
        background-color: transparent;
        color: ${gray.g4};
        min-width: 0;

        ${ButtonInput} {
          font-size: 12px;
        }

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
          ${DownChevronIconContainer} {
            fill: ${gray.g2};
            stroke: ${gray.g2};
          }
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
      &--noBorderPurple, &--header, &--expandable {
        background-color: transparent;
        color: ${action};
        min-width: 0;

        ${ButtonInput} {
          font-size: 12px;
        }

        &-left {
          &__closed, &__opened {
            flex-direction: row;
          }
        }
        
        &-right {
          &__closed, &__opened {
            flex-direction: row;
          }
        }
        
        &__disabled {
          cursor: default;
          color: ${gray.g07};
        }
      }
      
      &--header {
        z-index: 1;
        padding: 5px 10px

        &__opened {
          background-color: white;
          box-shadow: 0px -8px 12px -2px rgba(0,0,0,.1);
        }
      }
      
      &--expandable {
        justify-content: flex-start;

        ${ButtonInput} {
          padding: .75em 0;
        }
      }
    }
  }
`;
