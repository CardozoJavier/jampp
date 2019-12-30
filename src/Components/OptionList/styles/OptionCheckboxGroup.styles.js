import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: 0;
  top: 45px;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
  background-color: white;

  &.dropdown, &.expandable {
    &-right {}
    
    &.option, &.label, &.button, &.list {
      &--default, &--basic, &--solid, &--noBorder, &--noBorderLink, &--noBorderPurple, &--header {
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

      &--noBorder, &--noBorderLink, &--noBorderPurple {
        top: 25px;
      }

      &--header {
        top: 25px;
        left: 0;
        padding: 0 20px 20px 20px;
        min-width: 220px;
      }
    }
  }

  &.expandable {
    transform: none;
    &.list {
      &--default {
        border-radius: 0;
        position: unset;
        box-shadow: none;
        
        &__opened {
          margin: 0 0 20px 20px;
          transform: none;
          height: auto
          transition: none;
        }

        &__closed {
          height: 0;
          transition: none;
          transform: none;
        }
      }
    }
  }
`;