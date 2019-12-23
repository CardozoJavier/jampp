import styled from 'styled-components';
import { palette } from '../../styles';
const { gray, action, black } = palette;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioButtonLabel = styled.label`
  font-size: 12px;
  margin: 0 10px;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};

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

export const RadioButtonSubLabel = styled.p`
  margin: 0;
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
    border: 1px solid ${gray.g3};
  }
  
  &:checked + ${Radio} {
    border: 3px solid ${action};
  }

  &:hover + .input.radio--visible__disabled {
    border: 1px solid ${gray.g1};
  }
`;

export const InputTypeRadioContainer = styled.div`
  margin: 5px 0;
  position: relative;
  width: 20px;
  height: 20px;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
`;