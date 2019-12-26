import styled from 'styled-components';
import { palette } from '../../styles';
const { violet, action } = palette;

export const MultipleOptionListContainer = styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
  border-radius: 4px;
  min-width: 130px;
  background-color: white;
  
  &.dropdown {
    &-right {}
    
    &.account, &.button {

      &--full, &--default, &--solid, &--basic, &--noBorder, &--noBorderLink, &--noBorderPurple {
        &__opened {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 10px);
          transition: all .3s;
        }

        &__closed {
          transition: all .3s;
          opacity: 0;
          visibility: hidden;
          transform: translate(0, 0);
        }
      }

      &--noBorder, &--noBorderLink {
        top: 25px;
      }
    }
  }
`;