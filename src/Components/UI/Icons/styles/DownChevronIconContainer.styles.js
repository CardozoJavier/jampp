import styled from 'styled-components';
import { SVGContainer } from '.';

export default styled(SVGContainer)`
  pointer-events: ${({ pointerEvents }) => pointerEvents};

  &.dropdown, &.chevron, &.expandable {
    &.account, &.button, &.chevron, &.label, &.card {
      &--full, &--default, &--header {
        &__opened, &__expand {
          transform: rotateX(-180deg) translateY(1px);
          transition: all .3s;
        }

        &__closed, &__collapse {
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