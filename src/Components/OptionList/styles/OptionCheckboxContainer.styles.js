import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, violet, action } = palette;

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  min-width: 130px;

  &.unique, &.status {
    
    /*********************************
     * Option checkbox container TOP *
     * *******************************
     */
    &-first {
      display: flex;
      position: relative;
      border-radius: 4px 4px 0 0;
      border-bottom: 1px solid ${gray.g1};
      transition: all .3s;
    }

    /************************************
     * Option checkbox container MIDDLE *
     * **********************************
     */
    &-middle {
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0;
      border-bottom: 1px solid ${gray.g1};
      transition: all .3s;
    }

    /************************************
     * Option checkbox container BOTTOM *
     * **********************************
     */
    &-last {
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0 0 4px 4px;
      transition: all .3s;
    }

    &.option {
      &--default {
        &__selected {
          background-color: ${violet.v05};
          transition: background-color .3s;
          font-weight: 900;
          color: ${action};

          label {
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