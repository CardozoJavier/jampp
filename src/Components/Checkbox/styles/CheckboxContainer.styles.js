import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, violet, action } = palette;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 8px;
  position: relative;

  &.checkbox {
  /***********************
   * Checkbox TOP styles *
   * *********************
   */
    &-top {
      display: flex;
      position: relative;
      margin-bottom: 5px;
      border-radius: 5px 5px 0 0;
      border-bottom: 1px solid ${gray.g1};
      transition: all .3s;
    }

  /**************************
   * Checkbox MIDDLE styles *
   * ************************
   */
    &-middle {
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0;
      margin: 5px 0;
      border-top: 1px solid ${gray.g1};
      border-bottom: 1px solid ${gray.g1};
      transition: all .3s;
    }

  /**************************
   * Checkbox BOTTOM styles *
   * ************************
   */
    &-bottom {
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0 0 5px 5px;
      margin-top: 5px;
      border-top: 1px solid ${gray.g1};
      transition: all .3s;
    }

    &.basic {
      &--default, &--filled, &--clean {
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
    cursor: pointer;
    background-color: ${gray.g0};
    transition: background-color .3s;
  }
`;