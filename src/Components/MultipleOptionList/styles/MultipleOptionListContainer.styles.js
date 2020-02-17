import styled from 'styled-components';
import { palette } from '../../styles';
const { violet, action } = palette;

export const MultipleOptionListContainer = styled.div`
  position: absolute;
  left: 0;
  top: 48px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
  border-radius: 4px;
  overflow: hidden;
  min-width: 130px;
  width: 100%;
  background-color: white;
  z-index: 1;
  max-height: 50vh;
  overflow: scroll;
  margin-bottom: 10px;
  
  &.dropdown {
    &-right {}
    
    &.account, &.button {

      &--full, &--default, &--solid, &--basic, &--noBorder, &--noBorderLink, &--noBorderPurple {
        &__opened {
          opacity: 1;
          visibility: visible;
          transform: translateY(10px);
          transition: all .3s;
        }

        label ~ &__opened {
          transform: translateY(20px);
        }

        &__closed {
          transition: all .3s;
          opacity: 0;
          visibility: hidden;
          transform: translateY(0);
        }
      }

      &--noBorder, &--noBorderLink, &--noBorderPurple {
        top: 25px;
      }
    }
  }
`;