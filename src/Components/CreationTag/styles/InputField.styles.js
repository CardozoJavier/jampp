import styled from 'styled-components';
import { InputFieldContainer } from '../../InputField/styles';
import { palette, fonts } from '../../styles';
const { size10 } = fonts;
const { gray, white, blue } = palette;

export const CreationTagContainer = styled(InputFieldContainer)`
  width: ${({ width }) => width};
  padding: 0 5px;
  flex-wrap: wrap;
  cursor: text;
  overflow: hidden;
  min-height: 35px;

  &:hover {
    &.input {
      &.basic {
        &--default, &--medium, &--small {
          &__disabled {
            border: 1px solid ${gray.g1};
            input {
              background-color: ${white};
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
    &.basic {
      &--default, &--medium, &--small {
        border: 1px solid ${gray.g1};
        border-radius: 4px;

        input::placeholder {
          color: ${gray.g07};
        }

        &__disabled {
          background-color: ${white};
          cursor: default;
          input {
            background-color: ${white};
          }

          input::placeholder {
            color: ${gray.g05};
          }
        }
      }
    }
  }
`;

export const SuggestionsList = styled.div`
  background-color: ${white};
  border-radius: 4px;
  padding: 11px 0;
  border: 1px solid ${gray.g2};
  position: absolute;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  word-break: break-all;

  .button.link--default-left {
    font-size: 10px;
    display: inline;
    margin-left 3px;
  }
  
  .suggestion-active {
    background-color: ${blue.b05};
  }

  &.list {
    &--expand {
      transform: translateY(0px);
      visibility: visible;
      opacity: 1;
      transition: visibility .1s, opacity .1s, transform.3s;
    }
    &--collapse {
      transform: translateY(-10px);
      opacity: 0;
      visibility: hidden;
      transition: visibility .1s, opacity .1s, transform.3s;
    }
  }
`;

export const SuggestionsListContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PlainText = styled.p`
  word-break: break-all;
  color: ${gray.g3};
  font-size: ${size10};
  margin: 0;
`;