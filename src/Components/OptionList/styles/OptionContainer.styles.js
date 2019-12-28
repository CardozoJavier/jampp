import styled from 'styled-components';
import OptionCheckboxContainer from './OptionCheckboxContainer.styles';
import { palette } from '../../styles';
import { CheckIconContainer } from '../../UI/Icons/styles';
const { action, gray, violet } = palette;

export default styled(OptionCheckboxContainer)`
  padding: 10px;

  &.unique, &.expandable {
    &.option, &.unique {
      &--default {
        &__selected {
          background-color: ${violet.v05};
          transition: background-color .3s;
          ${CheckIconContainer} {
            path {
              stroke: ${action};
            }
          }
          p {
            font-weight: 900;
            color: ${action};
            transition: font-weight .3s;
          }
        }
      }
    }
  }
`;