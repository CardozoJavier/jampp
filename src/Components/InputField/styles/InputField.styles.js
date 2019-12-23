import styled from 'styled-components';
import { palette } from '../../styles';
import { ExclamationIconContainer, SearchIconContainer } from '../../UI/Icons/styles';
const { gray, red, white, } = palette;

export const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  &:hover {
    &.input {

      &-left {
        ${SearchIconContainer} {
          svg {
            fill: ${gray.g3};
          }
        }
      }

      &.basic {
        &--default, &--medium, &--small {
          border: 1px solid ${gray.g07};
          input::placeholder {
            color: ${gray.g3};
          }

          &__error {
            border: 1px solid ${red.r3};
          }

          &__disabled {
            border: 1px solid ${gray.g1};

            input {
              background-color: ${gray.g0};
            }
  
            input::placeholder {
              color: ${gray.g05};
            }
          }
        }
      }
    }
  }

  &.input {
    &-medium {}

    &-left {
      flex-direction: row-reverse;

      ${SearchIconContainer} {
        margin-left: 10px;
      }
    }
   
    &.basic {
      transition: all .2s;

      ${ExclamationIconContainer} {
        path {
          fill: ${white};
        }

        visibility: hidden;
        width: 18px;
        height: 18px;
        margin: 0 5px;
      }

      &--default, &--medium, &--small {
        border: 1px solid ${gray.g1};
        border-radius: 4px;

        input::placeholder {
          color: ${gray.g07};
        }

        &__error {
          transition: all .2s;
          border: 1px solid ${red.r3};

          ${ExclamationIconContainer} {
            visibility: visible;
            path {
              fill: ${red.r3};
            }
          }
        }

        &__blur {
          border: 1px solid ${gray.g1};
        }

        &:hover, &__focus {
          border: 1px solid ${gray.g07};
          input::placeholder {
            color: ${gray.g3};
          }

          ${SearchIconContainer} {
            svg {
              fill: ${gray.g3};
            }
          }
        }

        &__disabled {
          input {
            background-color: ${gray.g0};
          }

          input::placeholder {
            color: ${gray.g05};
          }
        }
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  &.input {
    &.basic {
      color: ${red.r3};

      &--default {
        transition: all .2s;
        visibility: hidden;
        opacity: 0;
        transform: translateY(-5px);
        font-size: 10px;
        margin: 5px 3px;

        &__error {
          transition: all .2s;
          transform: translateY(5px) translateY(-5px);
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`;
