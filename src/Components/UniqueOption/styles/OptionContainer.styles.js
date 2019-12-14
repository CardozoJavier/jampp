import styled from 'styled-components';
import { OptionCheckboxContainer } from '../../OptionList/styles';
import { palette } from '../../styles';
const { action } = palette;

export const OptionContainer = styled(OptionCheckboxContainer)`
  padding: 10px;
  
  &.optionCheckbox {
    &.basic {
      &-top {}

      &--default {
        &__selected {
          p {
            font-weight: 900;
            color: ${action};
          }
        }
      }
    }
  }
`;