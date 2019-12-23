import styled from 'styled-components';
import { InputTypeRadioContainer, InputTypeRadio } from '../../RadioButton/styles';
import { palette } from '../../styles';
const { gray, action } = palette;

export const TabGroupContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 3px 0;
  border-bottom: 1px solid ${gray.g05};
`;

export const TabContainer = styled.div`
`;

export const TabButton = styled.div`
  position: absolute;
  padding-bottom: 10px;
  width: 100%;

`;

export const TabText = styled.p`
  display: inline;
  color: ${gray.g3};
  font-size: 14px;
  margin-left: ${({ ifIcon }) => ifIcon ? '25px' : 0};
`;

export const InputContainer = styled(InputTypeRadioContainer)`
  width: 200px;
`;

export const InputRadio = styled(InputTypeRadio)`
  width: 100%;
  &:hover + ${TabButton} {
    ${TabText} {
      color: ${gray.g4};
    }
  }
  
  &:checked + ${TabButton} {
    ${TabText} {
      color: ${action};
    }
    border-bottom: 1px solid ${action};
  }
`;

