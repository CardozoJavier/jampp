import styled from 'styled-components';

export const ChildrenContainer = styled.div`
  background-color: white;
  z-index: 1;
  width: 100%;

  &.dropdown {
    &.button {
      &--noBorderLink {
        &__opened {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 10px);
          transition: all .3s;
        }
        
        &__closed {
          opacity: 0;
          visibility: hidden;
          height: 0;
        }
      }
    }
  }
`;