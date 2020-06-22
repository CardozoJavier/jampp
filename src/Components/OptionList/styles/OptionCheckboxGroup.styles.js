import styled from 'styled-components';
import { palette } from '../../styles';

const { violet, gray } = palette;

export default styled.div`
  position: absolute;
  left: 0;
  top: 38px;
  border-radius: 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);
  background-color: white;
  z-index: 1;
  min-width: ${({ minWidth }) => minWidth || '130px'};
  width: ${({ width }) => width || 'inherit'};
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  max-height: 50vh;
  overflow: scroll;
  margin-bottom: 10px;

  .button.link--customize-left {
    background-color: ${({ customSelected }) => (customSelected ? violet.v05 : 'unset')};
    &:hover {
      background-color: ${({ customSelected }) => (customSelected ? violet.v05 : gray.g0)};
    }
  }

  &.dropdown, &.expandable {
    &-right {}
    
    &.option, &.label, &.button, &.list {
      &--default, &--basic, &--solid, &--noBorder, &--noBorderLink, &--noBorderPurple, &--header {
        &__opened {
          z-index: 2;
          opacity: 1;
          visibility: visible;
          transform: translateY(10px);
          transition: all .3s, z-index 0s, visibility 0s;
        }

        label ~ &__opened {
          transform: translateY(30px);
        }

        &__closed {
          z-index: -9999;
          opacity: 0;
          visibility: hidden;
          transform: translateY(0);
          transition: all .3s, z-index 0s, visibility 0s;
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
        z-index: 0;
        .unique.option--header {
          border: none;
        }
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
        width: auto;
        
        &__opened {
          margin: 0 0 20px 20px;
          transform: none;
          height: auto;
          max-height: 110px;
          overflow-y: scroll;
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
