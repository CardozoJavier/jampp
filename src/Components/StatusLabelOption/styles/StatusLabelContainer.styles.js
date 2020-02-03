import styled from 'styled-components';
import { OptionCheckboxContainer } from '../../OptionList/styles';
import { palette } from '../../styles';
import { CheckIconContainer } from '../../UI/Icons/styles';
const { action, violet } = palette;

export default styled(OptionCheckboxContainer)`
  padding: 8px;

  &.unique {
    &.option {
      &--default, &--header {
        &__selected {
          background-color: ${violet.v05};
          transition: background-color .3s;
          ${CheckIconContainer} {
            path {
              stroke: ${action};
            }
          }
        }
      }
    }
  }
`;