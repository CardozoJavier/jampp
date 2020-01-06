import styled from 'styled-components';
import { palette } from '../../styles';
const { gray } = palette;

export const ControlledInputFieldContainer = styled.div`
  transition: all .3s;
  display: flex;
  align-items: center;
  border: 1px solid ${gray.g1};
  border-radius: 4px;
  
  &:hover {
    transition: all .3s;

    p {
      transition: .3s;
      color: ${gray.g3};
    }

    &.border, &.placeholder {
      &-medium {}
  
      &.controlled {
        &--default {
          transition: all .3s;
          border: 1px solid ${gray.g3};

          &::placeholder {
            color: ${gray.g07};
          }

          &__focus, &__typing {}

          &__disabled {
            border: 1px solid ${gray.g1};
            input {
              background-color: ${gray.g0};
            }
            p {
              color: ${gray.g05};
            }
          }
        }
      }
    }
  }

  .placeholder {
    &-medium {}
    &.controlled {
      &--default {
        &__typing {
          display: none;
        }
      }
    }
  }

  &.placeholder {
    &.controlled {
      &--default {
        &__typing {
          border: 1px solid ${gray.g3};
        }

        &__disabled {
          border: 1px solid ${gray.g1};
          input {
            background-color: ${gray.g0};
          }
          p {
            color: ${gray.g05};
          }
        }
      }
    }
  } 

  &.border {
    &-medium {}

    &.controlled {
      &--default {
        &__focus, &__typing {
          border: 1px solid ${gray.g3};
        }
      }
    }
  } 
`;

export const CustomPlaceholderNormal = styled.p`
  color: ${gray.g07};
  display: inline;
  font-size: 12px;
  margin: .1em;
`;

export const CustomPlaceholderBold = styled(CustomPlaceholderNormal)`
  font-weight: 900;
`;

export const CustomPlaceholderContainer = styled.label`
  position: absolute;
  margin-left: 8px;

  &:hover {
    cursor: text;
  }

  &.border {
    &.controlled {
      &--default {
        &__focus {
          p {
            color: ${gray.g3};
          }
        }
      }
    }
  }
`;


export const InputControlledContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    &.input {
      &.basic {
        &--default {
          border: 1px solid ${gray.g07};
          input::placeholder {
            color: ${gray.g3};
          }
        }
      }
    }
  }

  &.input {
    transition: all .3s;
    border: 1px solid ${gray.g1};

    &::placeholder {
      color: ${gray.g07};
    }

    &-large {}

    &-medium {
    }

    &-small {}

    &.basic {
      border-radius: 4px;

      &--default {
        input::placeholder {
          color: ${gray.g07};
        }

        &__blur {
          border: 1px solid ${gray.g1};
        }

        &__focus {
          border: 1px solid ${gray.g07};
          input::placeholder {
            color: ${gray.g3};
          }
        }

        &__disabled {
          background-color: ${gray.g0};
          color: ${gray.g07};
    
          &:hover {
            transition: all .3s;
            cursor: default;
            background-color: ${gray.g0};
            color: ${gray.g07};
            border: 1px solid ${gray.g1};
            &::placeholder {
              color: ${gray.g07};
            }
          }
        }
      }
    }
  }
`;
