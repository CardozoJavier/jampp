import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);

  &.dropdown {
    &-right {}
    
    &.option, &.label, &.button {
      &--default, &--basic, &--solid, &--noBorder, &--noBorderLink {
        &__opened {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 10px);
          transition: all .3s;
        }

        &__closed {
          opacity: 0;
          visibility: hidden;
          transform: translate(0, 0);
          transition: all .3s;
        }
      }

      &--noBorder, &--noBorderLink {
        top: 25px;
      }
    }
  }
`;