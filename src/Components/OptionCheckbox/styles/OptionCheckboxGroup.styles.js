import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);

  &.dropdown {
    &-right {}
    
    &.option, &.label {
      &--default {
        &__opened {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 10px);
          transition: visibility 0s, opacity .3s, transform .3s;
        }

        &__closed {
          opacity: 0;
          visibility: hidden;
          transform: translate(0, 0);
          transition: visibility 0s, opacity .3s, transform .3s;
        }
      }
    }
  }
`;