import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, green, blue, red, yellow } = palette;

export const ToggleSwitchContainer = styled.div`
  border-radius: 15px;
  background-color: ${gray.g1};
  display: flex;
  align-items: center;
  width: 33px;
  height: 18px;
  transition: all .3s;

  &:hover {
    transition: all .3s;
    cursor: pointer;
    circle {
      transition: all .3s;
      stroke: ${gray.g07};
    }
    
    background-color: ${gray.g07};
    &.toggle {
      
      &-default {}
      &.switch {
        &--green {
          &__disabled {
            cursor: default;
            background-color: ${gray.g0};
            circle {
              stroke: ${gray.g0};
            }
          }
        } 
      }
    }
  }

  &.toggle {
    transition: all .3s;
    &-default {}
    &.switch {
      &--green {
        &__on {
          background-color: ${green.g1};
        }

        &__disabled {
          background-color: ${gray.g0};
          circle {
            stroke: ${gray.g0};
          }
        }
      }

      &--red {
        &__on {
          background-color: ${red.r1};
        }

        &__disabled {
          background-color: ${gray.g0};
          circle {
            stroke: ${gray.g0};
          }
        }
      }

      &--blue {
        &__on {
          background-color: ${blue.b05};
        }

        &__disabled {
          background-color: ${gray.g0};
          circle {
            stroke: ${gray.g0};
          }
        }
      }

      &--yellow {
        &__on {
          background-color: ${yellow.y0};
        }

        &__disabled {
          background-color: ${gray.g0};
          circle {
            stroke: ${gray.g0};
          }
        }
      }
    }
  }


`;