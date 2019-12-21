import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, violet, action } = palette;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 70px;
  justify-content: space-between;


  &.checkbox {
    /***********************
     * Dropdown TOP styles *
     * *********************
     */
      &-top {
        display: flex;
        position: relative;
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid ${gray.g1};
        transition: all .3s;
      }

    /**************************
     * Dropdown MIDDLE styles *
     * ************************
     */
      &-middle {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 0;
        border-bottom: 1px solid ${gray.g1};
        transition: all .3s;
      }

    /**************************
     * Dropdown BOTTOM styles *
     * ************************
     */
      &-bottom {
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 0 0 4px 4px;
        transition: all .3s;
      }

    &.modal, &.basic {
      &--filled, &--default {

        &__selected {
        }

        &__disabled {
          p {
            color: ${gray.g1};
          }
        }
      }
    }
  }

  &.dropdown {
    &-multipleoptions {}
    &.basic {
      &--default {
        padding: 10px;
        &__selected {
            background-color: ${violet.v05};
            transition: background-color .3s;

          p {
            font-weight: 900;
            color: ${action};
            transition: font-weight .3s;
          }
        }
      }
    }
  }

  &:hover {
    .checkbox {
      &-multipleoptions {}

      &.basic {
        &--default, &--filled, &--clean {
          border: 1px solid ${gray.g3};
          cursor: pointer;

          &__selected {
            border: 1px solid ${action};
          }

          &__disabled {
            cursor: default;
            border: 1px solid ${gray.g1};
          }
        }
      }
    }
  }
`;