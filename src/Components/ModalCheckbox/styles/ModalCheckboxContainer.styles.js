import styled from 'styled-components';

export const ModalCheckboxContainer = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
  border-radius: 4px;

  &.dropdown {

    &-right {

    }

    &.account {
      &--full {
        &__opened {
          display: unset;
        }

        &__closed {
          display: none;
        }
      }
    }
  }
`;