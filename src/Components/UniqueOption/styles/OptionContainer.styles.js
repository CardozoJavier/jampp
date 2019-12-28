import styled from 'styled-components';
import { OptionCheckboxContainer } from '../../OptionList/styles';
import { palette } from '../../styles';
import { CheckIconContainer } from '../../UI/Icons/styles';
const { action, violet } = palette;

export const OptionContainer = styled(OptionCheckboxContainer)`
  padding: 10px;

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