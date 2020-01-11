import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, action, black } = palette;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
`;

export const RadioButtonLabel = styled.label`
  font-size: 12px;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  margin: 4px 0;

  &.input {
    &.label {
      &--default {
        color: ${({ checked }) => checked ? action : black};

        &__disabled {
          color: ${gray.g1};
        }
      }
    }
  }
`;

export const RadioButtonSuffix = styled.p`
  margin: 0;
  font-size: 10px;
  color: ${gray.g3};
`;

export const RadioButtonGroupContainer = styled.div``;

export const Radio = styled.div`
  border-radius: 100%;
  border: 1px solid ${gray.g1};
  width: 20px;
  height: 20px;
  position: absolute;

`;

export const InputTypeRadio = styled.input`
  transition: all .2s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  cursor: inherit;
  margin: 0;
  width: 20px;
  height: 20px;

  &:hover + ${Radio} {
    transition: all .2s;
    border: 1px solid ${gray.g3};
  }
  
  &:checked + ${Radio} {
    transition: all .2s;
    border: 3px solid ${action};
  }

  &:hover + .input.radio--visible__disabled {
    transition: all .2s;
    border: 1px solid ${gray.g1};
  }
`;

export const InputTypeRadioContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;