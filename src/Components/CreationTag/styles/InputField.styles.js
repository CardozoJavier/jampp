import styled from 'styled-components';
import { InputFieldContainer } from '../../InputField/styles';
import { palette } from '../../styles';
const { gray, white, blue } = palette;

export const CreationTagContainer = styled(InputFieldContainer)`
  width: ${({ width }) => width};
  padding: 0 5px;
  flex-wrap: wrap;
  cursor: text;
  overflow: hidden;
  min-height: 35px;
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