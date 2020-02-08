import styled from 'styled-components';
import { SVGContainer } from '.';

export default styled(SVGContainer)`
  pointer-events: none;

  &.dropdown, &.chevron {
    &.account, &.button, &.chevron, &.label {
      &--full, &--default, &--header {
        &__opened {
          transform: rotateX(-180deg) translateY(1px);
          transition: all .3s;
        }

        &__closed {
          transform: rotateX(0);
          transition: all .3s;
        }
      }
      &--header {
        &__opened {
          transform: rotateX(-180deg);
        }
      }
    }
  }
`;